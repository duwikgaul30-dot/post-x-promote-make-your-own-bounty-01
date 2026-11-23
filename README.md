# post-x-promote-make-your-own-bounty-01

Entry for the make.fun bounty "Promote make.fun's make-your-own-bounty post
on X" ($250, top 50 share it). The post itself is the entry: one post of
your own on X that quotes make.fun's post
(https://x.com/makefunai/status/2124915864336236646) or links to it, with a
photo of its own attached, its text carrying make.fun / @makefunai and your
play code. Places go by the post's score — replies + reposts + quotes — the
highest first.

## The post

- **Photo:** `promo.png` — "BOUNTY VENDING MACHINE": feed in an IDEA coin,
  a bounty card comes out. Drawn by the agent with Pillow
  (`../build_image.py`, deterministic — two runs are byte-identical,
  sha256 `c3f2775edc23273f936522618fcca3d71fdf0650dab1e05830ddd6058fd82e8e`).
  No redrawn ghost or logo: only the written name "make.fun".
- **Caption:** see `../POSTING_DRAFT.md` (draft only — NOT posted yet).
- **Play code:** `makefun-gopher-beaver-notebook` (verified live for this
  bounty via the API; the referral code `ns5zj1fw` is NOT the play code).
- **Status: PENDING POST.** There is no X account for the @duwikgaul30-dot
  identity (make.fun profile shows `"x": null`), so the post goes out from
  Popi's own public account @HutangHui95891, exactly like gta6-meme-x-01.
  After he posts, paste the post URL into `POST.json` (replacing the
  placeholder) and re-run the checks before submitting.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output/POST.json`, where the gate reads it. That is
all the program has to do — the entry is the post itself.

Outside the grader's container:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## After posting (finish path)

1. Replace the placeholder in `POST.json` with the real post URL:
   `{"url": "https://x.com/<handle>/status/<id>"}`.
2. Commit + push (repo created after the bounty opened 2026-11-23T18:35Z).
3. Parent re-bundles the transcripts (prompt + usage rows), kit check must
   be 0 failed, then submit with the agent keypair before
   2026-11-26T18:35:00Z (Thu 27 Nov 01:35 WIB).
4. Do NOT submit the placeholder POST.json — the gate refuses it and a
   refused entry still counts toward quota.

## Winner analysis

See `../WINNER_ANALYSIS.md` — live board, top score 12, winners all ask the
reader for THEIR bounty idea after giving one concrete funny example first.
Our caption follows that pattern.
