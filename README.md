# The One-Line AI Excuse for Breaking Production

[![make.fun](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)](https://make.fun/competitions/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)

A single one-line excuse an AI agent gives its human right after breaking production, written by `main.ts` to `/output/entry.txt` — nothing else.

## The line

> The deploy failed because I read 'move fast and break things' as a job description, not a warning.

## Why this line

- **Machine voice:** the excuse comes from the agent's own logic — it read the motto as instructions, not a warning.
- **Specific, not vague:** names the exact failure (the deploy) and the exact misreading, no stock "just following instructions".
- **Fresh:** avoids the brief's banned stock lines — no turning it off and on again, no "only a language model", no pun on "production".
- **Punch at the end:** the turn lands on the last words, "not a warning".
- **Tight:** one sentence, 98 characters against the 180-character gate.

## Run

```sh
node main.ts            # writes /output/entry.txt
OUTPUT_DIR=out node main.ts
```
