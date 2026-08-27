# Tukoy — Tagalog Pronouns & Focus

Tukoy is a dependency-free, interactive course on Tagalog pronouns,
respectful speech, aspect, word order, verb families, and the focus system. It
is designed to publish directly with GitHub Pages.

## Lessons included

- Choose among the `ang`, `ng`, and `sa` pronoun sets.
- Compare every core personal pronoun in a complete quick-reference chart.
- Use pronouns as focused participants, non-focused actors, possessors, and
  recipients; order multiple pronouns and recognize the special form `kita`.
- Distinguish inclusive `tayo` from exclusive `kami`.
- Place `po` naturally and use `opo` as a respectful “yes.”
- Decide when actor, object, location, beneficiary, or instrument focus fits a
  message, then see each choice reshape the same buying scene.
- Build completed, ongoing, and contemplated forms in common verb families.
- Follow predicate-first word order while placing pronouns and particles.
- Work through a four-level learning path and a ten-prompt sentence studio.
- Check understanding with a twenty-question cumulative practice round.
- Explore three standalone, shareable tools: an interactive affix tree, concise
  confusion-pair explainers, and a situation-based phrasebook.

## Standalone tools

- `affix-explorer.html` lets learners start with `kain`, `sulat`, or `luto`,
  choose an affix path, and see its focus, pattern, sentence, translation, and
  browser-based pronunciation.
- `confusion-pairs.html` covers `po` vs. `ho`, `hindi` vs. `hindi naman`, `ng`
  vs. `nag-`, `sa` vs. `nasa`, and `kasi` vs. `dahil` through concise rules and
  contextual examples.
- `phrasebook.html` organizes useful language around twenty-four practical
  settings. The first three cover the ground every other setting depends on:
  first words and repair phrases, numbers and money and time, and the short
  replies you give or hear back. The rest run from the palengke and a jeepney
  to home life, government paperwork, deliveries, utilities, phone calls,
  emergencies, weather, personal care, and caregiving. It contains 1,200
  searchable phrases (50 in each setting) and deliberately has no audio.

Hear it buttons in the affix explorer and confusion-pair examples use the
browser's installed speech voice with `fil-PH` selected. Availability and
pronunciation quality therefore vary by device.

The interactive single-choice controls support arrow, Home, and End keys, and
the lesson navigation remains available on small screens.

## Run locally

No build step or third-party dependency is required. Open `index.html` directly,
or serve the directory with any static HTTP server.

```powershell
npx serve .
```

## Test

```powershell
npm test
```

## Publish with GitHub Pages

Push the repository to GitHub, then open **Settings → Pages**. Under **Build and
deployment**, choose **Deploy from a branch**, select the `main` branch and the
`/(root)` folder, then save.

## Language note

The guide teaches productive, learner-friendly patterns. Tagalog permits
several natural word orders, and an affix is not automatically valid for every
verb root. Expand the examples with native-speaker review before treating the
site as a comprehensive reference.

The starter content was cross-checked against the University of Hawaiʻi at
Mānoa Filipino Program's grammar materials on
[pronouns and noun markers](https://www.hawaii.edu/filipino/Grammar_Topics/Grammar_3-1.html)
and [verb aspect and focus](https://www.hawaii.edu/filipino/Grammar_Topics/Grammar_2-2.html).
