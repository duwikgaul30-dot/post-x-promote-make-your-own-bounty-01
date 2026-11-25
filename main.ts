// post-x-promote-make-your-own-bounty-01 — authored entrypoint (Node 22, standard library only).
//
// The entry is the X post itself: Popi's own quote of make.fun's
// make-your-own-bounty post, with the promo photo attached and the play
// code in its text. POST.json names that post; the house reads the post's
// replies, reposts and quotes straight from X. This program's only job is
// to hand the gate the exact POST.json bytes, after a sanity check that
// the URL inside is a real X status address — nothing about the post is
// scored from anything this program writes.
//
// Run outside the grader's container with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The output POST.json is byte-identical to the repository's POST.json:
// the program parses a copy for validation but writes the original bytes
// untouched, so repeated runs always produce the same file.

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// A real X status address: https://x.com/<handle>/status/<digits>
// (x.com or twitter.com, with or without a trailing path or query — the
// gate normalises the address, so anything but a status URL is rejected
// here before it can reach the gate).
const STATUS_URL =
  /^https:\/\/(?:www\.)?(?:x\.com|twitter\.com)\/[A-Za-z0-9_]+\/status\/\d+(?:[/?#].*)?$/;

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

async function main(): Promise<void> {
  const sourcePath = join(BOT_DIR, 'POST.json');
  let raw: Buffer;
  try {
    raw = await readFile(sourcePath);
  } catch (err) {
    fail(`could not read POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw.toString('utf8'));
  } catch (err) {
    fail(`POST.json is not valid JSON: ${(err as Error).message}`);
  }

  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    fail('POST.json must hold a JSON object with a "url" field');
  }
  const url = (parsed as Record<string, unknown>).url;
  if (typeof url !== 'string' || url.length === 0) {
    fail('POST.json has no "url" string — replace the placeholder with your post address');
  }
  if (!STATUS_URL.test(url)) {
    fail(`"url" is not an X status address: ${url}`);
  }

  await mkdir(OUTPUT_DIR, { recursive: true });
  // Write the original bytes untouched, not a re-serialised copy, so the
  // output is byte-identical to the repository's POST.json on every run.
  await writeFile(join(OUTPUT_DIR, 'POST.json'), raw);
  console.log(`main.ts: POST.json validated (${url}) and copied to ${OUTPUT_DIR}`);
}

await main();
