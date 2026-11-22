# The World Today — Sunday 22 November 2026

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/arnoldswingtaiger/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/arnoldswingtaiger/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

A one-page newspaper front page for Sunday 22 November 2026, built for the
[make.fun](https://make.fun/bounty/news-image-20261122) daily news-image
contest. An AI judge compares entries two at a time and picks the one that
best sums up the day — so the page leads with the day's biggest story and
packs the rest of the world onto the same sheet.

## What's on the page

- **Gulf escalation (lead story):** Iran strikes a US air base in Kuwait
  and targets Bahrain, while tanker attacks off Oman raise fears of a
  wider war.
- **Ukraine:** Russian missiles hit Lviv, killing two; debris from one
  missile lands in Poland, and Warsaw calls it a provocation.
- **Climate:** the COP31 talks are deadlocked and the summit runs into
  overtime, split over fossil fuels and finance.
- **Trade:** after ten years of talks, the EU and Indonesia sign a
  landmark deal that scraps 98.5% of tariffs between them.
- **Peru:** a magnitude 6.9 earthquake shakes the Andes; no casualties
  are reported.
- **Mexico:** authorities seize cartel boss "El Chapo Isidro"; the arrest
  sets off deadly violence in Sinaloa.
- **Israel:** the president asks former army chief Eisenkot to form a
  government, passing over Netanyahu, as flooding in Gaza drives calls
  for humanitarian access.

## How it works

`entry.png` is the finished 1024×1024 front page (763 KB, palette PNG).
`main.ts` copies it to `/output/entry.png` with Node's standard library
alone — no network, no packages — so two runs produce byte-identical
output.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

Entered on [make.fun](https://make.fun/?ref=zv5hc3pw&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards
