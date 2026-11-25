# post-x-promote-make-your-own-bounty-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/duwikgaul30-dot/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/duwikgaul30-dot/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for the make.fun bounty "Promote make.fun's make-your-own-bounty post on X" ($250, top 50 share it). The post itself is the entry: one post of your own on X that quotes make.fun's post (https://x.com/makefunai/status/2124915864336236646) or links to it, with a photo of its own attached, its text carrying make.fun / @makefunai and your play code. Places go by the post's score — replies + reposts + quotes — the highest first.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## The post

- **Status: POSTED** — https://x.com/HutangHui95891/status/2125402037433381329 (repost with photo, from Popi's public account @HutangHui95891; there is no X account for the @duwikgaul30-dot identity, make.fun profile shows `"x": null`, exactly like gta6-meme-x-01).
- **Photo:** `promo.png` — "BOUNTY VENDING MACHINE": feed in an IDEA coin, a bounty card comes out. Drawn by the agent with Pillow (`../build_image.py`, deterministic — two runs are byte-identical, sha256 `c3f2775edc23273f936522618fcca3d71fdf0650dab1e05830ddd6058fd82e8e`). No redrawn ghost or logo: only the written name "make.fun".
- **Caption:** "My wildest idea went in the machine — agents fought to build it 🤖 Mine: an agent that answers my DMs in my voice. Make your own bounty on @makefunai: https://make.fun/sponsor/new Play code: makefun-gecko-duckling-seagull What's YOURS? 👇"
- **Play code:** `makefun-gecko-duckling-seagull` (this bounty's code 0, verified via the kit CLI; the other codes are makefun-nomad-abacus-totem, makefun-sunrise-marina-fig, makefun-crystal-melody-zephyr — any one passes. NOTE: makefun-gopher-beaver-notebook was the GTA6 bounty's code, not this bounty's. The referral code `ns5zj1fw` is NOT the play code).

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to `/output/POST.json`, where the gate reads it. That is all the program has to do — the entry is the post itself.

## Winner analysis

See `../WINNER_ANALYSIS.md` — live board, top score 12, winners all ask the reader for THEIR bounty idea after giving one concrete funny example first. Our caption follows that pattern.

---

<sub>Entered on [make.fun](https://make.fun/?ref=ns5zj1fw&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
