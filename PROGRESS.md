# HI02H11_L03_S01 — Progress Log

**Lesson:** मीरा का जन्मदिन — एकवचन / बहुवचन (एक और अनेक)
**Build:** `HI02H11_L03_S01_poem.html` (single self-contained file) + `card.json` + `assets/`
**Sources of truth:** this log, the review deck `Copy of HI02H11_L03_S01_poem_review.pptx`, and the
two written game specs (Part 1 MATCH_THE_PAIR, Part 2 drag-and-drop).

> This file is updated on **every** change request. Newest round at the bottom.

---

## Current state of the lesson

**18 slides**, order taken from the review deck, both spec games at the end.

| # | ID | Type | What it is |
|---|----|------|-----------|
| 1 | T1 | STORY_SCENE | poem — गुब्बारा / गुब्बारे |
| 2 | C1 | COMPARE_VACHAN | शब्दों की तुलना — गुब्बा**रा** → गुब्बा**रे** |
| 3 | T2 | STORY_SCENE | poem — लड़का / लड़के |
| 4 | C2 | COMPARE_VACHAN | शब्दों की तुलना — लड़**का** → लड़**के** |
| 5 | T3 | STORY_SCENE | poem — टोपी / टोपियाँ |
| 6 | C3 | COMPARE_VACHAN | शब्दों की तुलना — टो**पी** → टो**पियाँ** |
| 7 | T4 | STORY_SCENE | poem — सहेली / सहेलियाँ |
| 8 | C4 | COMPARE_VACHAN | शब्दों की तुलना — सहे**ली** → सहे**लियाँ** |
| 9 | Q1 | PICK_VACHAN_WORD | सही शब्द चुनिए — मछली → मछलियाँ |
| 10 | Q2 | PICK_VACHAN_WORD | सही शब्द चुनिए — लड़की → लड़कियाँ |
| 11 | Q3 | PICK_VACHAN_WORD | सही शब्द चुनिए — टोपियाँ → टोपी |
| 12 | Q4 | PICK_VACHAN_WORD | सही शब्द चुनिए — घोड़ा → घोड़े |
| 13 | Q5 | PICK_VACHAN_WORD | सही शब्द चुनिए — केला → केले |
| 14 | Q6 | PICK_VACHAN_WORD | सही शब्द चुनिए — पौधे → पौधा |
| 15 | **PAIR1** | MATCH_VACHAN_PAIRS | **Part 1 — bubbles, guided demo** |
| 16 | **PAIR2** | MATCH_VACHAN_PAIRS | **Part 1 — independent play** |
| 17 | **FILL** | FILL_VACHAN_DRAG | **Part 2 — drag into the sentence, 3 स्तर × 3 questions** |
| 18 | CEL | CELEBRATION | शाबाश! |

Phases: tutorial 8 · practice 6 · mastery 4.

---

## Round 1 — Part 1 rebuilt as MATCH_THE_PAIR

The old match screen was a small two-pair drag-and-drop. Replaced with the bubble game from the
written spec.

- Colourful bubbles scattered by a jittered-grid algorithm; a pair's two bubbles are forced at
  least two cells apart and are **given different colours**, so colour can never be used as a
  shortcut instead of reading the word.
- Each bubble = one complete Hindi word + its icon — **1 icon = एक, 3 icons = अनेक**.
- Guided slide (G2) runs the scripted teaching beat: main instruction with गुब्बारा then गुब्बारे
  pulsing → tap instruction → hand taps both → pair card docks → "गुब्बारा—गुब्बारे। यह सही जोड़ी है।"
- Independent slide (P1) skips the demo.
- Wrong-answer ladder: **1st** silent wiggle, first selection stays active · **2nd** wiggle + the
  first selection pulses + "फिर से देखिए…" · **3rd** the true pair pulses together, everything else
  fades, the pair is read aloud and the hand points at both — the child still makes the taps.
- Completion: every pair card presented together centre-stage, confetti, final VO, OST
  "सभी जोड़ियाँ पूरी हुईं!", and आगे activates (no auto-advance).
- Words: गुब्बारा · टोपी · केला · मछली (G2) and घोड़ा · सहेली · केला · मछली (P1).

---

## Round 2 — review-deck changes applied

- **Layout bug fixed.** `.tut-content` was an unclipped flex box, so any screen taller than the
  card punched through the heading above and the mascot/आगे below. This affected every tutorial
  screen, not just the one reported.
- **Volume button** moved clear of Swiftee's body on both the landing screen and the in-lesson card.
- **Real art extracted from the deck** into `assets/Images/`: `scn_gubbara_s/p`, `scn_ladka_s/p`,
  `scn_topi_s/p`.
- **Story screens** rebuilt to deck pp.4/6/8/10 — no instructional panel, poem lines arrive one by
  one, target words burn orange, image 1 rides the first stanza and image 2 the second.
- **शब्दों की तुलना** built new to deck pp.5/7/9/11 — deck removals honoured (no heading, no
  "एक गुब्बारा"/"बहुत सारे गुब्बारे" captions, no "आ की मात्रा → ए की मात्रा" row) and the deck's
  animation note followed: the whole word appears first, only then does the changed tail glow.
- **Independent practice** built to deck pp.12–17 — six "सही शब्द चुनिए।" questions with the deck's
  exact options, correct answer locking into the drop box, other options fading, and the deck's
  three-step incorrect ladder from p.18.
- Landing heading → "मीरा का जन्मदिन"; poem बच्चा → **लड़का/लड़के**; stanzas 4 and 5 rewritten.

---

## Round 3 — pacing

Auto-advancing beats were far too fast for a Grade-2 reader. Introduced a single shared `PACE`
constant that **every** auto-transition derives from, so the whole lesson paces consistently and
can be retuned in one place.

```
lineStep 1350ms · perChar 105ms · readMin 3800ms · readMax 11000ms · tail 1800ms
```

Holds scale with how much text is on screen, and `tail` guarantees a quiet beat after the voice
stops so a picture never swaps the instant narration ends.

| | before | after |
|---|---|---|
| Story scene — first image holds | 1.9s | **11.5s** |
| Story slide, both beats | ~4s | **23.3s** |
| एक/अनेक screen — time to read the whole words before the glow | ~1.5s | **3.8s** |
| Match game guided demo | ~7s | **15.2s** |

**Bug found while measuring:** in a hidden or background tab browsers pause
`requestAnimationFrame`, so the match game never laid out and its demo never started — the
activity just sat dead. Added `nextFrame()` (rAF with a timeout fallback).

---

## Round 4 — art, cropping, match feel

- **Cropping fixed.** Illustrations were `object-fit: cover`, which cut the पापा figure off.
  Now `contain` everywhere, so no illustration is ever cropped.
- **लड़के image corrected.** The deck changed the word to लड़के but supplied art of four *mixed*
  children. Rebuilt `scn_ladka_p.png` from the deck's own single-boy frame: the boy is cut out of
  his background (canvas alpha knockout against a locally sampled wall/floor) and re-composited
  three times at different scales. Bunting, balloons and floor stay intact.
  *Known compromise: all three boys are the same character at different sizes — the deck's two
  distinct boys overlap each other and cannot be separated cleanly.*
- ~~**All emoji replaced with real 2-D art.**~~ *(reverted in Round 8 — see below)* 20 hand-drawn SVGs in the deck's style (flat fills, no
  outlines, soft shading, palette sampled from the deck PNGs): गुब्बारा · टोपी · केला · मछली ·
  घोड़ा · पौधा · ताली · सहेली · लड़की · लड़का, each singular and plural. Every viewBox was
  tight-cropped from a measured `getBBox()` so icons fill their slot.
  Source generator kept as `_art_source.js` — edit and re-run to change the art.
- **Image paths now come from the manifest** (`imgSrc()`), so the bundle can mix `.svg` icons with
  `.png` scene art.
- **Match feel.** A correct pair used to wait for the whole VO before resolving. Now the voice
  plays *alongside* the animation: bubbles bounce green on the tap, then fly across and become the
  pair card. **4.5s → 1.07s.**
- Fixed a content bug: the practice quantity strip repeated the *plural* art N times (4 × "three
  fish" = twelve fish). It now repeats the single-object art.

---

## Round 5 — Part 2, and voice everywhere

### Part 2 — `FILL_VACHAN_DRAG` (slides D1, D2)

Drag-and-drop instead of tap, built to the written spec:

- No photos, no icons, no visual panel — deliberately bare.
- Slim **progress bar** and **star count** across the top.
- Short instruction: "सही शब्द खींचकर खाली जगह में रखिए।"
- Exactly **two large sentence cards** in the middle, each with a blank.
- Clean, large **word tiles** below (two answers + one distractor, shuffled).
- **Both blanks live from the start**; **no "जाँचें" button**.
- The moment both blanks are right: automatic success — confetti, VO, advance.
- Incorrect feedback keeps all three levels: silent wiggle → sentence pulses + retry VO → correct
  tile pulses, others fade, answer read aloud, hand points at tile then blank.

D1 (practice): मीरा ने एक ___ टाँगा। / पापा बहुत सारे ___ लाए।
D2 (mastery): मीरा की एक ___ उड़ी। / फिर उड़ीं सबकी ___।

### Voice

**70 VO lines** are now authored, every one with its exact Hindi text in `card.json`
(`assets.audio_text`) — covering Part 1, Part 2, the deck's recommendations, the poem stanzas and
the comparison screens. The manifest is reconciled against actual slide references, so there are
no orphan entries and no referenced id without a line.

Because `assets/Audio/` is still empty, a **spoken fallback** was added: when a clip is missing,
the game speaks that line's authored text with the device's Hindi voice (`lang="hi-IN"`). The
lesson is no longer silent. A recorded clip always wins — the fallback only runs after the audio
element has actually failed, so dropping the real files in changes nothing in the code.

---

## Round 6 — voice-over actually in the game

Asked for the VO to be in the game, not just authored. What this machine can and cannot do was
checked first, and the finding is hard: **no Hindi voice exists on it** — not in SAPI, not in
WinRT, not in the browser (only English: David, Zira, Mark, and the Indian-English Heera and
Ravi). Feeding Devanagari to an English voice produces an empty file — verified, 46 bytes.

So correct Hindi audio cannot be synthesised here. What was built instead:

### `_gen_vo.ps1` — the VO generator

Reads all 70 lines from `card.json` and writes one `.wav` per id.

| command | what it does |
|---|---|
| `powershell -File _gen_vo.ps1` | Uses an installed **Hindi** voice → correct audio into `assets/Audio/`. Refuses, with instructions, if no Hindi voice is present. |
| `powershell -File _gen_vo.ps1 -Placeholder` | Romanises each line and reads it with an English voice → `assets/Audio/placeholder/`. |
| `powershell -File _gen_vo.ps1 -Clean` | Empties `assets/Audio/`. |

Installing a Hindi voice (Settings → Time & language → Language & region → Add a language →
हिन्दी → tick Speech) turns correct VO into a one-command job.

The romaniser does proper Hindi **schwa deletion**, which matters — without it the output is
"eka aura aneka vaale shabdon kee joriyaan", which is gibberish to a voice engine. With it:
"ek aur anek vaale shabdon kee jodiyaan dhoondhie".

### Playback order

`play()` now walks a preference chain, so better audio always wins and a placeholder can never
shadow it:

1. `assets/Audio/<id>.ogg` — the real authored clips
2. `assets/Audio/<id>.wav` — generated locally from a real Hindi voice
3. the **device's own Hindi voice** speaking the authored line
4. `assets/Audio/placeholder/<id>.wav` — only when the device has no Hindi voice

Dropping real clips in changes nothing in the code.

**Bug fixed while wiring this:** a 404 fires both `onerror` and the `play()` rejection, so every
fallback step ran twice and two `<audio>` elements played the same line over each other. Guarded.

### State now

**70 placeholder clips ship in the build** (`assets/Audio/placeholder/`, ~15 MB) with a
`_README.txt` marking them for replacement. The lesson is no longer silent — verified in the
browser: the chain falls through `.ogg` → `.wav` → placeholder and plays 4.3 s of real audio for
the match-game prompt, with the completion callback firing correctly.

With real clip durations present, pacing now runs off the actual VO length plus the quiet tail
rather than the text-length floor: the first story image holds **14.6 s** and the whole story
slide runs **28.5 s**.

---

## Round 7 — all generated VO removed; team supplies the recordings

The voice-over will come from the team at the end, so everything Round 6 added as a stand-in has
been taken out of the build. Nothing synthesises or substitutes audio any more.

**Removed**
- `assets/Audio/placeholder/` — all 70 romanised placeholder clips (~15 MB) and their README.
- The browser speech fallback: `speakLine`, `VO_TEXT`, the Hindi-voice picker, and the
  `speechSynthesis` call in `stopAudio`. Verified zero remaining references in the build.
- The `.wav` and `placeholder/` steps from `play()`'s lookup chain.
- `_gen_vo.ps1` — the generator existed only to stand in for the team's VO.

**Kept — deliberately**
- All **70 authored VO lines** in `card.json` → `assets.audio_text`, and the id → path map in
  `assets.audio`. This *is* the specification of what has to be recorded; deleting it would throw
  away the script. Several screens also display the line they speak, so the text stays in use.
- Every `slide.audio` reference, untouched.

**`play()` is back to one path:** it plays `assets/Audio/<id>.ogg` and, while a clip is absent,
resolves on a short silent beat so every timed sequence keeps running and the pacing stays
reviewable. When the team's files land in `assets/Audio/`, they play — no code change.

**New: `VO_SCRIPT.md`** — the recording script for the team. All 70 lines grouped by section, each
with its exact filename, its Hindi text, and which slide and role it plays in.

**Verified after removal:** 22/22 slides mount, zero console errors, **nothing is spoken**, and
the only audio path attempted is `assets/Audio/…`. Pacing is unchanged from Round 3 — the first
story image holds 11.5 s and the story slide runs 23.3 s off the `PACE` floors.

*Minor nit noticed while testing (not changed):* a module's timers are not cancelled when the
slide changes, so if a child advances immediately a stale watchdog from the previous slide can
enable आगे on the next one slightly early. Harmless — it only ungates a button — but worth fixing
if slide-advance ever gets faster.

---

## Round 8 — hand-drawn SVG icons reverted to the original emoji

The 20 SVG object icons added in Round 4 were not wanted; the object art goes back to what the
build used before.

**Removed**
- All 20 `assets/Images/obj_*.svg` files.
- `_art_source.js`, the generator that produced them.

**Restored**
- The 14 `obj_*` entries in the manifest point at `assets/Images/obj_*.png` again — the original
  convention. Those files do not exist, so `imgOrEmoji()` falls back to the emoji carried in the
  slide data, exactly as it did before Round 4: 🎈 🧢 🍌 🐟 🐴 🌱 👏 👧 🧒.

**Kept**
- The poem's scene art extracted from the review deck (`scn_gubbara_s/p`, `scn_ladka_s/p`,
  `scn_topi_s/p`) — that is deck artwork, not the hand-drawn icons, and the story and
  comparison screens still use it.
- `imgSrc()`, the manifest-driven path lookup. It is format-agnostic, so whenever real
  `obj_*.png` art is produced it will be picked up with no code change.

**Verified:** 22/22 slides mount, zero console errors. 16 image requests fall through to emoji —
the 14 object icons plus the two सहेली scene frames that were already missing. The match bubbles
and the sort tiles render exactly as they did before the SVG round.

---

## Round 9 — "many" art no longer spills out of its card

On the sort screen, a plural tile dropped into the बहुवचन bin showed its picture bursting outside
the white card.

**Cause.** The three-object "many" art (`.tri-art`) was sized by a fixed rule,
`.sort-item .tri-sort{width:138px;height:106px}`. When a tile snaps into a bin the card shrinks
from 168×144 to 88×88, but the art kept its full size and hung outside the card. The match
bubbles had a *second*, separate sizing rule for the same art — so the same picture was sized two
different ways in two places, and only one of them scaled.

**Fix — one variable for all of it.** `.tri-art` now derives its box and its three pieces from a
single custom property, `--tri`, which whatever hosts the art declares:

```
.tri-art       → width: --tri × 2.05 ,  height: --tri × 1.72
.tri-piece     → --tri square, font-size --tri × 0.86
.sort-item     → --tri: 54px
.sort-item.snapped → --tri: 30px      (and tighter padding)
.mtp-bubble    → --tri: var(--ico)    (replaces its own duplicate rules)
```

Any container that shows "many" art now only has to state one number, and the art fits. The
bubbles' duplicated sizing block was deleted rather than left to drift.

Also scoped the blanket `.sort-item img{…}` / `.sort-item.snapped img{…}` size rules so they no
longer override the triangle art's own pieces — that would have broken real plural PNGs the same
way once art lands.

**Verified:** measured the overflow of every picture against its own card on all 22 slides —
sort tiles (tray and dropped), match bubbles, quantity strips, comparison frames. **Zero spill
anywhere**, no empty slides, no console errors. Nothing else was touched.

---

## Round 10 — flow re-sequenced to the review deck; both games moved to the end

The lesson order had drifted badly: the bubble game sat at **position 10, in the middle**, the
drag-and-drop game at 17, and three screens that the deck never asks for were interleaved through
the middle. Re-read the deck end to end and rebuilt the order from it.

### The deck's flow (pp.3–19) is now the lesson's flow

| deck | screen |
|---|---|
| p.3 | landing — मीरा का जन्मदिन |
| p.4 / p.5 | poem page **गुब्बारा** → शब्दों की तुलना |
| p.6 / p.7 | poem page **लड़का** → शब्दों की तुलना |
| p.8 / p.9 | poem page **टोपी** → शब्दों की तुलना |
| p.10 / p.11 | poem page **सहेली** → शब्दों की तुलना |
| pp.12–17 | six "सही शब्द चुनिए।" questions, in the deck's own order — मछली · लड़की · टोपियाँ · घोड़ा · केला · पौधे |
| p.18 | (the three-step incorrect ladder — a rule for those six, not a screen) |
| p.19 | celebration |

### The two spec games now come last

```
… Q6  →  PAIR1  →  PAIR2  →  FILL1  →  FILL2  →  CEL
```

- **PAIR1 / PAIR2** — Part 1, the bubble MATCH_THE_PAIR. PAIR1 carries the scripted guided demo
  (गुब्बारा pulses, then गुब्बारे, hand taps both, pair card docks); PAIR2 is independent play.
- **FILL1 / FILL2** — Part 2, drag-and-drop into two sentence cards.

### Removed — not in the deck

`G1` and `G3` (SORT_VACHAN) and `G4` (TAP_VACHAN). The deck contains no sorting game and no
"एकवचन or बहुवचन?" tap question, so they are gone rather than left floating in the middle.

19 slides now. Phases: tutorial 8 · practice 6 · mastery 5.

### Housekeeping

- `signals_expected` pruned to what can still fire — dropped `gender_sort_correct` (the sort game
  is gone) and `gender_match_first_try` (never emitted by any module).
- Manifest reconciled: 6 orphan VO ids removed (64 lines remain, every one with its text) and 6
  orphan image keys removed.
- Slide ids renamed to match the new structure: `G2→PAIR1`, `P1→PAIR2`, `D1→FILL1`, `D2→FILL2`.

**Verified:** all 19 slides mount, zero console errors, order matches the deck exactly, and both
games render correctly in their new end position.

**Side effect worth knowing:** six art files on disk are no longer referenced, because the screens
that used them were the non-deck ones — `obj_tali_s/p`, `obj_ladka_s/p`, `obj_ladki_p`,
`obj_saheli_p`. They are still in `assets/Images/`, so nothing is lost if a sort screen ever
comes back.

---

## Round 11 — chrome matched to the reference build `HI01H01_L02_S04`

The reference build turned out to be a **newer revision of the same engine** (`2026.07.28t-r4-unified`);
ours was running the older chrome. Ported the presentation layer across so the layout and the
Swiftie match it. The lesson's own screens and content were not touched.

### Swiftie — now a circular head badge

The old full-body avatar driven by `sw_anim_*.gif` is replaced by the reference's head system:

- Markup is now `.mascot-wrap > .mascot-circle > .mascot-img`, a 132px round badge with a white
  ring, pinned by `--mascot-left / --mascot-top / --mascot-size`.
- `setSwMood()` maps a mood to `sw_head_<expr>.webp`; every expression except the resting
  `talking` face has an animated twin, and `celebrate` gets a cache-bust so its play-once
  animation replays on each new slide. Falls back to `mascot.webp` if a head is missing.
- The head is no longer tied to whether audio is sounding — `swApplyPose()` is retired. Honours
  `prefers-reduced-motion` (and `?still`) by staying on the static faces.
- The help overlay's Swiftie uses the shipped `sw_lg_hint_anim.webp` instead of the
  `sw_anim_*.gif` files, which this build never actually had.

### Layout tokens taken from the reference

| token | was | now |
|---|---|---|
| `--bg` | `#FAF7F1` warm cream | **`#F2F7FA`** cool off-white |
| `--band-pad-l` | 150px | **110px** — prompt starts closer to the Swiftie |
| `--chip-size` | 70px | **66px** |
| `--hint-top / right / size` | 33 / 126 / 60 | **55 / 50 / 66** |
| `.stage.tut .slide-stage` padding | `64px 100px 22px` | **`96px 100px 92px`** |

### Chips are inline SVG now

The header audio chip, the hint button and the tutorial card's replay chip were `<img>` PNGs;
they are now the reference's inline SVGs — a gradient speaker with animated wave arcs, and a
bulb with rays that glow while a hint is open. `hint.png` / `hint_active.png` / `audio.png` are
no longer referenced.

### Assets

24 files copied from the reference into `assets/UI/`: the eight `sw_head_*` webp faces,
`mascot.webp`, `nudge_hand_new.svg` (replaces `nudge_tap.png`), `sw_lg_hint_anim.webp`, the three
`bgdeco_*` svg decorations, `startnew_bg_plain.webp`, and refreshed copies of the shared art.

**Verified:** all 19 slides mount, zero JS and zero console errors; every mood swaps to the right
head file and all new asset URLs return 200. The landing, tutorial card and activity screens were
compared against the reference side by side and match.

*Unused after this round (left on disk, nothing references them): `audio.png`, `hint.png`,
`hint_active.png`, `nudge_tap.png`, `mascot.png`, and the five `sw_anim_*` gif/png files.*

---

## Round 12 — landing screen taken wholesale from the reference build

Round 11 ported the in-lesson chrome but left the landing on our own older styling. Five things
were called out and all trace to the same cause, so the whole landing system was replaced with
the reference's rather than patched piecemeal.

| reported | cause | now |
|---|---|---|
| volume button too far from Swiftie | our `.sg-vo` was pinned at `left:150px`, independent of the mascot | reference positioning — the chip sits on the mascot's lower-right shoulder |
| title sitting too low | our `.sg-content` centred everything in the card | reference layout — title at the top, subtitle under it, button at the bottom |
| no moving stars behind | we had no sky layer at all | `.sg-sky` with **87 drifting, twinkling decorations** |
| blue background not full screen | `body.is-start{background}` only, so the stage letterboxed with pale bands | full-bleed `.start-bg` + `.sg-glow` + `.sg-sky`, all `position:fixed;inset:0` |
| Swiftie floating on the first screen | our `.sg-mascot` ran `sgFloat` | reference sets `animation:none` |

### How it was done

Every top-level CSS rule matching the landing system — `.start-gate`, `.start-bg`, `.sg-*`,
`body.is-start`, `html.rotated`, and the `sgFly / sgGlow / sgVoPulse / sgFloat / sgBtnPulse /
wv1 / wv2 / bulbRays` keyframes — was **removed from ours and replaced with the reference's**:
50 of our rules out, 94 of theirs in. The markup for the three background layers and the start
gate itself was copied verbatim, and `sgSub` is now filled from `CARD.subtitle_hi`.

The sky is masked so the decorations never drift across the centre card, and it re-masks to a
circle on the end screen — both behaviours come with the reference's CSS.

**This also fixed a bug from Round 11:** the chips I ported last round referenced `wv1`, `wv2`
and `bulbRays` keyframes that did not exist in our build, so the speaker waves and the hint
bulb's glow were silently dead. They animate now.

**Verified:** sky layers all `display:block`, 87 stars with `sgFly` **and** `sgGlow` both
reported `running`, mascot `animation-name: none`, body background full-bleed blue, and the
volume chip measured overlapping the mascot's shoulder rather than sitting 90px away. All 19
slides still mount with zero JS and zero console errors, and no non-object image 404s.

---

## Round 13 — phase-transition gate fixed (peeking Swiftie missing, title off-centre)

The "चलिए, शुरू करें!" transition screen came out wrong: the headline sat right of centre and the
peeking Swiftie was nowhere to be seen.

**Cause — a CSS containing-block trap, not a styling mistake.** `#phaseGate` was nested inside
`.stage`, and `.stage` carries `transform:scale(var(--scale))`. A transformed ancestor becomes the
containing block for `position:fixed` descendants, so the gate stopped resolving against the
viewport and resolved against the scaled stage instead. Measured in a 1400×800 window:

| | ours (before) | reference | ours (after) |
|---|---|---|---|
| gate box | 1470×840 at (0, 6) | 1400×800 at (0, 0) | **1400×800 at (0, 0)** |
| title | x 428, w 614 | x 408, w 585, y 271 | **x 408, w 585, y 271** |
| peeking Swiftie | y **846** — below an 800px fold | y 800 | **y 800** |

That is why the mascot was invisible: it was being drawn 46px past the bottom of the screen.

**Fix.** `#phaseGate` is now a direct child of `<body>`, exactly as in the reference build, so its
`position:fixed` anchors to the viewport again. Checked every other overlay in the reference —
`hintOverlay`, `startGate`, `endScreen`, `devBanner` are all `position:absolute` *inside* `.stage`
on purpose, so only the gate needed lifting.

The magenta headline with the white outline is not a bug — `.pg-title` is
`color:#CD0FD5; -webkit-text-stroke:10px #FFFFFF` in the reference too.

**Verified:** gate geometry and title position now match the reference number for number, the
Swiftie peeks up from the bottom edge, and all 19 slides still mount with zero JS errors, zero
console errors and no non-object image 404s.

*Note for the log:* the first attempt at this move inserted the markup into a JS string literal —
`lastIndexOf('</div></div>')` matched inside a module's template markup rather than the body.
Caught immediately by the syntax check, reverted, and re-anchored to the card-data comment.

---

## Round 14 — rebuilt ON the reference build instead of patching toward it

Rounds 11–13 ported the reference's chrome piece by piece and each round left something behind.
That approach was wrong. **The lesson is now built on the reference file itself** — the reference
engine is the base, and only this lesson's story and games were dropped into it.

### How the build is assembled now

Base: `HI01H01_L02_S04.html` (engine `2026.07.28t-r4-unified`), unchanged. Into it went:

- **Activity CSS** for this lesson's five screens (`~15 KB`).
- **Four helpers the reference engine lacks** — `imgSrc()` (manifest-driven picture paths),
  `triangleArt()` (the 2-up/1-down "many" art), `nextFrame()` (rAF with a hidden-tab fallback)
  and `PACE` + `hlText()` (reading pace, orange target words).
- **Our five slide modules** — `STORY_SCENE` (beats + orange words, replacing the reference's own),
  `COMPARE_VACHAN`, `PICK_VACHAN_WORD`, `MATCH_THE_PAIR`, `FILL_VACHAN_DRAG` — plus the type aliases.
- **This lesson's `card.json`** in place of the reference's.
- The reference's own image paths rerouted through `imgSrc()` so both builds' art resolves.

Everything else — layout, header, mascot, buttons, landing, sky, phase gate, feedback overlay,
celebration — is the reference's, untouched. That is why `.tut-audio` is back at `left:78px`
beside the Swiftie: it is the reference's own value, not something re-derived.

### The four reported problems

1. **Volume button drifting away from Swiftie** — gone. The reference's own `.tut-audio{left:78px}`
   and `.sg-vo{left:96px}` now apply because we no longer carry our own copies of those rules.
2. **Peeking Swiftie only half up** — `pgPeek` had no fill mode, so the image snapped back below
   the fold when the animation ended. Added `forwards`. Measured: image now spans y 592→800 in an
   800px viewport, **visible fraction 1.00**.
3. **Speaker waves always drawn** — the reference kept them permanently on
   (`.wv{opacity:1;animation:none}`). They are now the *playing* indicator, as asked: hidden at
   rest, animating only while a clip sounds. Sampled across a play cycle: `0/0 → 1/0 → 1/1 → 0/0`,
   and back to `0/0` the moment audio stops.
4. **Spoken line printed on screen** — the compare screen's yellow box rendered
   `audioText(slide,"explain")`, i.e. the voice-over text. Removed from the DOM entirely; the line
   is now only spoken. Checked the whole lesson: no other screen prints a VO line (the poem text
   on story pages is on-screen text by design, per the deck).

**Verified:** all 19 slides mount, zero JS errors, zero console errors, no non-object image 404s;
landing, phase gate, compare screen and both end games checked visually against the reference.

---

## Round 15 — the lesson wouldn't advance past a question (two missing engine APIs)

After Q1 was answered correctly the game froze. **Cause: the Round 14 rebase left two calls
pointing at APIs the reference engine does not have**, and both threw *before* the code that
advances the slide could run.

| broken call | why | fix |
|---|---|---|
| `SwiftPAL.emit(...)` | The reference renamed its telemetry bus to **`GameBus`** — `window.SwiftPAL` is now the *platform bridge* (`sendEvent`) and has no `.emit`. A `TypeError` was thrown inside the answer handler, so `playChain(...) → completeSlide(...)` was never reached. | all 6 calls rewired to `GameBus.emit(...)` |
| `sfxPop()` | The reference ships only `sfxTap`, `sfxCorrect`, `sfxWrongSoft`. The bubble-pop sound was defined in our old engine. | lifted the old definition in next to the other sfx helpers |

Rather than chase these one at a time, every engine symbol our modules depend on was audited
against the rebased build — 26 functions and 6 globals. `sfxPop` was the only remaining gap.

### Full playthrough, start to finish

Played the lesson as a child would — **no `mountSlide` jumps, only taps, drags and आगे**:

```
T1 → C1 → T2 → C2 → T3 → C3 → T4 → C4
   → Q1 → Q2 → Q3 → Q4 → Q5 → Q6
   → PAIR1 → PAIR2 → FILL1 → FILL2 → CEL
```

All 19 slides, **zero JS errors, zero console errors**. The practice phase gate opened and closed
correctly. Every expected telemetry signal fired: `slide_entered`, `slide_completed`,
`gender_pair_match`, `vachan_recognise_first_try`, `mastery_score`, `lesson_completed`.

*Note:* while debugging with manual `mountSlide()` jumps I did manage to strand a phase gate on
screen (it blocks all input at `z-index:100000`). It did not occur once in the clean playthrough —
it needs a slide change mid-gate, which normal play cannot produce — so it is recorded here rather
than fixed. It shares a root cause with the stale-timer nit already logged in Round 7: module
timers are not cancelled when a slide changes. **Fixed in Round 17** for every slide type this
lesson uses.

---

## Round 16 — volume chip pulled back onto Swiftie's shoulder on every screen

The replay chip on the tutorial screens still sat well away from Swiftee, unlike the landing.

**Cause: my own leftover.** A one-line override from the Round 11 patching days —
`.tut-audio{left:146px}` — was still sitting in this lesson's activity CSS and, being later in the
stylesheet, it beat the reference's own `.tut-audio{left:78px}`. The Round 14 rebase carried it
across with the rest of the activity block, so the reference value never took effect. Removed it
(along with its sibling `.sg-vo{left:232px}`), leaving the reference's values to apply.

Swept the whole stylesheet for any other chrome rule of mine shadowing the reference: only this
one and the deliberate `no-prompt` helper were present.

**Measured the chip against Swiftee on all 19 slides:**

| screen family | chip overlap with the mascot |
|---|---|
| landing | 106 px |
| tutorial card (T1–C4) | **94 px** |
| activity header (Q1–FILL2, CEL) | **59 px** on a 160 px badge |

Every screen now has the chip sitting *on* Swiftee's lower-right shoulder — nothing detached,
nothing negative. All 19 slides mount, zero JS and zero console errors.

*Spotted while checking, not part of this request:* the supplied `obj_ladki_s.png` /
`obj_ladki_p.png` have an opaque white background rather than transparency, so a white rectangle
shows behind the girl on the सही-शब्द screens. Worth re-exporting those two as transparent PNGs.

---

## Round 17 — स्तर (levels) in the drag-and-drop sentence game

**Request:** *"ye jo game hai na ki 'sahi shabd kheench kar khaali jagah me rakhiye', ye game ke
sthar hone chahiye jaise meine terko ye demo game bheji hai aise, like levels aise hi hone
chahiye"* — with `Downloads/preview.html` as the demo to match.

Read the demo first and took its shape literally: three **स्तर**, three questions each, two
sentence cards per question, a two-tile word bank, a slim progress bar carrying the स्तर label and
a star count, a स्तर-पूरा interstitial between levels, and a closing summary of every pair. The
drag mechanic itself is unchanged — Part 2's spec says drag-and-drop is kept, so the demo's tap
version was not copied.

**One slide, not nine.** All three levels run *inside* the single `FILL` slide, with the level
panels drawn by the module. This keeps the two spec games sitting at the very end of the lesson,
which is what Round 10 re-sequenced the whole file to achieve; nine slides would have spread the
activity across the mastery phase. `FILL1` and `FILL2` are gone — 18 slides now.

**The difficulty ladder is the point of having levels**, so each one removes a cue:

| स्तर | what the child has to read | words |
|---|---|---|
| 1 | the cue sits right before the blank — *एक* / *बहुत सारे* | गुब्बारा, मछली, लड़का |
| 2 | no cue at all; only the verb agreement (*रही है* / *रही हैं*) decides | लड़की, घोड़ा, सहेली |
| 3 | the blank moves around inside longer sentences | केला, टोपी, पौधा |

The between-level line says what actually changes next, rather than one generic sentence for both:
after स्तर 1 it warns that the cue words are going away, after स्तर 2 that the blank will move.

**Deck check.** The review deck's 19 slides stop at the सही-शब्द-चुनिए questions and the
celebration — it never specifies either end game, so there was nothing to reconcile for this
screen beyond its incorrect-feedback ladder (p.18), which this module already follows exactly:
attempt 1 a silent wiggle and bounce with no red cross and no voice, attempt 2 the sentence pulses
and is re-read, attempt 3 the correct tile and the blank glow and the answer is named while the
child still performs the drag.

**Two bugs found and fixed while testing:**

1. **The progress bar reached 133%.** A star was being awarded per *blank*, so nine questions
   scored eighteen. The demo counts solved sentence-pairs, so a star is now awarded once both
   blanks of a question are right — nine questions, nine stars, bar exactly 100% at the end.

2. **आगे unlocked itself early — a real leak, not a test artefact.** `STORY_SCENE` arms the आगे
   button from a 45-second watchdog (`setTimeout(armNav, 45000)`) with no check that the slide is
   still on screen. Leave T1 after twenty seconds and that timer fires twenty-five seconds later,
   on whatever screen the child has reached by then, unlocking आगे before the work is done.
   `COMPARE_VACHAN` carried the same watchdog and the same hole. `clearHost()` empties
   `#slideHost`, so a mount whose own wrapper has fallen out of the document is provably dead: all
   three modules now gate every deferred step on `wrap.isConnected`. This is the stale-timer nit
   logged back in Round 7 and again in Round 15 — closed for every slide type this lesson uses.

**VO:** 24 new lines for this screen (prompt, success, the two level lines, the closing line, and
a retry + reveal pair per question), and the four obsolete `vo_fill_*` lines removed.
`VO_SCRIPT.md` is now **generated from `card.json`** rather than hand-maintained — the old copy had
drifted badly, still listing `G1`–`G4` and `D1`/`D2` slides that no longer exist. 84 lines, every
one traced to the screen and role that plays it.

**Verified** by a complete playthrough from the start screen with no slide jumping:
T1 → C1 → … → Q6 → PAIR1 → PAIR2 → FILL (all three स्तर, both level panels, the summary) → CEL.
18 slides entered, 18 completed, zero JS and zero console errors. आगे stayed locked through every
question *and* through both level panels, opening only on the final summary. The three-tier wrong
ladder was exercised and each tier fired in order. Layout measured with no overflow: the screen
budgets 34 px for the progress strip, 2×92 px for the cards and 100 px for the bank inside the
487 px host. Telemetry: `gender_pair_match` ×24, `vachan_recognise_first_try` ×6, `mastery_score`,
`lesson_completed`.

---

## Round 18 — the bubble game burst a pair the child had not made

**Report:** *"jab bubble waali game start hoti hai, starting me गुब्बारा pe click karte hi dono
bubbles burst ho jaate hain, jabki maine doosra bubble select hi nahi kiya tha — pair banane hain
na, tab hi to burst honge bubble pair ban ke."*

**Cause.** `PAIR1` is the guided slide (`data.demo: true`). Its opening script ran the whole
demonstration by itself: at 2.1 s it put `.sel` on गुब्बारा, and at 5.5 s it called `settle()`,
which bursts both halves of the pair and flies them into the tray. The board is locked while that
runs, so a child who tapped गुब्बारा got no response at all — and then, a second or two later,
both bubbles popped. From the child's side that reads as exactly one thing: *one tap burst the
pair.* It also teaches the wrong rule at the very moment the game is supposed to be teaching that
a pair takes two taps.

**Fix — the demo points, the child plays.** The demonstration still pulses the एक bubble, points
the nudge hand at it, pulses its अनेक partner and points there too. But instead of completing the
match, it now *hands the two taps over*: the other four bubbles fade out, the demonstrated pair
holds a slow pulse, Swifty says *"अब इन पर टैप कीजिए।"*, and the board unlocks. The child taps
गुब्बारा — it selects, nothing bursts — then taps गुब्बारे, and the normal match path runs the
burst. This is the same shape the wrong-answer ladder already used at its third tier, so a guided
pair now behaves identically whether the lesson offered the help or the child needed it.

A pair can no longer burst from anything except the child's own second tap.

**Scoring.** A demo-guided match is not a rescue, so it no longer pushes `scaffoldLevel` to 3 the
way a genuine third-attempt reveal does; that bump is kept for `revealGuide` only. The demo pair
does still get the spoken *"यह सही जोड़ी है"* line, as the old auto-complete did.

**Verified on `PAIR1`:** tapped गुब्बारा at 0.3 s, 1.2 s, 2.2 s and 3.4 s — while the demo was
still talking — and nothing burst, nothing selected, no pair card appeared. After the hand-over:
the four unrelated bubbles were faded and inert (tapping one did nothing), गुब्बारा selected on
its own and stayed selected with zero bursts, and only the tap on गुब्बारे produced the burst and
the pair card. `scaffoldLevel` stayed 0. PAIR1 then finished normally with 3 cards and आगे armed.

**`PAIR2` (no demo) is untouched** — it opens unlocked with nothing faded — and its three-tier
wrong ladder still runs in order: silent wiggle, then pulse plus the spoken retry, then the
reveal that fades the board, holds a pulse on the two bubbles and sets `scaffoldLevel` to 3,
still without bursting anything. Zero JS and zero console errors throughout.

---

## Round 19 — a correct answer colours the word, not the whole sentence

**Request:** *"ye jo poora box hai na, ye poora box green nahi hoga — bas ye jo घोड़ा likha hua
hai, bas yahi green hoga… aur ye change poori game me apply hoga jahan jahan bhi ye wali game
hogi."*

Dropping the right word turned the whole sentence card green (`.fvd-card.done` set a green border
and a green wash). That made the *sentence* look like the thing being marked correct, when the
only thing the child actually answered was the blank.

**Now:** the sentence card keeps its ordinary white background and blue-grey border whatever
happens; only the filled blank turns green — solid green border, a green fill, dark-green text and
a soft green halo, so it still reads clearly as "this is right" without swallowing the sentence.

Measured after a correct drop, with transitions disabled so the settled values are the ones read:

| element | background | border |
|---|---|---|
| filled blank | `rgb(226,251,236)` green | `rgb(0,177,50)` green, solid |
| its sentence card | `rgb(255,255,255)` | `rgb(214,230,243)` — identical to an untouched card |
| the other, still-empty card | `rgb(255,255,255)` | `rgb(214,230,243)` |

Confirmed with both blanks filled as well: two green words, both cards still white.

**Swept the rest of the lesson for the same mistake.** This game type now exists once (the `FILL`
slide), so the single CSS rule covers all three स्तर and all nine questions. The other drop-target
activity, सही शब्द चुनिए, was checked too: its `.pvw-box` green state is the small box the answer
word locks into — already just the word, and what the review deck asks for ("card drop box में lock
हो जाए") — so it is left as it is.

---

## Round 20 — the speaker button's sound waves are drawn at rest

**Request:** *"ye jo volume button hai na, ye by default bhi jo aisi lines aayengi na, volume wali
jo lines hoti hain, wo by default rahengi. Par jab aawaz aayegi to wo bas aage peeche aage peeche
aisi hongi. Abhi by default ye khaali aa raha hai — aisa nahi rahega."*

The two wave arcs were hidden at rest (`opacity:0`) and only faded in while a clip played, which
left a bare speaker glyph that looked like an unfinished button.

**Now the arcs are part of the button.** They are drawn at rest, `opacity:1`, with no animation —
still and complete. While a voice is sounding, the existing `wv1` / `wv2` keyframes cycle them
outward on a 1.2 s loop, so the movement itself is the "speaking right now" cue rather than the
arcs appearing from nothing.

This supersedes the earlier rule from Round 13, where the arcs were removed at rest entirely.

Applied in the one shared rule that governs all three speaker chips, and verified on each:

| chip | at rest | while a clip plays |
|---|---|---|
| landing `.sg-vo` | both arcs `opacity 1`, `animation: none` | `wv1` / `wv2` cycling |
| tutorial `.tut-audio` | both arcs `opacity 1`, `animation: none` | `wv1` / `wv2` cycling |
| activity header `.audio-chip` | both arcs `opacity 1`, `animation: none` | `wv1` / `wv2` cycling |

Returning to rest restores the static arcs, checked by toggling playback and re-reading the
computed styles. The contradictory earlier rule that also set these arcs to `opacity:0` was updated
rather than left in place, so there is one answer in the stylesheet instead of two.

---

## Round 21 — one rounded picture card for every illustration

**Request:** *"jo ladki ki image hai, uski boundary bilkul square me hai — humein bilkul square me
nahi rakhna. Jaise second image me boundaries curved hain aur outline halki si light blue hai…
aisi boundaries honi chahiye. Ye change har image ke liye hai — ladki ho ya saheli, ladka, ladke
ya papa, jitni bhi images hain story me… sab me same rakhna hai."*

**Cause.** The stylesheet had a rule, `.stage.tut .story-frame`, that deliberately stripped the
picture frame on teaching screens — transparent background, `border:none`, `box-shadow:none`,
`border-radius:0`, `overflow:visible`. It outranked the frame's own styling (three classes against
one), so the 26 px radius and the border further down the file never took effect and every story
picture rendered as a bare rectangle with hard corners. The only picture that looked right was the
सहेली scene, because it carried a bespoke rule that put back a rounded light-blue card — which is
exactly the look the request asks for.

**Fix — that card is now the rule, not the exception.** The stripping rule is gone, and the
treatment lives once, in four variables, shared by the story frames and the comparison pictures:

```
--pic-radius : 26px
--pic-border : 4px solid #B9DDFF      (the light-blue hairline)
--pic-mat    : #FFF7E8                (cream)
--pic-shadow : 0 8px 20px rgba(11,42,90,.12)
```

The सहेली scene's private rule was deleted along with the JavaScript that applied it, so there is
no longer a picture in the lesson that is styled differently from the rest.

**Each card hugs its own artwork.** Making the mat visible exposed a second problem: the frame was
locked to 16:9, so any picture that was not 16:9 sat in the middle of it with cream bars down both
sides — badly so for the सहेली art, which is portrait. A card now takes its aspect ratio from the
image it holds, set from the image's natural size by a single document-level `load` listener in the
capture phase (`load` does not bubble), so it covers every picture the lesson mounts without any
per-module wiring, now or later.

**Measured on every screen that shows an illustration** — twelve pictures across eight slides:

| slide | pictures | radius | border | mat | card ratio vs art ratio |
|---|---|---|---|---|---|
| T1, T2, T3 | 1 each | 26 px | 4 px `rgb(185,221,255)` | `rgb(255,247,232)` | 1.78 = 1.78 |
| C1, C2, C3 | 2 each | 26 px | 4 px `rgb(185,221,255)` | `rgb(255,247,232)` | 1.78 = 1.78 |
| T4 (सहेली) | 1 | 26 px | 4 px `rgb(185,221,255)` | `rgb(255,247,232)` | 0.80 = 0.80 |
| C4 (सहेली) | 2 | 26 px | 4 px `rgb(185,221,255)` | `rgb(255,247,232)` | 0.80 = 0.80 |

Identical chrome everywhere, and the card ratio matches the artwork ratio on all twelve, so no
picture shows mat as bars. The illustrations render at the same size as before — only the frame
around them changed. All 18 slides mount with zero JS errors and no new layout overflow.

---

## Round 22 — pictures sized down, dropped from the top edge, and each word centred under its own picture

**Request,** made on the लड़का / लड़के comparison screen and asked for across the whole lesson:
the two pictures should be *"halka sa chhota"*, *"thoda sa neeche"* because they were pressed
against the top, and each word must sit *"apni respective image ke bilkul middle alignment me"*.

**The alignment was the real bug.** The pictures and the words were two separate centred flex
rows, so a word landed under the middle of its picture only when both rows happened to be the same
width. They were not — the word cards are a fixed 341 px while the pictures vary with the artwork —
so लड़का drifted left of the boy and लड़के drifted right of the boys.

**Fix: two columns, not two rows.** The comparison screen is now a two-column grid where each
picture shares a column with its own word, so the word is centred under its picture by
construction, whatever the artwork turns out to measure. The two wrappers the module emits are set
to `display:contents` so their children join that grid — no change to the module's markup.

**Size and position** are one value in the shared picture-card block from Round 21: the card is now
88% of its row instead of filling it, which both shrinks the picture and lifts it off the top edge.
Two rules at `.stage.tut` specificity were quietly beating the first attempts at this, so the
sizing had to move into the shared block itself rather than sit in a separate, weaker rule — the
same shadowing trap as Round 16.

**Applied to every screen that shows a picture with something under it:**

| screen | picture (was → now) | top gap (was → now) | label centred under its picture |
|---|---|---|---|
| C1, C2, C3 | 563×317 → 450×253 | ~4 px → 59 px | 0 px offset |
| C4 (सहेली, portrait) | 254×317 → 203×253 | ~4 px → 59 px | 0 px offset |
| T1 | 555×312 → 446×251 | 10 px → 55 px | 0 px offset |
| T2, T3 | 616×346 → 503×283 | 10 px → 57 px | 0 px offset |
| T4 (सहेली, portrait) | 277×346 → 230×287 | 10 px → 57 px | 0 px offset |

Every card still matches its artwork's ratio, so nothing is letterboxed or stretched, and no label
spills past the card.

**The सही-शब्द-चुनिए screens were checked and left alone**: their word and drop box already sit
exactly under their own quantity pictures (0 px offset on both sides), because that screen was
already built in columns.

All 18 slides mount with zero JS errors, and the only layout overflow is the pair already present
before this round — the speaker chip at 6 px and the bubble stage at 48 px, both deliberate.

---

## Round 23 — the greyed-out आगे pill is gone, and the changed syllable glows instead of pulsing

Two requests, both asked for across the whole lesson.

### 1. No disabled आगे button anywhere

*"Ye disabled wala dikhe hi na… iska koi sense nahi banta. Jo main yellow button hai wo aata hi
hai, usko mat chhediyo — bas is grey aage wale button ko poori game se hata de."*

The grey pill announced a control the child cannot use yet, which is noise on every screen. आगे is
now simply absent until the slide arms it, and then the yellow one fades in. The pill is
`position:absolute`, so hiding it moves nothing else on the screen. The yellow button is untouched
— same size, colour, position, press behaviour and nudge.

Checked on all 18 slides at mount: the button is inactive and `visibility:hidden` on every one of
them, so a grey pill is never visible anywhere in the lesson. Toggling the arm state back and
forth confirms it swaps cleanly — hidden and unclickable when locked, visible, yellow
(`rgb(252,183,23)`) and clickable when armed — and a real playthrough through T1 → C1 → T2 → C2
advanced on the yellow button each time.

### 2. The changed syllable glows; it does not pulse

*"गुब्बारा ka रा aur गुब्बारे ka रे pulsate hote hain — pulsate nahi karna. Poora blue me hi
dikhe, aur bas glow karte time रा orange me. Sirf glow, pulsate nahi."*

The highlight carried `animation:cmpvGlow`, which scaled the syllable up to 1.22× and back, three
times. The movement pulled the eye to the animation rather than to the letter that is different,
which is the one thing that screen exists to teach.

Now the word arrives entirely in navy, and when it is time to show what changed only the changed
syllable turns orange with a steady glow — no scaling at all. The `cmpvGlow` keyframes are deleted
rather than left unused.

Measured on the comparison screens, before and after the highlight lands:

| | रा / रे colour | rest of the word | animation | transform |
|---|---|---|---|---|
| before | `rgb(11,61,140)` navy | `rgb(11,61,140)` navy | none | none |
| after | `rgb(242,128,30)` orange + steady glow | `rgb(11,61,140)` navy | **none** | **none** |

Swept the lesson for any other pulsing word highlight: the story captions' orange words were
already a steady glow with no animation, and no other text pulses.

**Left deliberately in place:** the third-attempt help in the सही-शब्द-चुनिए and drag games still
pulses the *correct card or tile*. That is a "tap here" affordance rather than a word-difference
highlight, and the review deck asks for it in so many words on p.18 — *"सही card हल्का pulse
करे"*. Say the word if that should go too.

All 18 slides mount with zero JS errors.

---

## Round 24 — the highlight breathes in and out four times instead of flashing once

**Request:** *"Jo glow hoga wo aise hoga — glow in, glow out, glow in, glow out, aise teen-chaar
baar dikhana hai, uske baad band kar dena hai. Aur ye cheez poori game me implement kar."*

Round 23 removed the scaling pulse but left the orange highlight arriving in one go and then
sitting still, which is easy to miss entirely if the child happens to look away for a second.

**Now there is one glow for the whole lesson,** a single `wordGlow` keyframe used everywhere a
word is highlighted. The halo ramps up from nothing to full and back down, four times over about
4.2 seconds, and then goes out, leaving the word orange. Crucially it animates **only the glow** —
`text-shadow` and nothing else — so the letter still never scales, which was the Round 23 fix and
stays intact.

```
@keyframes wordGlow{
  0%,100% { text-shadow: 0 0 0 rgba(247,161,54,0); }
  50%     { text-shadow: 0 0 22px rgba(247,161,54,.95), 0 0 8px rgba(247,161,54,.7); }
}
```

**Applied in both places a highlight appears**, which is what "poori game me" comes to here:

| where | what glows | when it starts |
|---|---|---|
| comparison screens C1–C4 | the changed syllable — रा, के, पियाँ, लियाँ | when the screen reveals what changed |
| poem screens T1–T4 | the target words inside the stanza | as each line arrives |

The poem's highlighted words previously carried a permanent halo that never moved; that has been
replaced by the same four-breath glow, so the two screens now speak the same visual language.

Verified: the animation resolves as `wordGlow`, 4 iterations, 1.05 s, `ease-in-out`, on both the
comparison syllables and the poem's highlighted words; the keyframes animate `text-shadow` alone;
`transform` stays `none` on every highlight across all 18 slides, so nothing scales; the syllable
settles on `rgb(242,128,30)` orange with the rest of the word navy `rgb(11,61,140)`; zero JS
errors.

*One honest limit:* the browser pane pauses CSS animations while it is hidden, so the four breaths
were confirmed from the resolved animation and keyframe values rather than watched frame by frame.

---

## Round 25 — new टोपियाँ artwork, with the hats at a smaller size

**Request:** replace the flying-hats picture — the one where several children are chasing the
टोपियाँ — with the supplied version, because the hats read as too large in the old art. *"Image ka
size same rahe jaise baaki image ka hai… aur ye jo curve to already hai hi, iska dhyan rakhiyo."*

The picture is `scn_topi_p`, used twice: the second beat of the poem screen **T3** and the right-hand
side of the comparison screen **C3**.

**The supplied file needed preparing, not just copying.** It arrived at 1635×962 with the lesson's
own picture card already drawn into it — a rounded light-blue border and a strip of grid paper
around the outside. Dropping that in as-is would have produced a border inside a border, since the
lesson draws that card in CSS for every picture (Round 21). So the baked-in frame was measured off
the pixels and cropped away, leaving only the scene.

Trimming to the shared 16:9 scene shape took one piece of care: the pink bunting runs right up to
the **left** edge of the artwork, so nothing could come off that side. The right side carries only
flat wall above the floor — the nearest artwork ends 37 px clear of the new edge — so the whole
trim was taken from the right. Final crop 1501×845 from (46, 56), resampled to **1672×941**, which
is the exact size every other scene in the lesson uses.

**Verified:**

| check | result |
|---|---|
| file size on disk | 1672×941, same as `scn_topi_s` and every other scene |
| card on C3 | 443×249 — identical to the टोपी card beside it |
| word centred under it | 0 px offset |
| T3, picture swap between beats | card stays 503×283, **zero jump** as the singular becomes the plural |
| baked-in border | gone — only the lesson's own rounded blue card is drawn |
| broken images anywhere | none |

The previous artwork is kept at `scratchpad/scn_topi_p.prev.png` in case it is wanted back. All 18
slides mount with zero JS errors.

---

## Round 26 — both sides of सही-शब्द-चुनिए now carry their एक / अनेक label

**Request:** *"Right side me likha hua hai एक… but left side me bhi अनेक likha hona chahiye. Aur
vice versa — agar left me अनेक likha hai to right me एक likha hona chahiye. Matlab dono likhe hone
chahiye, एक bhi aur अनेक bhi. Aur ye poori game ke andar apply kar de."*

Only the target side carried a pill. So the screen named the quantity the child is moving *to* and
left the one they are moving *from* unnamed — on a screen whose entire question is the comparison
between those two quantities. The left side showed four hats with no word for what "four" is
called.

**Now both sides are labelled, and the label is derived from the picture count rather than read
from the card.** A hand-authored label could drift out of step with the artwork beside it; counting
the pictures cannot. An explicitly authored `label` still wins if one is ever supplied, so the
existing card data keeps working unchanged.

**Checked on all six question screens** — the pills are always opposite, and each one matches the
number of pictures standing under it:

| slide | word | left pill · pictures | right pill · pictures |
|---|---|---|---|
| Q1 | मछली | एक · 1 | अनेक · 4 |
| Q2 | लड़की | एक · 1 | अनेक · 3 |
| Q3 | टोपियाँ | अनेक · 4 | एक · 1 |
| Q4 | घोड़ा | एक · 1 | अनेक · 3 |
| Q5 | केला | एक · 1 | अनेक · 3 |
| Q6 | पौधे | अनेक · 3 | एक · 1 |

The extra row costs nothing in layout: both sides measure an identical 434×258 and nothing
overflows the card. Answering still works end to end — picking टोपी on Q3 locked in and carried
the lesson on to Q4. Zero JS errors.

---

## Round 27 — a placed word leaves nothing behind, and the gold star burst is gone

Two requests, both asked for across the whole lesson.

### 1. The dragged word disappears from the bank completely

*"Jaise maine गुब्बारा utha ke upar daal diya, to neeche se गुब्बारा ye halka jo blur dikh raha hai
na, ye dikhna nahi chahiye bilkul bhi… wo wala word gayab ho jana chahiye completely."*

A placed tile was left at 14% opacity, which read as a half-present word the child could not pick
up — informative to nobody and confusing to a Grade 2 reader. It is now hidden outright.

`visibility` rather than `display`, on purpose: the tile still occupies its slot, so the word that
is *still in play* does not jump sideways the moment its partner is placed.

Verified on the fill game: after dropping गुब्बारा, its bank tile is `visibility:hidden` while
गुब्बारे stays fully visible at `opacity:1`, and neither tile moved (both still 238×67 in place).
After both words are placed the bank is empty, with no ghosts.

### 2. No gold star burst anywhere — the celebration is the confetti alone

*"Ye jo tune bahut saare stars daal diye hain… ye yellow yellow stars nahi rahenge. Bas jo
celebration wala confetti hai bas wahi rahega… ye poori game me se hata de."*

The heavy gold stars fired over the top of the confetti and buried the very screen the child had
just finished — on the pair game's *"सभी जोड़ियाँ पूरी हुईं!"* screen the completed pairs were
barely readable underneath them.

**Killed at one point, not seven.** There were six `burstStars()` calls plus a separate
`starBurst()` call scattered across the modules, but every one of them routes through a single
`starBurstEffect()`. Neutralising that one function turns the stars off for every caller in the
file — including the modules this lesson does not currently mount — so no future screen can bring
them back by accident.

The thin confetti flecks are untouched: `confettiCannon()` still fires its full 80 pieces, which is
exactly the celebration that was asked to stay.

**Verified:** zero star-burst canvases across all 18 slides; still zero after calling
`burstStars()`, `starBurst()` and `starBurstEffect()` directly on both the body and the stage, so
the kill holds at every entry point; confetti still produces 80 pieces; the pair-game finish screen
now shows its three pair cards clean, with आगे armed. Zero JS errors.

---

## Round 28 — the arrow sits on the centre line of the two boxes

**Request:** *"Ye jo arrow hai na, ye thoda sa upar ko ho rakha hai… halka sa neeche aayega,
iski alignment middle me honi chahiye — left wale box aur right wale box ke middle me rahega ye
arrow. Aur ye change poori game me globally hona chahiye."*

The arrow points from the word box on the left to the drop box on the right, so it belongs on
*their* centre line. It was instead hanging off the bottom of the row with a guessed
`padding-bottom:22px` holding it up, which left it riding above both boxes.

**Fix:** the arrow now gets a slot exactly as tall as those boxes (96 px, the height both
`.pvw-src` and `.pvw-box` are set to) pinned to the bottom of the row, with the glyph centred
inside it. That lands it precisely halfway up the boxes and — unlike a hand-tuned padding — stays
correct whatever the font metrics do.

**Measured on all six सही-शब्द-चुनिए screens**, comparing the arrow's vertical centre against each
box's vertical centre:

| slide | arrow vs left box | arrow vs right box |
|---|---|---|
| Q1 | 0 px | 0 px |
| Q2 | 0 px | 0 px |
| Q3 | 0 px | 0 px |
| Q4 | 0 px | 0 px |
| Q5 | 0 px | 0 px |
| Q6 | 0 px | 0 px |

Both boxes measure 99 px tall on every screen and the arrow is level with both.

Checked the rest of the lesson for arrows of this kind: the only other one is the small `→` inside
the completed pair cards, which is inline with its own text and already centred. The remaining
arrow styles in the file belong to maths modules this lesson does not mount.

All 18 slides mount with zero JS errors, and the only layout overflow is the pair that predates
this round — the speaker chip at 6 px and the bubble stage at 48 px, both deliberate.

---

## Round 29 — QA slide navigator (no code change needed)

**Request:** temporary previous / next buttons to step deliberately back and forward through the
lesson for QA.

**This already exists in the engine** — nothing was added, so there is nothing to strip out before
the lesson ships. Open the file with `?dev=1` (or `?nav=1`) on the end of the URL and a small dark
bar appears in the bottom-right corner:

| control | does |
|---|---|
| ⌂ | back to the landing screen |
| ⏮ | first slide |
| ◀ / ▶ | one slide back / forward |
| dropdown | jump straight to any slide, listed as `11. Q3 · PICK_VACHAN_WORD` |
| ⏭ | last slide |
| label | live position, e.g. `11/18 · Q3` — it keeps up when the game advances by itself |

It drives the engine's own `mountSlide`, so a jumped-to slide mounts exactly as it does in normal
play, and stepping off the landing screen dismisses the start gate for you.

**Verified** on the current build: the bar lists all 18 slides, ▶ went T1 → C1 → T2, ◀ came back to
C1, the dropdown jumped straight to FILL and the levelled drag game mounted, ⏭ reached CEL and ⏮
returned to T1 — zero JS errors.

**It stays invisible for children:** loaded on the plain URL, with no query string, neither the
navigator nor the dev banner is present in the page at all.

One thing to expect while using it: the `?dev=1` banner across the top may report *"missing
signals"*. That is correct behaviour, not a fault — jumping past a slide means its telemetry never
fired, and the banner is saying so.

---

## Round 30 — the bubble game uses the supplied pop recording

**Request:** replace the pop sound in the bubble game with `soundreality-pop-sound-423716.mp3`.

`sfxPop()` was a synthesised noise-burst-plus-sine written when the lesson was rebased (the
reference engine ships no pop of its own). It now plays the supplied recording.

**The file needed trimming first.** It runs 1.78 seconds, but the pop itself is only the 0.17 s
transient between 0.11 s and 0.29 s — everything else is silence. The 113 ms of silence at the
*front* mattered: it would have delayed the sound audibly after every matched pair, which is
exactly the "the match should feel instant" note from Round 4. The clip is now trimmed to that
transient with a short fade out, mono, 0.30 s in total.

**Inlined rather than shipped as a file.** At 4 KB it costs nothing, and it means the pop keeps
working when the HTML is opened or served without its assets folder beside it — the failure that
lost every image on the first Vercel upload. The lesson file went from 958 KB to 963 KB.

**Verified in the running game:**

| check | result |
|---|---|
| clip decodes | yes, 0.30 s |
| plays when called | `paused:false`, playhead advancing, volume 0.85 |
| fires on a real pair match | exactly once per matched pair |
| respects mute | silent while muted, plays again once unmuted |
| other callers | none — `sfxPop` is used only by the bubble game's match |

Zero JS errors. The trimmed clip is kept at `scratchpad/pop.mp3`; the original is where it was
supplied, on the Desktop.

---

## Round 31 — the six object icons are real art now, cut out of their white backgrounds

**Request:** replace मछली, केला, पौधा, घोड़ा, टोपी and गुब्बारा with the supplied artwork,
everywhere they appear — the bubble game, the एक/अनेक game, anywhere. And: *"in sabka white
background bilkul bhi nahi aana chahiye… warna blue bubble ke andar white box bhi dikhega, bahut
bekaar lagega."*

**These six were never on disk.** `obj_machli_s`, `obj_kela_s`, `obj_paudha_s`, `obj_ghoda_s`,
`obj_topi_s` and `obj_gubbara_s` were named in the manifest but had no files behind them, which is
why they had been rendering as emoji since the start — the standing open item about object icons.
The supplied artwork fills all six.

**Cutting the white out properly.** Five of the six arrived on flat white; the balloon already had
transparency. The white could not simply be keyed out by colour, because the fish's eye-white, the
banana's highlight and the horse's cream muzzle are near-white too and had to survive. So the
background is found by flooding inward from the border: anything the flood cannot reach is, by
definition, enclosed by the artwork's own outline and is left alone. The antialiased rim gets a
partial alpha and is un-premultiplied back off white, so no pale halo is left behind.

*One wrong turn worth recording:* the first pass keyed only 252-and-above as background. Resampling
a 1254 px source down to 512 drags a 253-white to about 251, so almost every background pixel kept
a sliver of alpha — a faint magenta film over the whole frame, and the fish measured only 10%
transparent. Loosening the threshold to 244 and discarding anything below quarter alpha fixed it.

**Result, measured on every object asset in the lesson — all fourteen, not just the six:**

| asset | transparent | opaque near-white left |
|---|---|---|
| obj_machli_s | 41% | 1% (the eye) |
| obj_kela_s | 60% | 0% |
| obj_paudha_s | 54% | 1% |
| obj_ghoda_s | 38% | 1% (muzzle and eye) |
| obj_topi_s | 36% | 0% |
| obj_gubbara_s | 48% | 0% |
| the eight that were already there | 33–77% | 0–1% |

All four corners are fully transparent on every one, so nothing can show a white box behind it.

**Verified in the running game:** every `obj_*` image loads on every slide that uses one —
Q1–Q6 and both bubble games — with zero broken images and **zero emoji fallbacks left anywhere**.
Seen on screen: the bubbles on PAIR1 and PAIR2 now carry the real cap, balloons, banana, horse,
सहेली and fish with clean edges inside the blue, and Q1 shows one fish against four. Zero JS errors.

This closes the "object icons render as emoji" open item, and the note from Round 16 about
`obj_ladki_s/p` carrying an opaque white background — re-measured at 1%, so it no longer applies.

---

## Round 32 — the स्तर-पूरा panel uses the supplied artwork, and its stars land one at a time

**Request:** the level-complete beat in the drag game looked *"kaafi basic, kaafi bekaar"* — use the
supplied lockup for स्तर 1 and the second one for स्तर 2. And the three stars should arrive
**one by one**, left then middle then right, each bouncing in with a *"tanng"*.

**The pictures had to be taken apart, not dropped in whole.** A single flat image cannot animate
its own stars, so each lockup was cut into pieces:

- **the star** — one cutout, reused three times at the sizes the artwork uses (small, large,
  small). The three stars in the picture are the same drawing at different scales, so one file is
  enough and each copy can then be animated on its own.
- **the title** — `ui_level1_done.png` and `ui_level2_done.png`, the drawn lockups, kept as
  pictures because they are illustrated lettering rather than type we could set.
- **the button** — deliberately *not* used. The panel already has a real `<button>` that matches
  it, and a picture of a button cannot be tapped, focused or read aloud.

Separating them took two attempts. Column projection could not split the stars: they abut, so all
three read as one run, and on the second lockup the stars and title merged into a single row band
because the gap between them is only about twenty rows. Labelling connected blobs inside the stars
band instead found exactly three, cleanly — 196×192 for the middle one and about 128×132 for each
small one. White backgrounds were removed with the same border-flood cutout as the object icons.

**The arrival:** each star pops in 300 ms after the last, starting 260 ms in, on a
`cubic-bezier(.34,1.56,.55,1)` curve that overshoots to 1.18× and settles — a bounce rather than a
fade. The confetti now waits for the third star instead of firing over the top of them.

**The chime** is three ascending bells, G5 → B5 → D6, one per star. Each is two sine partials with
a fast exponential decay, which is what makes it read as a bell rather than a beep, and it respects
mute like every other sound. *This one is synthesised, not a supplied recording* — send a real
"tanng" and it drops straight in.

**Verified end to end** by playing both levels through in the game: after स्तर 1, all three stars
carry the `pop` class and `ui_level1_done.png` is loaded and drawn at 454×108; after स्तर 2 the
same three stars plus `ui_level2_done.png`. Every image loads, the sub-line and the अगला स्तर
button are intact on both, and the button still advances to the next level. Zero JS errors.

स्तर 3 has no panel — it ends the game, so it goes to the closing summary instead.

---

## Round 33 — the level panel drops its sub-line and wears the supplied button

**Request:** remove the line under the title (*"अगले स्तर में 'एक' और 'बहुत सारे' नहीं मिलेंगे —
क्रिया से पहचानिए।"*) completely, and replace the अगला स्तर button with the one from the supplied
image.

**The sub-line is gone from the screen** — the panel is now stars, title, button, nothing else.
The same guidance is still *spoken*: `vo_fill_level1` and `vo_fill_level2` carry it, so the child
is still told what changes in the next level, it just is not printed under the artwork. That
matches the standing rule from Round 13 that a line written to be heard should not also be read.

**The button is the artwork now, and still a real button.** `ui_btn_next_level.png` was cut out of
the same lockup and sits *inside* a `<button>` rather than replacing it, because a picture of a
button cannot be tapped on a touch device, reached by keyboard, or announced by a screen reader.
The element drops its own gradient and border so only the artwork shows, and it carries
`aria-label="अगला स्तर"`. It keeps a press state, a hover lift and a visible focus ring.

**Verified on both panels:**

| check | स्तर 1 | स्तर 2 |
|---|---|---|
| sub-line present | no | no |
| any text left in the panel | none — all artwork | none — all artwork |
| images loaded | star ×3, `ui_level1_done.png`, `ui_btn_next_level.png` | star ×3, `ui_level2_done.png`, `ui_btn_next_level.png` |
| element type | `BUTTON`, `aria-label="अगला स्तर"` | same |

Pressing it still advances the game: from `स्तर 1 · 3/3` straight to `स्तर 2 · 1/3` with the
questions back on screen. Zero JS errors.

---

## Round 34 — the orange rectangle behind the अगला स्तर button is gone

**Request:** only the pill should show — *"ye jo bahar rectangle orange bana diya hai, ye hata de,
bas wo main button rahega beech wala"* — on both स्तर 1 and स्तर 2.

**It was not in the artwork.** `ui_btn_next_level.png` is the pill alone; the rectangle came from
the stylesheet. A **complete stale copy** of the fill game's panel CSS was still sitting further
down the file — a Round-14 rebase leftover — and being later in the document it quietly beat the
real rules above it. Its `.fvd-panel-btn` still carried the old `linear-gradient(#FFD05A,#FFA900)`,
a `20px` radius and `12px 40px` of padding, so the button element painted its own orange pill
*behind* the artwork and the padding made it bigger all round. That is the rectangle.

The duplicate block also shadowed `.fvd-panel`, `.fvd-panel-stars`, `.fvd-panel-ttl`,
`.fvd-panel-sub` and both `.fvd-summary` rules. It has been deleted, and the file now has exactly
one definition of every `.fvd-*` selector — checked by counting selector definitions across the
whole stylesheet, which reports no duplicates left.

**This is the third time a stale duplicate has silently won:** the `.tut-audio` chip position in
Round 16, the `.stage.tut` picture rules in Round 22, and now this. Each time the symptom was a
change that appeared to do nothing. Worth checking for a shadowing copy first whenever an edit to
this file seems to have no effect.

**Verified on both panels, by playing them rather than by inspection:**

| | स्तर 1 | स्तर 2 |
|---|---|---|
| button `background-image` | `none` | `none` |
| padding / radius | `0px` / `0px` | `0px` / `0px` |
| button box vs artwork | 227×85, exactly the image | 227×85, exactly the image |
| sub-line | absent | absent |
| artwork present | star ×3, title, button | star ×3, title, button |

Pressing it still moves the game on — `स्तर 1 · 3/3` → `स्तर 2 · 1/3`. Zero JS errors.

---

## Round 35 — the landing title and subtitle lifted a little

**Request:** on the first screen, *"मीरा का जन्मदिन"* and *"कविता से एकवचन-बहुवचन सीखो"* sit a touch
low — move the two of them up together, just slightly.

They were noticeably bottom-heavy in the card: 79 px of air above the title against 149 px below
the subtitle. Both lines now sit 24 px higher.

**Moved with a transform, not a margin.** `.sg-content` is a flex child sitting above the
शुरू करें button, so changing its margin would have pushed the button down by the same amount. A
`translateY(-24px)` takes the pair out of the layout maths entirely: the two lines move, the button
does not.

**Measured before and after:**

| | before | after |
|---|---|---|
| title top, from the card's top edge | 79 px | **55 px** |
| gap between title and subtitle | 14 px | 14 px — unchanged, they moved as a pair |
| शुरू करें button, from the card's top edge | 352 px | **352 px — unmoved** |
| Swiftee and the speaker chip | 264 px / 88 px overlap | unchanged |

Zero JS errors.

---

## Round 36 — the bubble game's "टैप कीजिए" heading and voice stopped leaking onto the drag game

**Report:** on the drag game the heading correctly reads *"सही शब्द खींचकर खाली जगह में रखिए।"*, but
a moment later it is replaced by *"पहले एक शब्द पर, फिर उसकी जोड़ी पर टैप कीजिए।"* — text and voice
both. That line belongs to the bubble game only; this game has no such instruction.

**Cause — the same stale-timer bug, in the one module Round 17 missed.** The bubble game's opening
beat rewrites the shared heading and plays `vo_mtp_tap` from a timer that fires about two seconds
after the slide mounts, and nothing checked that the slide was still on screen. Finish the bubble
game quickly — or let any of its other pending timers run out — and that heading and that voice
land on whatever slide the child has moved on to. Round 17 fixed exactly this class of bug in
`STORY_SCENE` and `COMPARE_VACHAN`; `MATCH_THE_PAIR` was never given the same guard.

**Fix:** every deferred step in the module now checks that this mount is still in the document —
the opening beat, the demo's pointing chain, the pulse cleanups, the burst-to-tray settle, the
wrong-answer ladder, the guided reveal, the idle nudge and the finish. Twelve timers and seven
callbacks. The guard is called `onScreen` rather than `alive`, because `alive` already means
something else in this module ("this bubble has not been solved yet").

**Verified three ways:**

| test | result |
|---|---|
| jump away from the bubble game mid-beat, then watch the drag game for 9 s | one heading only — *सही शब्द खींचकर खाली जगह में रखिए।* |
| the same, watching which audio clips are requested | only `vo_fill_prompt.ogg`; no `vo_mtp_*` |
| the real path — finish PAIR2, press आगे, watch FILL for 8 s | heading and clip both correct, nothing from the bubble game |

**The bubble game itself is untouched:** on PAIR1 both of its own headings still appear in order
and both `vo_mtp_prompt` and `vo_mtp_tap` still play there. A sweep of all 18 slides finds every
heading matching its own slide's `prompt_hi`. Zero JS errors.

---

## Round 37 — "शब्द चुनिए" is navy like the rest of the screen

**Request:** the *"शब्द चुनिए"* label above the word tiles should be blue like the other text.

It was the only thing on that screen in a muted grey-blue (`#617B9B`) while everything around it —
the स्तर label, the star count, the sentence text and the word tiles — is navy. It now uses the
same `var(--navy)` as its neighbours.

**Confirmed by measurement**, reading the computed colour of every text element on the screen:

| element | colour |
|---|---|
| **शब्द चुनिए** | **`rgb(11, 61, 140)`** |
| स्तर label | `rgb(11, 61, 140)` |
| star count | `rgb(11, 61, 140)` |
| sentence cards | `rgb(11, 61, 140)` |
| word tiles | `rgb(11, 61, 140)` |

All five now match exactly. The label already shared the white legibility shadow the स्तर label and
star count carry against the background, so nothing else needed changing there.

**Swept for the same mistake elsewhere:** this was the only muted helper label in the activity
stylesheet — no other greyed-out text was found to bring into line. Zero JS errors.

*Note on how this was checked:* the browser pane would not repaint while hidden, so the change is
confirmed from the computed styles rather than from a screenshot.

---

## Round 38 — the sentence cards are the water panel, and the ocean backdrop stopped eating the layout

**Request:** in the fill-in-the-blanks game, replace the white sentence panel with the supplied
water bar and put the question on top of it.

### The panel

`ui_panel_water.png` (1920×330, already transparent in the source) is applied as a **9-slice
`border-image`**, not as a stretched background. The artwork is 1920×330 and the card is about
1080×104 — stretching it whole would have squashed the rounded ends into flat ellipses. Slicing
170 px off each side keeps both caps at their own shape and stretches only the middle to whatever
the sentence needs; the caps are drawn 50 px wide, which holds their aspect at this card height.

The card's own white gradient, border, radius and shadow are gone. The correct-answer green still
lives on the placed word, never on the panel — the Round 19 rule is untouched.

### The bug this uncovered

The screen would not lay out at all: `.fvd-body` was **0 px tall** with `overflow:hidden`, so the
sentence cards and the whole word bank were clipped out of sight.

The cause is in the ocean theme that was added to this build outside these rounds. Its backdrop is
injected from `assets/ocean-vo-config.js` as a plain `<div class="ocean-decor">` carrying the sea
video and bubbles — and **there is no CSS rule for that class anywhere**, neither in the HTML nor in
that script. So it sat in `.fvd`'s column flex flow as a 1088 px-tall child and starved everything
below it. It is plainly meant to be a backdrop: the theme already lifts `.fvd-top` and `.fvd-body`
to `z-index:1` "over the water", which only makes sense with something behind them.

Taken out of the flow — `position:absolute; inset:0; z-index:0; pointer-events:none` — plus
`object-fit:cover` on the video so it fills rather than stretches. This was outside what was asked,
but the requested change could not be seen at all until it was fixed.

**Before → after on the drag game:**

| | before | after |
|---|---|---|
| `.fvd-body` height | 0 px | **416 px** |
| content clipped inside it | 171 px | **0** |
| sentence cards | clipped away | 2 × 104 px, visible |
| word bank | clipped away | 106 px, visible |
| overflow below the slide host | 702 px | **0** |

**Verified:** the panel image loads (1920×330) and resolves as `border-image-slice: 0 170 fill`,
`border-image-width: 0 50px`, `stretch`; dropping a word still fills its blank green
(`rgb(226,251,236)` on a `rgb(0,177,50)` border) while the panel behind it is unchanged, and the
used tile still disappears from the bank. Swept all 18 slides: the only overflows left are the two
that predate this round — the speaker chip at 6 px and the bubble stage at 48 px, both deliberate —
and the backdrop is `absolute` on both bubble slides, which now draw correctly too. Zero JS errors.

---

## Round 39 — the rest of the lesson now has the same VO behaviour as the two ocean games

**Request:** the VO working in the last two games should be implemented properly across the whole
lesson.

**Why the rest was silent.** Those two games were given their own voice config
(`assets/ocean-vo-config.js`) with seven real recordings — two instructions, two retry lines, three
praise lines. Every other screen still pointed at the `vo_*.ogg` files from `card.json`, and none of
those have been recorded, so `play()` held for the right beat and said nothing.

**The fix is a stand-in, not a rewrite.** `play()` can now tell its caller the file was not there,
and a new `voSay(src, kind, done)` asks for the authored clip first and falls back to the generic
ocean line of the same kind when it is missing. The moment a real recording is dropped in it takes
priority again with no code change.

**What is now voiced that was not:**

| screen | before | after |
|---|---|---|
| Q1–Q6, correct answer | sound effect only | **spoken praise**, randomised across the three lines, never the same one twice running |
| Q1–Q6, 2nd wrong answer | sound effect only | **spoken retry line**, randomised across the two |
| Q1–Q6, sitting idle | nothing | **instruction repeats at 7 s**, then a **visual hint at 15 s** — the same two beats the ocean games use |
| Q1–Q6, wrong sound | generic | the ocean games' own retry sound |
| CEL, the closing screen | sound effect only, no voice at all | **spoken praise line** |

Measured in the running lesson: a wrong answer on Q1 asks `vo_pick_retry_q1.ogg`, finds it missing
and is heard saying `ocean_retry_1.mp3`; a correct answer asks `vo_pick_ok_q1.ogg` and is heard
saying `ocean_correct_1.mp3`; across Q2/Q3/Q4 the praise came out 3, 2, 3 — randomised without
immediate repeats. Idle timing measured at exactly 7 s and 15 s.

*One bug caught in the process:* the celebration does not set `state.ownsAudio`, so `mountSlide`
already speaks its line through `autoPlayChain`. Adding a second call there would have been two
voices at once as soon as the real recording landed. It now sets `ownsAudio` and speaks exactly
once — verified: one request for `vo_well_done.ogg`, one fallback heard.

**Still silent, and why.** The *entry* line of every teaching screen still needs a recording, and I
could not make one: this machine has only `en-US` voices installed, so Hindi text produces an empty
file — the same wall hit earlier in the build. The structure is in place and each will speak the
moment its clip exists. **17 clips would finish the job:**

- `ocean_instruction_pick.mp3` — *"सही शब्द चुनिए।"* — one file, covers all six question screens
- 8 poem stanzas — `vo_stanza1`, `2`, `3a`, `3b`, `4a`, `4b`, `5a`, `5b`
- 8 comparison lines — `vo_cmp_{gubbara,ladka,topi,saheli}_{1,2}`

Their Hindi text is already written in `card.json` → `assets.audio_text` and listed in
[VO_SCRIPT.md](VO_SCRIPT.md).

All 18 slides mount with zero JS errors, and the two ocean games are untouched — they still speak
their own instructions on entry.

---

## Round 40 — VO reconciled against the review deck, and the recording list cut to real work

**Request:** add VO properly across the whole lesson, taking the review deck as the reference, and
leave the two end games alone since they are already voiced.

### What the deck says, and what the game says

Read the deck page by page and compared every line it dictates against `card.json`:

| deck page | what it specifies | matches the game |
|---|---|---|
| p.3 | the landing line | yes |
| pp.4, 6, 8, 10 | the four poem stanzas — *"VO: play the same VO as text"* | yes |
| pp.5, 7, 9, 11 | each comparison screen's VO 1 (recap) and VO 2 (*"तो हमने देखा कि…"*) | yes |
| pp.12–17 | *"सही शब्द चुनिए।"* and each question's correct-answer line | yes |
| p.18 | attempt 1 **no VO at all**; attempt 2 the retry line; attempt 3 read the correct word | yes |
| p.19 | the closing recap | yes |

**Thirteen deck-specified lines checked; all thirteen identical to the game, character for
character.** One deliberate difference: the deck's closing line still reads बच्चा-बच्चे, which the
deck itself renamed to लड़का-लड़के earlier on — the game says लड़का-लड़के, which is right.

The deck's *behaviour* rules were checked in the running lesson too: tapping the source word plays
that word's clip (deck: *"If child tap the word X, its VO must play"*), the first wrong answer is
silent, the second speaks the retry line and the third reads the correct word back.

So the VO **content and wiring were already faithful to the deck**. What is missing is the audio.

### The audio could not be produced here

Two routes, both closed:

- **Locally** — this machine has only `en-US` voices installed, so Hindi text renders to an empty
  file. Same wall as earlier in the build.
- **The pipeline the team used** — their own config records the voice as `hi-IN-SwaraNeural` from
  Microsoft's read-aloud endpoint. The voice list still answers and still offers that voice, but
  the synthesis endpoint now returns **403** to anything that is not the Edge browser. That is
  deliberate client gating, and I did not try to defeat it.

### What was done instead: the recording list is now real work only

The drag game was rewired at some point to speak entirely from `assets/ocean-vo-config.js`. Checked
it properly — **zero runtime references** to any of its authored keys, and it sets `ownsAudio` so
nothing plays them behind the scenes — which meant 25 lines in the manifest that no code would ever
play. Recording those would have been wasted effort. Pruned.

**The list went from 83 lines to 58**, every one of which a screen actually asks for.
[VO_SCRIPT.md](VO_SCRIPT.md) is now a to-record list rather than an inventory: it states which deck
page each group comes from, and says plainly that the two end games are already voiced and are not
in the list. Their one gap is `ocean_instruction_pick.mp3` — *"सही शब्द चुनिए।"* — which the
question screens borrow for their idle reminder.

**Verified after pruning:** all 18 slides mount, each asks exactly its own line, zero JS errors, and
the two end games still speak their own instructions from the ocean config untouched.

---

## Round 41 — the bubbles drift, nudge each other, and ripple where they touch

**Request:** let the bubbles float a bit more and collide gently with one another — not so much that
a child cannot follow them, just enough for a little game feel — and show a water effect at each
collision.

**They could never have collided before.** Each bubble bobbed on its own CSS keyframe, up and down
nine pixels in place, unaware of the others. They now share one loop: each drifts across the field,
bounces off the walls and off the other bubbles, and a ring of water opens wherever two of them
touch.

**Kept deliberately slow.** Around 10–18 px a second, so a bubble takes the better part of a minute
to cross the field — a child can read a word while it moves, which was the constraint. Collisions
swap the speed along the line of contact between equal masses, so no energy is ever added and the
field cannot wind itself up into something fast.

**Positions are written to `left`/`top`, never to `transform`.** The select, burst and fly states
all animate `transform`, and driving both would have them fight — a bubble would have jumped when
it was tapped or snapped back mid-flight to the tray.

**A tapped bubble holds still.** Once a child picks one, it stops dead while the rest keep drifting
— measured at 0.00 px of movement over two seconds against 14.6 px for its neighbours. Chasing a
moving partner after committing to the first would have been unfair. Solved, bursting and flying
bubbles are frozen for the same reason.

**Verified** (the browser pane freezes `requestAnimationFrame` while hidden, so the loop was driven
on a timer to measure it):

| check | result |
|---|---|
| drift speed | 4–17 px/s net per bubble |
| collisions | 3 ripples in 8 s — occasional, not constant |
| one ring per touch | yes, a 600 ms guard per pair stops it firing every frame |
| bubbles escaping the field | none — all six stayed inside over the run |
| selected bubble | 0.00 px moved, neighbours 14.6 px |
| the game still plays | all pairs solved by tapping, tray cards appeared, आगे armed, lesson advanced |
| loop stops on leaving | 0 frames after the slide changed, no ripples left behind |

Reduced-motion is respected: where the system asks for less movement the loop never starts and the
old gentle bob is used instead. All 18 slides mount with zero JS errors and no new layout overflow.

---

## Round 42 — collision ripple removed, and the drift made actually smooth

**Request:** drop the collision effect; keep the movement as it is but make it smooth — it looked
like the game was running at a low frame rate.

### The stutter was mine, and it was a real bug

The first cut wrote `left`/`top` on every bubble every frame **and read `offsetWidth` /
`clientWidth` back inside the same loop**. Reading a layout property straight after writing one
forces the browser to redo layout there and then — so all six bubbles were re-laid-out on every
single frame. That is the classic cause of exactly the symptom described: motion that looks like a
dropped frame rate even though the loop is running at full speed.

Two changes fix it:

- **Every measurement is taken once**, before the loop starts — the field's size and each bubble's
  size — and refreshed only on a window resize. Nothing inside the loop reads layout at all now;
  verified by grep, zero layout reads remain in the animation step.
- **The drift rides the CSS `translate` property** instead of `left`/`top`. `translate` is its own
  property, separate from `transform`, so it composites without laying anything out — and,
  importantly, it leaves `transform` completely free for the select, burst and fly states. Checked
  that they still compose: a selected bubble reports `matrix(1.05, 0, 0, 1.05, …)` from its own
  `scale(1.05)` rule while the drift translate is applied at the same time.

Per frame there is now exactly one style write per bubble, to a compositor-only property.

### The ripple is gone

The collision water ring and its CSS are removed — zero references left in the file. The gentle
collisions themselves are kept, since those were the part asked for last round and the request was
about the *effect*; say the word if the bumping should go too and it is a one-line change.

**Verified:** the drift still runs at 8–16 px/s, `left`/`top` never change any more, all six
bubbles stay inside the field, a tapped bubble still freezes while its neighbours keep moving, and
a full playthrough of the bubble game still bursts each pair into the tray and advances the lesson.
All 18 slides mount, zero JS errors, no ripple elements anywhere, and the only layout overflow is
the pair that predates all of this — the speaker chip at 6 px and the bubble stage at 48 px, both
deliberate.

*Measured with the animation loop driven on a timer: the browser pane freezes
`requestAnimationFrame` while it is hidden, so smoothness itself could not be watched here — the
fix is established by there being no forced layout left in the loop rather than by eye.*

---

## Round 43 — the transition's trailing edge is a water line, not a straight cut

**Request:** the fish crossing is fine, but as the old screen slides away its edge is a dead
straight vertical line. Make that edge look like water — wavy, in the same blue.

**Why it was straight:** the wipe used `clip-path: inset(0 0 0 100%)`, and an inset rectangle's edge
is a straight line by definition. Nothing could have made it wavy.

**Now it is a polygon.** Twelve points run down the trailing edge, and the same twelve exist in
every keyframe — `clip-path` only interpolates between polygons of matching point count. Their
offsets differ at each keyframe, so the edge **undulates as it travels** rather than sliding across
rigidly: the wave is one shape at rest, inverted halfway through, and back by the end. Colours,
timing (3.5 s), the fish, the bubble trail and the title are all untouched.

### Two things this uncovered, both mine

**1. The theme stylesheet had never loaded in my test browser.** My local preview server's MIME
table had no entry for `.css` or `.js`, so `assets/ocean-games.css` was served as
`application/octet-stream` and the browser refused it — it parsed to **zero rules**. Every check I
ran against the ocean theme in this pane was therefore against a page missing its theme. Fixed the
server's MIME map; the stylesheet now loads with its 41 rules.

**2. Round 38's backdrop fix was built on that false reading, and has been removed.** I had added
`.ocean-decor` and `.ocean-sea-video` rules to the HTML, concluding the theme "had no CSS anywhere
for that class". It does — `ocean-games.css` lines 3 and 4, and its video rule is the better one
(it carries `opacity:.94`, mine did not). My copies were a strictly worse duplicate of rules that
already existed, and a second home for the same thing is exactly the shadowing trap that has cost
three rounds in this file already. Removed; the stylesheet owns them again.

The symptom Round 38 chased was real in my pane, but it was caused by my server, not by the lesson.

**Verified with the theme stylesheet genuinely applied:** the wipe animates `oceanGameReveal 3.5s`
and its computed `clip-path` is a polygon at every keyframe — `117%…`, `49%…`, `-5%…` — not an
inset. The drag screen still lays out correctly with the backdrop coming from the stylesheet alone:
`.fvd-body` 416 px, cards 222 px, bank 106 px, nothing clipped, zero overflow below the host. All
18 slides mount with zero JS errors and only the two long-standing deliberate overflows.

---

## Round 44 — the pale card behind स्तर-पूरा is gone; the sea shows through

**Request:** remove the white box behind the स्तर-पूरा artwork completely — the sea background looks
better on its own.

That box was `.fvd-panel` in the ocean theme block: a translucent near-white fill with a white
border, a rounded corner pair, a drop shadow and a `backdrop-filter: blur(5px)`. All five are gone.
Only the positioning and the breathing room around the content are kept, so nothing moved.

**Applied to the closing summary too, not just the level panel.** Both screens are built from the
same `.fvd-panel`, so the change carries to the *"सभी वाक्य पूरे हुए!"* screen as well — which is
right: it was showing the same pale card over the same sea. The nine pair chips keep their own white
pills, which read clearly against the water.

The artwork does not need the card: the स्तर-पूरा lockup already carries its own outline and drop
shadow, so it holds up against the background by itself.

**Verified on both screens** — background `rgba(0,0,0,0)`, border `0px`, `box-shadow: none`,
`backdrop-filter: none`, radius `0px`:

| screen | card gone | content intact |
|---|---|---|
| स्तर-पूरा | yes | three stars, the lockup, the अगला स्तर button |
| closing summary | yes | title and all nine pair chips, 19 px clear of the card's bottom edge |

All 18 slides mount with zero JS errors. The only overflows are the long-standing deliberate pair —
the speaker chip at 6 px and the bubble stage at 48 px — plus a sub-pixel 0.8 px from one of the
ocean backdrop's decorative bubbles, which is clipped by the backdrop itself and invisible.

---

## Round 45 — the two changed endings now stay lit together instead of replacing each other

**Report:** on the comparison screens the endings should light **in turn** with the voice — रा as she
says *"एक है तो गुब्बारा"*, then रे at *"अनेक हैं तो गुब्बारे"*. Lighting them one at a time was
already right. What was wrong: *"जब रा ग्लो होता है तो फिर वो ग्लो बंद हो जाता है, फिर सडनली रे ग्लो
होने लग जाता है"* — रा should **stay** when रे lights, not disappear.

**The code was actively taking it away.** Two lines did it:

- when the second ending lit, the first was explicitly un-lit — `words[0].classList.remove("lit")`
- when the explanation finished, **both** were un-lit — `words.forEach(w => w.classList.remove("lit"))`

So the screen erased the comparison at the exact moment it was making it, and then cleared the
result entirely. The whole point of the screen is seeing गुब्बा**रा** beside गुब्बा**रे** with both
changed endings marked at once.

**Now they accumulate.** The first ending lights and stays; the second joins it partway through the
line; both remain marked after the voice ends, for as long as the child is on the screen.

**Measured on C1, second by second:**

| time | what is lit |
|---|---|
| 0.0 s | neither — the whole words are shown first, as the deck asks |
| 5.5 s | **गुब्बारा** — रा |
| 8.1 s | **गुब्बारा and गुब्बारे** — रा stays, रे joins it |
| after the line | both still lit |

Both endings settle on orange `rgb(242,128,30)` with the rest of each word navy `rgb(11,61,140)`.
**C2, C3 and C4 were checked too** and all three run the same `— , —` → `LIT , —` → `LIT , LIT`
progression.

**Swept for the same mistake elsewhere:** the only other place a highlight is removed is the drag
game clearing its "which tile is right" hint after it has been used, which is correct. The poem
screens already accumulate their orange words — nothing there removes them.

All 18 slides mount with zero JS errors, and the only overflows are the long-standing deliberate
ones plus a sub-pixel from the ocean backdrop's own decorative bubbles.

---

## Round 46 — the swimming-Swiftie transition uses the clean clip and stays inside the layout

**Request:** use the supplied `SWiftie Swimming_gwr_video_mvp.mp4` (the watermark-free cut), and stop
the transition covering the whole screen — it should play only in the area the game itself occupies,
with its margins and ratio, and Swiftie at the top should stay visible while it runs.

**The clip** is copied in as `assets/Video/swiftie_swimming_v2.mp4` (1920×1080, 4.9 s) under a new
name rather than overwriting the old one, so no browser holds a cached copy of the watermarked
version. Playback rate, volume and the audio fade are unchanged.

**The overlay is no longer full-screen.** It was `position:fixed; inset:0` appended to `<body>`,
which is why it blacked out the header. It is now `position:absolute` inside `.slide-stage`, and
`oceanFishTransition` measures the outgoing activity card at the moment it runs and sizes the
overlay to exactly that box — so it adapts to whichever card is on screen rather than assuming one.
It carries the card's 26 px corner radius, and its z-index was dropped from 100005 to 40: above the
slide content, below the header chrome.

**Measured on the real path** — solving PAIR2 and pressing आगे, which is the only place this
transition fires (a match slide followed by the drag game):

| check | result |
|---|---|
| transition fired | once |
| overlay parent / position | `.slide-stage`, `absolute` |
| overlay box vs the card | **0, 0, 0, 0** — an exact match on every edge |
| header above it | yes — the instruction bar and Swiftie stay on screen |
| clip playing | `swiftie_swimming_v2.mp4` |
| corner radius | 26 px, same as the card |
| afterwards | overlay removed, FILL mounted and ready |

*One judgement call:* the video is `object-fit: cover`, so a 16:9 source fills a card that is wider
than it is tall and is cropped a little top and bottom. Swiftie stays centred and it reads well —
but say so if you would rather see the whole frame with water bands above and below.

**Two clips are now unreferenced** — `swiftie_swimming.mp4` and `fish_transition_underwater.mp4`,
about 5 MB between them. Left on disk rather than deleted; worth removing before a deploy.

All 18 slides mount with zero JS errors and no new overflow.

---

## Round 47 — the finished bubble screen no longer flashes between the transition and the drag game

**Report:** as the transition ends, the bubble game's completed *"सभी जोड़ियाँ"* tray pops up for about
a second before the drag game appears. It should never show — and the hand-over into the drag game
should fade rather than arrive suddenly.

**The steps were in the wrong order.** The overlay began fading at 3420 ms, but the next slide was
only mounted at 3660 ms. For those 240 ms the video was already semi-transparent while the screen
behind it was still the bubble game's finished tray — so the tray showed through, then the drag game
replaced it. A second route to the same flash: if the clip ended early, the `ended` handler called
`close()` outright, which removed the overlay before anything had been mounted underneath.

**Now the next screen is mounted before anything fades**, and the early-end path goes through the
same function instead of closing:

| when | what happens |
|---|---|
| 3300 ms | the drag game mounts — the overlay is still fully opaque, so nothing is visible yet |
| 3306 ms | the overlay starts fading |
| 4051 ms | the overlay is removed, well after the dissolve has finished |

Measured in the running lesson with a mutation observer on the real transition: **mount comes
before the fade**, by 6 ms, so there is no window in which the old screen can be seen. Nothing else
can appear either — whatever is behind the overlay has already been replaced.

**The fade itself is the hand-over.** It was lengthened from 0.46 s to 0.6 s and the overlay is now
held until 140 ms past the end of it, so the drag game dissolves in from the video instead of
cutting in. Because the game is mounted underneath before the fade starts, the fade reveals the
game itself — there is no blank or white stage in between, which was the other half of the report.

All 18 slides mount with zero JS errors, no stray overlay is left behind anywhere, and the only
layout overflows are the two long-standing deliberate ones.

---

## Round 48 — the bubble game's opening beats now run in order

**Report:** when the bubble game starts, the main instruction at the top should be spoken first.
Only one second after that voice ends should the गुब्बारा–गुब्बारे pair highlight, with the rest of
the bubbles going soft and slow. Right now the pulsing and *"गुब्बारे और उसकी जोड़ी पर टैप कीजिए"*
both begin the instant the game opens.

**What was actually happening.** The demo branch of the bubble game's `openThenPlay()` did two
things on the same line as the mount: it called `beginOnboarding()` — which adds the pulse to the
गुब्बारा/गुब्बारे pair and dims and slows every other bubble — and it spoke `bubbleGuidedPair`. The
main instruction printed across the top of the screen, *"एक और अनेक वाले शब्दों की जोड़ियाँ ढूँढ़िए।"*,
was **never voiced at all**: the module owns its own audio, so the engine's automatic chain is
suppressed, and nothing in the module ever played it. So the child's first second on the screen was
a short line about गुब्बारे spoken over a board that was already animating, while the instruction
they were being asked to read stayed silent.

**The fix.** The two beats are now separate and ordered:

1. on mount the board is unlocked and `instructionBubble` — the recorded clip of the top line —
   plays on its own, with nothing pulsing and nothing dimmed;
2. `ONBOARD_GAP` (1000 ms) after that clip ends, `beginOnboarding()` runs and `bubbleGuidedPair`
   speaks alongside it.

Both steps go through the module's existing `later()` / `onScreen()` guards, so a child who
finishes or leaves the screen early cannot carry the teaching beat onto the next slide.

**The board stays live throughout.** A child who already understands may start during the
instruction, and a new `touched` flag records their first tap; the delayed teaching beat checks it
(and `solved`) and drops itself rather than taking over a game already in progress. The replay chip
follows the same logic — it repeats the top instruction while that is all the screen has said, and
the short pair line once the highlight is up.

Level two is unchanged: it deliberately opens silently, with no repeated instruction and no
highlight, because the mechanic has already been taught there.

**Verified by event timeline** (a hidden browser pane freezes animations, so this is measured from
audio and class-mutation events rather than from a screenshot):

```
  282 ms  play   ocean_instruction_bubble.mp3
10049 ms  ended  ocean_instruction_bubble.mp3
11063 ms  play   ocean_bubble_guided_pair.mp3
11064 ms  PULSE  गुब्बारा / गुब्बारे     DIM  टोपी टोपियाँ केला केले
```

— a 1014 ms gap between the instruction ending and the highlight, and no bubble carries
`onboarding-target` or `onboarding-dim` before it. Tapping a bubble at 2.5 s, mid-instruction,
leaves `onboarding-target` at 0 and no `onboarding-focus` for the rest of the screen, which
confirms the guard. All 18 slides still mount with zero JS errors.

---

## Round 49 — the "एक से अनेक" caption is gone from the bubble game's result cards

**Report:** remove the *एक से अनेक* line from the completed pair cards, in **both** levels of the
bubble game.

Both levels build their result cards through the same `addPairCard()`, so the caption had a single
source: a `<span class="mpc-complete">एक से अनेक</span>` appended to every card. It was hidden while
the card sat in the tray and only revealed on the *"सभी जोड़ियाँ"* screen, which is where it showed.
That span is now gone, and so is everything that existed only to serve it — the rule that hid it in
the tray, the rule that positioned and coloured it on the result screen, the rule that animated it
in, and the `mtpResultLabel` keyframes. Leaving those behind would have been dead CSS for a later
round to trip over, which is exactly how the stale-rule problems in earlier rounds started.

The card's bottom padding was `16px 14px 19px` — the extra three pixels existed to leave room under
the caption — and is now an even `16px 14px`, so the pair sits centred in the card.

**Verified** by playing both levels through to their result screens in the browser:

* स्तर 1 — `गुब्बारा→गुब्बारे`, `टोपी→टोपियाँ`, `केला→केले`
* स्तर 2 — `घोड़ा→घोड़े`, `सहेली→सहेलियाँ`, `मछली→मछलियाँ`

Three cards on each, `.mpc-complete` count 0 on both, and the string *एक से अनेक* no longer appears
anywhere in the built page. All six card icons still resolve to their real PNGs. All 18 slides mount
with zero JS errors.

---

## Round 50 — the "शब्द चुनिए" label is gone from the drag game's word bank

**Report:** remove the *शब्द चुनिए* line that sits above the two word tiles in the fill-in-the-blanks
game.

The label was a single `<div class="fvd-bank-lbl">` in the bank's markup, built once per level, so
removing it covers स्तर 1, 2 and 3 together. Its own CSS rule went with it, along with the entry in
the text-shadow selector list and the Round 37 comment that existed only to explain its colour —
leaving those behind would have been dead rules of exactly the kind that caused the stale-CSS
problems in earlier rounds.

**Nothing else on the screen moved.** The label occupied 25px (17px of text plus an 8px margin), so
the bank's `padding-top` went from 10px to 35px to absorb it. Measured before and after: the tiles'
top edge sits at 604px and 602px, and the bank keeps the same height in the layout, so the sentence
cards above it are untouched.

The similar-sounding *"सही शब्द चुनिए।"* on the Q1–Q6 screens is a different game's on-screen
instruction and is deliberately left alone — this report was about the drag game's bank label.

**Verified** in the browser: zero `.fvd-bank-lbl` elements anywhere in the built page, the drag
game's own text no longer contains *शब्द चुनिए*, and a screenshot of स्तर 1 shows the two tiles in
their previous position with the label gone. All 18 slides mount with zero JS errors.

---

## Round 51 — the seams in the drag game's water bars

**Report:** two places marked in red — a faint vertical line near each end of every sentence bar,
looking like the bar is made of separate parts, and a horizontal line under the bars just above the
word tiles. Fix both, change nothing else.

### The vertical line at the ends of every bar

The bar was drawn with a 9-slice `border-image`: 170px of the supplied 1920x330 artwork taken from
each side and drawn 50px wide as the caps, with only the middle stretched — done that way in Round
38 so the rounded ends would not squash flat.

It was not the artwork. Measured directly on the source PNG, the columns either side of both slice
lines differ by about one unit out of 255, and there is no dark feature anywhere near them. The line
came from how a border-image is painted: the browser draws the three pieces as three separate
rectangles, and this card lives inside a fractional transform scale (`--scale` ≈ 0.723), so the two
shared edges land mid-pixel. Each piece antialiases its own edge, neither covers the boundary fully,
and the darker sea behind the card shows through the gap as a hairline.

The fix removes the joins rather than trying to hide them. The same slicing is now done once,
offline, into a single `assets/UI/ui_panel_water_bar.png` at 2160x208 — twice the card's 1080x104,
with the caps given 100px each and only the middle stretched, exactly the proportions the
border-image produced. The resampling reads across the joins from the full source image, so the
columns on either side are interpolated from the same neighbourhood; measured in the output, the
step across the left join is 1.21 of 255, the right join 0.31, against 0.05 at an ordinary column —
below anything the eye can pick up. The card now paints that one image with
`background-size:100% 100%`, so there is no join left to show.

The `.done` rule had to be updated with it: it used `background:none` to keep the correct-answer
green off the panel (Round 19), and that shorthand would have cleared the new image too. It now
names the same bar explicitly, so a completed sentence keeps its panel and its background colour
stays transparent.

Side effect worth noting: the baked bar is **348 KB against the 476 KB** original, and the original
`ui_panel_water.png` is no longer referenced by the lesson — it is kept as the supplied source art
the baked file is made from.

### The horizontal line above the tiles

That was `.fvd-bank`'s own `border-top`, a 2px rule the ocean theme tinted to
`rgba(50,151,190,.28)`. Both the border and the theme's colour override are gone. Its 2px went into
the bank's `padding-top` (35px to 37px), so the tiles did not move: the gap between the bank's top
edge and the tiles measures 26px before and 27px after.

**Verified** in the browser: the card's background is the new bar on both the normal and the
`.done` state, `.fvd-bank` reports a 0px top border, and a screenshot of स्तर 1 shows both bars
unbroken end to end with no rule above the tiles. All 18 slides mount with zero JS errors. Nothing
else on the screen was touched.

---

## Round 52 — the landing picture now fills the whole card

**Report:** arrows drawn on the flat bars down each side of the first screen. Extend the picture so
it fills the white boundary. Only Meera and the bubbles are animated there; the water, seaweed,
stones and coral behind her are one still image, so it can simply be carried outwards.

The card is 1114x456 (2.44:1) and the title clip is 1920x1080 (16:9). The clip is drawn
`object-fit:contain`, so it rendered 810x456 in the middle and left **152px of flat #2EAED7 down
each side** — painted twice over, once by `.sg-bg-video`'s own background and once by
`.sg-card.has-title-video`.

The observation about the clip is right, and it is what makes the fix possible. Measured across the
ten seconds, the clip's side strips differ from each other by about **2 of 255** — codec noise —
while the middle differs by up to 25 on average as Meera swims. So the seabed at the edges is a
still picture and can be continued.

**What was built.** `assets/UI/start_card_sea.webp`, 2228x912 (twice the card), 153 KB:

* a **per-pixel median of six frames** spread across the clip, which drops the drifting bubbles
  without softening the scene the way an average would;
* each bar is a **mirror of the picture's own outer edge**, which makes the join exact by
  construction — the backdrop column touching the picture *is* the picture's edge column;
* over the outer part of each bar the mirrored rocks and weed **fade into deeper water**, so the
  extra width reads as more sea rather than as a repeat.

The clip still plays contained, at exactly the size and position it had, now sitting on top of its
own continuation instead of a teal bar. `.sg-bg-video` no longer paints a background colour and
`.sg-card.has-title-video` carries the backdrop, so the colour #2EAED7 is gone from the lesson.

**Verified.** The join cannot show while the clip plays: compared against frames at seven points
across the ten seconds, the clip's four edge columns differ from the backdrop by **0.72–1.85 of 255
on average, 17 at the single worst pixel**. A screenshot of the landing screen shows the sand, the
light rays and the rocks running unbroken from one white edge to the other, with the mascot now
standing on the seabed rather than on a flat panel. The backdrop loads at its full 2228x912, and
all 18 slides mount with zero JS errors.

---

## Round 53 — Swiftie is smaller in the swim transition  *(reverted — see Round 54)*

**Report:** in the Swiftie-swimming transition between the bubble game and the drag game, Swiftie
looks a bit big on screen. Make her smaller.

The transition overlay is sized to the outgoing activity card — 1297x532, a ratio of 2.44 — and the
clip is 1920x1080, drawn `object-fit:cover`. Cover scales it by 1297/1920 = 0.676 and crops the top
and bottom, so Swiftie came out about 635px wide on a 1297px card: roughly half the width.

**Why the fix is in the clip and not the CSS.** Shrinking her through CSS means shrinking the whole
frame, which would either letterbox the transition or change the box it covers. Instead the clip
itself was rebuilt: `assets/Video/swiftie_swimming_v3.mp4` is the supplied v2 with the picture
scaled to **82% inside the same 1920x1080 frame**, and the 174px margin that opens down each side
(98px top and bottom) filled from the frame's own edge pixels. The clip's background is a smooth
blue gradient with light rays, so carrying the edge outwards is seamless — a mirror fill was tried
first and showed its duplicated bubbles, so the smear was kept.

Because the frame size is unchanged, the cover geometry is untouched: the overlay still covers the
card exactly and only Swiftie is smaller, about **521px instead of 635px** on the same card, an 18%
reduction. The top and bottom fills fall entirely inside the region cover already crops away, so
they are never on screen.

The new clip is 2.5 MB against v2's 6.2 MB, keeps the original audio stream untouched, and runs the
same 4.9 seconds, so none of the transition's timing changes.

**Verified** in the browser: the overlay loads v3 (readyState 4, no media error, 1920x1080) and its
box measures 1245x511 against the card's 1245x511 — identical, so nothing about the framing moved.
A before/after render of exactly the region the overlay shows confirms the smaller Swiftie with the
background still filling edge to edge. All 18 slides mount with zero JS errors.

*If this is more or less than wanted, the one number to change is the 82% in the rebuild.*

---

## Round 54 — the swim transition is back to how it was

**Report:** leave the swimming transition as it was.

Round 53's change is undone. The overlay points at `assets/Video/swiftie_swimming_v2.mp4` again —
the supplied clip, untouched — and the rebuilt `swiftie_swimming_v3.mp4` has been deleted rather
than left on disk as an unused 2.5 MB file. Nothing else was involved: Round 53 only swapped the
`src` and added a comment beside it, so there is no CSS or layout to put back.

**Verified** in the browser: the transition loads v2 (readyState 4, no media error, 1920x1080), and
all 18 slides mount with zero JS errors.

---

## Round 55 — the drag game drops to two levels, and the sentence order is shuffled

**Report, two parts:**

1. Remove स्तर 2 from the fill-in-the-blanks game completely. Keep only स्तर 1 and स्तर 3, and
   rename स्तर 3 to स्तर 2.
2. The एक sentence is always on top and the अनेक sentence always below, every time, so a child can
   learn "एक goes up, अनेक goes down" and fill both blanks without reading either sentence.
   Randomise it — sometimes on top, sometimes below — so the child has to read.

### 1. Two levels

The game reads the lesson data embedded in the HTML (`#cardData`), and `card.json` is the
manifest copy beside it; both were edited together and confirmed identical for the drag game
afterwards. The embedded JSON was only rewritten after a plain parse-and-reserialise was checked to
reproduce it byte-for-byte, so the level edit is the only difference in the file.

| | before | after |
|---|---|---|
| स्तर 1 | g1 गुब्बारा, m1 मछली, l1 लड़का — cue words एक / बहुत सारे | unchanged |
| स्तर 2 | k2 लड़की, h2 घोड़ा, s2 सहेली — verb agreement only | **removed** |
| स्तर 3 → **स्तर 2** | b3 केला, t3 टोपी, p3 पौधा — word in a new position | renamed |

Level 1's `outro` field went too. Nothing has rendered it since Round 33, and its text ("the next
level has no एक / बहुत सारे — read the verb") described the level that was just removed.

The flow is now: स्तर 1 → the supplied *स्तर 1 पूरा हुआ* panel → स्तर 2 → the *सभी वाक्य पूरे हुए!*
summary, now listing six pairs instead of nine. The new स्तर 2 ends exactly the way the old स्तर 3
did. The comments in the module, the retry-allowance note and the VO script's header ("two स्तर
inside one screen") were updated to match; the VO line list itself is unchanged, because the drag
game speaks from `ocean-vo-config.js` rather than from `card.json`.

### 2. The sentence order

**Cause.** The sentence `q.a` (the एक one) was always rendered into the top slot and `q.b` into the
bottom, and the एक word was always aimed at slot 0. The tiles in the bank were already shuffled —
only the sentences were fixed.

**Fix.** Each mount draws, per level, whether the एक sentence goes on top for each question:

* random per question, **but never the same for a whole level** — a level of three always has at
  least one question each way, so neither "एक on top" nor a strict alternation can stand in for
  reading;
* each word is then aimed at whichever slot its sentence landed in. The drop check, the hint ghost
  and the green on the placed word all work from that slot, so they follow the sentence wherever
  it was put without any other change;
* the draw is kept local to the mount instead of being written into the lesson data, so going back
  and returning deals a fresh order.

Telemetry: `blank` in the `gender_pair_match` event now means a position rather than a form, so
the event also carries `form` (one / many) and `one_on_top`, and analytics will not misread it.

### Verified

* **A full playthrough with real drags** (pointer events, hit-tested against the actual drop zones):
  labels run स्तर 1 · 1/3 → 3/3, then स्तर 2 · 1/3 → 3/3; the questions are g1, m1, l1, then b3, t3,
  p3, and none of k2 / h2 / s2 ever appears. In that run the एक sentence was on top for
  `[no, yes, no]` in स्तर 1 and `[yes, no, yes]` in स्तर 2. In every one of the six questions the
  एक word landed in the एक sentence and both blanks filled; a deliberately wrong drop was refused and
  the tile stayed available; the स्तर 1 artwork panel appeared between the levels; the game ended on
  *सभी वाक्य पूरे हुए!* with the six pairs; and the panel never took the green (Round 19 holds).
* **Over 40 fresh mounts**, the first question put the एक sentence on top 22 times and below 18, and
  the एक tile was aimed at the एक sentence every time.
* **Over 100,000 simulated levels** of the same rule: no level had all three questions the same
  way, each of the six mixed patterns came up about a sixth of the time, and the एक sentence was on
  top 50.1% of the time.
* All 18 slides mount with zero JS errors.

---

## Round 56 — the drag game's instruction VO opens every level

**Report:** in the fill-in-the-blanks game the instruction VO must play at the start of each level —
स्तर 1 and स्तर 2 both — but not on the questions inside a level. The instruction **text** stays on
screen for the whole game: removing the VO from the later questions does not mean removing the
text.

**What it was doing.** Everything was gated on the first level. The instruction VO played only at
स्तर 1 question 1, so स्तर 2 began in silence. Worse, the text was gated the same way —
`promptText` was set to the instruction on स्तर 1 and to an empty string on स्तर 2 — so the
instruction disappeared from the screen for the whole second level. The speaker chip and the idle
reminder were also switched off for स्तर 2.

**Now:**

| | the instruction VO | the instruction text |
|---|---|---|
| a level's first question (स्तर 1 · 1/3, स्तर 2 · 1/3) | plays as the level opens | on screen |
| every other question | does not play | on screen |

* **The speaker chip** replays the instruction on every question in both levels. It is what the
  child chooses to hear, not an automatic VO, and the text it reads is always on screen.
* **The idle reminder** — a judgement call worth stating: after 7s of no activity it used to
  re-speak the instruction on every स्तर 1 question and never on स्तर 2. It now re-speaks it only on
  a level's first question, the one place the instruction VO belongs; on the other questions it
  skips the voice and goes straight to its visual hint, as the rule above asks.
* **The demonstration ghost** stays on स्तर 1 only. It repeats until the child's first real drop and
  is cleared by that drop. By स्तर 2 the child has already dropped, so a ghost started there could
  never be cleared by one and would loop over the board for the whole question — it is
  deliberately not started again.

The shared `oceanIdle` helper's comment said later levels skip "both the repeated instruction text
and its VO"; it now describes what the helper actually does (no voice when the caller has none to
repeat, the visual assist kept).

**Verified** by playing both levels through with real drags while logging every instruction clip:

```
स्तर 1 · 1/3 → ocean_instruction_fill.mp3
स्तर 2 · 1/3 → ocean_instruction_fill.mp3
```

— exactly two, one per level, none on the other four questions. The instruction text read
*सही शब्द खींचकर खाली जगह में रखिए।* on all six questions, and the speaker chip was live on all six.
Sitting idle for 9 seconds on स्तर 1 · 2/3 produced no instruction VO. No ghost was running when
स्तर 2 opened, and the game finished on its summary. All 18 slides mount with zero JS errors.

---

## Round 57 — on the last screen, “शाबाश!” is spoken when Swiftie talks, not while she jumps

**Report:** on the final screen the शाबाश VO plays while Swiftie is jumping. She should jump first,
and the voice should come with her mouth movement after that.

**What the animation actually does.** The end mascot is `assets/UI/swiftee_end_page.gif`: 36 frames
at 90ms each, 3.24s in all. Laid out frame by frame (and checked against her height in each frame):

| frames | time | what Swiftie does |
|---|---|---|
| 0–9 | 0–0.81s | the jump: arms up, eyes squeezed shut, beak open in a cheer; highest at frame 4, lands at 9 |
| 10–17 | 0.9–1.6s | stands still, beak shut |
| 18–35 | 1.62–3.24s | waves and gestures, beak opening and closing: **the talking** |

**Cause.** The timer started the praise **90ms** after the GIF began, on the assumption written in
its comment that frame 1's open beak was speech. Frame 1 is the start of the jump. So the voice
played right over the jump and was finished before the talking frames even began.

**Fix.** The praise now starts on **frame 18 (1620ms)**, from the GIF's own load event so it is
counted from the frame the child actually sees first. The clip is 1.48s, so it ends at about 3.1s:
inside the talking frames and before the 3.24s swap to the still pose. The frame length and the
talking frame are named constants beside the comment that explains them, so retiming against a
replacement GIF is a one-number change. The timer also checks the end screen is still showing, so a
child who leaves early cannot hear it on the next screen.

Two fallback paths were adjusted so they cannot undo the sync:

* The **slow-load fallback** used to fire at 1.5s and start the 1.62s countdown itself. The GIF is
  1.7 MB and is refetched each time to restart it, so on a slow connection it could start jumping
  after the voice was already counting down. The fallback now waits 4s, giving a slow load the
  chance to sync through its load event, and if it ever does fire it speaks at once.
* If the GIF **fails** to load, or the mascot is not a GIF, there is no animation to sync to, so the
  praise plays straight away instead of waiting for a frame 18 that will never come.

**Verified** in the browser, timed from the GIF's load event:

```
   28 ms  GIF loaded and shown — the jump begins
 1650 ms  “शाबाश” starts       (1622 ms into the GIF = frame 18)
 3270 ms  still pose swapped in, after the clip has ended
```

A second run gave 1636ms from the GIF start to the voice and 3189ms to its end, which is frame 35.
All 18 slides mount with zero JS errors.

*Noticed while testing, not changed:* jumping straight to the end screen within about 1.5s of
pressing play on the start screen let the opening "ध्यान से देखिए…" phase VO play over it about 4s
later. It never happened when the opening flow had finished first, so it only matters when the
temporary QA next/previous buttons are used to skip ahead in the first few seconds.

---

## Round 58 — review against the HTML self-review checklist (no code changed)

**Request:** review the lesson against `HTML_Self Review Checklist.xlsx` (47 items across Title,
General, Teaching, Guided Practice, Independent Practice and End Screen), using the standard asset
pack `Common Animations and SFX` as the reference. Nothing in the lesson was changed this round.

**How it was checked.** Assets were compared to the standard pack directly: byte comparison for
images and SVGs, decoded-waveform correlation for every SFX (a full-length metric, so a short click
cannot match the opening of a longer sound by accident), and a sliding search of both standard music
tracks for the two video soundtracks. Behaviour was measured in the running game: element positions,
running animations, button states during VO, and audio/DOM timelines after Play and at each gate.

**Result: 19 pass · 7 partial · 18 fail · 2 not applicable · 1 not verifiable.**

| | Item | Status | Evidence |
|---|---|---|---|
| **Title** | Standard Play button | Pass | `btn-play-round.svg` is byte-identical to the standard |
| | Play in the centre | Partial | horizontally exact; 131px below the card's vertical centre |
| | Play clearly visible | Pass | yellow, dark triangle, white ring on pale sand |
| | Play pulsates | **Fail** | `animation:none`, switched off by an earlier ruling (Yasir 2026-07-30) |
| | Nothing else moves | **Fail** | title video (Meera swimming) loops, mascot plays a 3.24s animation |
| | Standard Play SFX | Pass | waveform match 1.00, fires 2ms after the tap |
| | Play triggers the intro VO | **Fail** | intro plays *before* Play (first tap anywhere / speaker); Play skips it |
| | Disabled Play, then auto-transition | **Fail** | order inverted: disabled image shows during the pre-Play intro |
| | Intro ≤ 10–12s | Pass | `vo_landing` 8.12s |
| | Swiftee left, speaker at bottom | Pass | placement right, speaker = standard; no title Swiftee in the pack to compare |
| | Speaker disabled during VO | **Fail** | stays fully active; tapping restarts the intro |
| **General** | One standard music track | **Fail** | neither track used (best match 0.04) |
| | Music starts after Play | **Fail** | title soundtrack plays before Play and stops on it; teaching and Q1–Q6 silent |
| | Inactivity nudges exist | Pass | Q1–Q6 and both games; none on teaching screens |
| | Nudges at 7s | Pass | 7s in Q1–Q6 and both games |
| | Standard hand nudge | Pass | the only hand is `nudge_hand_new.svg`, byte-identical |
| **Teaching** | Standard transition after title | Pass | `peeking.webp` byte-identical to the standard, shown 11ms after Play |
| | Text only when Swiftee says it | **Fail** | text at 11ms, VO at 5.7s; wording "चलिए, शुरू करें!" not "…करते हैं" |
| | Standard Next (enabled) | Pass | byte-identical |
| | Disabled Next until VO + CTA done | **Fail** | hidden instead — Round 23's instruction |
| | Next pulsates when ready | **Fail** | only a fade-in |
| **Guided** | Standard transition into guided | **Fail** | no guided section: no slide is tagged guided, `vo_pt_guided` does not exist |
| | Text only when Swiftee says it | **Fail** | the gate never shows |
| | Standard Next across screens | Pass | Q1–Q6 advance automatically |
| | Disabled Next / pulsing Next | N/A ×2 | automatic advance |
| | Standard correct SFX | Pass | match 1.00 |
| | Standard incorrect SFX | Pass | match 1.00 (played at 0.28 volume) |
| | Standard confetti animation | Not verifiable | the pack contains no confetti animation |
| | Standard confetti SFX | Pass | `sfx_celebrate.ogg` match 1.00 |
| | Wiggle, never red | Partial | Q1–Q6 wiggle only; both games tint a wrong answer red-pink (`ocean-wrong`) |
| | Support from the 1st wrong | **Fail** | 1st wrong: wiggle and soft SFX only |
| | 3 layers of feedback | Partial | three steps, but the first gives no support |
| | 1st wrong clarifies / refocuses | **Fail** | that happens on the 2nd wrong |
| | 2nd wrong: strong explicit hint | Partial | retry VO re-explains the word; options are not read |
| | 3rd wrong: visual cue | Pass | correct option glows, quantity pulses |
| | Lock wrong answers in layer 3 | **Fail** | wrong options stay tappable |
| | Lower → higher rigour | **Fail** | Q5 (one plural option) comes after Q4 (three plural options) |
| | Same type grouped | Partial | one mechanic, but एक→अनेक and अनेक→एक are interleaved |
| **Independent** | System-level nudges | Pass | 7s reminder, then visual ghost; one spoken retry |
| | Game / gamified | Pass | bubble pairs, levelled drag game |
| | Music matches environment | Partial | underwater ambience fits, but it is not a standard track |
| | SFX for every interaction | Partial | tile pick-up and idle nudges are silent |
| | Environment, not plain | Pass | animated sea, seaweed, coral, bubbles |
| | Minimal background | Pass | text and tiles stay readable |
| **End** | Standard end animation | **Fail** | `swiftee_end_page.gif` is byte-identical to the pack's **DO NOT USE** GIF |
| | Standard dialogue | **Fail** | says only "शाबाश!" |

**Conflicts with earlier instructions** (the code does what was asked; the checklist asks for the
opposite): the still Play button (Yasir, 2026-07-30), the hidden disabled Next (Round 23), and the
intro playing before Play (an autoplay and "no tapping during VO" ruling, 2026-07-31).

**Found outside the checklist:** the closing line `vo_well_done` reads "…टोपी-टोपियाँ,
बच्चा-बच्चे…" in both data copies and in `VO_SCRIPT.md`, but the lesson never teaches बच्चा-बच्चे —
it teaches लड़का-लड़के. `VO_SCRIPT.md`'s header says the game uses लड़का-लड़के; that statement is
wrong. The 13s recording was not listened to, so whether it says बच्चा-बच्चे is unconfirmed.

---

## Round 59 — no Play button on the title screen until the intro has finished

**Report:** while the title screen's intro VO plays, a grey Play button sits there. Remove it. The
Play button must not appear at all at the start — neither grey nor yellow — and the real yellow one
should appear only once the whole intro VO has completed, pulsing as it already does.

*Note: the HTML was edited outside these sessions on Oct 13, after Round 58. That work had already
added background music, disabled the speaker chip during VO, and added a `landing-play-ready`
state that makes Play pulse once the intro ends. This round builds on it.*

**What it was doing.** Before the intro: a still yellow Play. During the intro: `body.vo-lock`
swapped in the grey "waiting" Play. After the intro: `landing-play-ready` made it yellow and
pulsing.

**Now.** On the title screen the Play button is invisible and untappable until
`landing-play-ready` is set, then fades in over 0.35s with its existing pulse unchanged. The two
`body.vo-lock` rules that swapped in the grey image are gone. No timer was added:
`landing-play-ready` is driven by `setPlaying`, the same choke point every end-of-audio path runs
through, so a replay from the speaker chip hides Play for the length of the replay and brings it
back afterwards.

**Never stranded.** When the browser blocks autoplay, `play()` ends the attempt at once and the same
signal turns on, so Play appears rather than leaving a child with nothing to press. The first tap
anywhere other than Play still starts the real intro.

**Verified** in the browser:

| moment | Play button |
|---|---|
| intro playing from load | hidden, untappable, no grey image |
| intro finished | visible (final opacity 1), tappable, pulsing |
| speaker replay playing | hidden again |
| replay finished | back, pulsing |
| autoplay refused by the browser | appears at once, pulsing |
| first tap then plays the intro | hidden for its length, back when it ends |

Pressing Play still opens the *चलिए, शुरू करें!* transition, and all 18 slides mount with zero JS
errors. The browser pane was hidden during testing, which freezes CSS transitions, so the fade's end
state was read with transitions switched off rather than watched.

The working copy is CRLF (`core.autocrlf` is on); the patch was written in CRLF so the file's line
endings stay uniform.

---

## Round 60 — transition Swifty, gate headline and poem captions matched to the reference game

**Reference:** https://hindi-game-gender-identify.vercel.app/ (source:
github.com/Prashantkumar12345678/Hindi-game-gender-identify, `HI02H11_L03_S02/index.html`). Every
value below was taken from that file's code, not from a screenshot.

**1. Swifty on the transition screen was too small.** Ours was `clamp(190px,29vh,285px)` — 217px
tall on a 1333x750 screen. The reference draws him `min(52.8vh,624px,92vw)`, square and
bottom-anchored: 396px here. Both games use the same animation (the reference's file is a time-cut
of the standard `peeking.webp`), so matching the box matches the bird. Our own rise animation was
left as it was.

**2. The gate headline now writes itself, as in the reference.** Same 96px magenta (#CD0FD5) with a
white outline 10.4% of the letter, 271px from the top, scaled on small screens (`--pgf`, `svh`).
It still appears only when the voice reaches the words, but instead of fading in it is uncovered
left to right by the reference's `pgWipe` (clip-path, 0.9s). The reference's `_fitGateTitle` was
ported too: it measures the line against the bird's crest and lifts or shrinks it if they would
touch.

**3. The poem box is white.** `#FFF3C7` with a gold rim → white with a white 3px rim, 26px corners
and the reference's two-layer navy shadow. The verse reads at 600 (renders as the 700 face; only 700
and 800 are embedded, exactly as in the reference) so the pair words have a heavier face to go to.

**4. The words light up the reference's way.** The whole verse is on screen from the first frame;
the word being spoken turns #FF8A00 and grows to 1.10 (0.15s each way, no glow, no lift), held
max(220, min(620, gap to next − 40))ms so it reads as a moving highlight. The pair words
(गुब्बारा/गुब्बारे etc.) stay navy while the verse is read and turn orange and bold together 700ms
after the last word; a replay takes that off and earns it again.

Timing comes from the recordings, not from an even split. The reference's `_tools/poem_cues.py`
was ported to Node (`scratchpad/poem_cues.js`): silence finds the lines, and inside a line each
word's share is weighted by its aksharas. One cue per word for all 8 poem clips, stored as
`beats[].cues_ms` in **both** copies of the lesson data (embedded `#cardData`, `card.json`).
The highlight is driven from the clip's own clock against those cues. A beat with no cues, or whose
word count no longer matches, falls back to the old even walk. Words are now split on whitespace,
the same way the cue tool counts them.

**Verified** in the browser at 1333x750:
* gate: bird 396x396, centred, bottom gap 0; headline 96px, outline ~10px, magenta, top 271,
  animation `pgWipe` 0.9s, shown at 9.0s on the first gate when the VO says it; 124px clear of the
  bird's crest;
* poem T1: box white / 3px white rim / 26px / shadow / weight 600; all 19 words visible from the
  start; the lit word matched its cue at every sample (e.g. "गुब्बारा" at 5.99s, cue 5.63s); the pair
  stayed navy 600 while reading and became #FF8A00, 800, 0.5px stroke at 8.99s (last cue + 700ms);
  other words stayed navy;
* all 18 slides mount with zero JS errors; both files keep uniform CRLF endings.

The pane was hidden during testing, so motion (the bird's rise, the wipe, the 1.10 grow) was
checked by state and computed style rather than watched, and timer-driven samples ran about 1s
apart.

---

## Round 61 — poem pair words orange from the start

**Asked:** गुब्बारा/गुब्बारे (and every pair word in the poem) should be orange from the first frame, not only after the voice finishes; the moving word highlight stays as it is.

One CSS rule: `.story-caption .hl-orange` is now always #FF8A00, weight 800, 0.5px stroke (the look Round 60 gave it only at the end). The spoken-word highlight (orange, 1.10×) is untouched. Checked across the game: the only other pair highlights (comparison screens) already use `.hl-orange` in orange from the start, so the poem was the one place that waited. Verified on T4: the pair word is #FF8A00 as the stanza opens; all 18 slides mount with no errors.

---

## Round 62 — more space between the poem's words

**Asked:** increase the spacing between words in the poem texts for readability.

`.story-caption{word-spacing:0.2em}` — the reference game's value, 5.6px extra per gap at this size (about one more space). It sits on the caption, not in the text, so the measured word cues and the per-word highlight are unaffected. Checked every stanza of T1–T4 at 1333x750: each poem line still fits on one row and the box stays inside the card; all 18 slides mount with no errors.

---

## Round 63 — no glow while reading; topi line trimmed

**1. No glow on highlighted words (asked, globally).** The two glow keyframes in use lost their halo: `wordGlow` (the changed ending on the comparison screens, e.g. टो**पी**) was a 22px orange text-shadow and is now a subtle 1.06 scale pulse, same four beats; `fvdGlow` (the hint on the drag game's tile and blank) keeps its 1.06 pulse without the 22px yellow box-shadow. The poem's spoken-word highlight already had no glow (Round 60). Verified: neither keyframe contains a shadow any more.

**2. Topi–Topiyan VO (C3).** `vo_cmp_topi_2` was "तो हमने देखा कि एक है तो, टोपी; और अनेक है तो, टोपियाँ।"; the screen now plays the poem line (`vo_cmp_topi_1`, unchanged) followed directly by "एक है तो टोपी, अनेक है तो टोपियाँ।". The recording was trimmed rather than re-recorded: its opening phrase (0.29–1.46s) is followed by a clean 0.34s pause, so the clip now starts at 1.56s with a 40ms fade (6.60s → 5.04s, same vorbis 24kHz mono). Original kept in the scratchpad as `vo_cmp_topi_2.orig.ogg`. Text updated in both data copies and VO_SCRIPT.md. Verified on C3: poem line 0–4.5s, then the trimmed line; टोपी lights at +1.44s and टोपियाँ at +4.07s into it; all 18 slides mount with no errors.

**Not cut:** the short "और" before अनेक is probably still in the recording (a 0.14s sound at ~2.65s of the trimmed clip). Its boundaries could not be confirmed without listening, so it was left in rather than risk clipping अनेक.

---

## Round 64 — topi line: the old clip could still be heard (cache)

**Report:** "तो हमने देखा" was still heard on the Topi–Topiyan screen after Round 63.

The file on disk was already trimmed: correlating the removed opening phrase against it scores 0.15 (absent), while the control word टोपी scores 1.00 (present). What was heard was the browser's cached copy of the old clip — same filename, and the server sends no cache headers. Fixed so no cache can serve it: the trimmed clip is now `vo_cmp_topi_2b.ogg`, and C3's audio, the asset map and the VO text use the new id in both data copies and VO_SCRIPT.md. The new file serves (200, 36,787 bytes); the old name now 404s.

---

## Round 65 — "तो हमने देखा कि" removed from every comparison screen

**Asked:** the phrase must not appear on any poem/comparison screen — गुब्बारा, लड़का, टोपी, सहेली alike (Round 63–64 had done टोपी only).

The other three explain clips were trimmed the same way: each opens with the phrase (~1.1–1.2s) and then a pause, and the clip now starts inside that pause with a 40ms fade — गुब्बारा at 1.60s (5.80→4.20s), लड़का at 1.49s (4.56→3.07s), सहेली at 1.47s (6.16→4.69s). Each was renamed `vo_cmp_<word>_2b.ogg` so no cached old copy can play, and every reference plus the VO text ("एक है तो X, अनेक है तो Y।") was updated in both data copies and VO_SCRIPT.md. Originals kept in the scratchpad as `*.orig.ogg`.

**Verified:** for each clip the removed phrase correlates 0.14–0.17 against the new file (absent) while the first kept word scores 0.99–1.00 (intact), with 0.09–0.13s of silence before speech so nothing is clipped; "हमने देखा" now appears 0 times in either data copy or the VO script; C1–C4 point at the four new clips, all served, and all 18 slides mount with no errors.

**Still possibly in the recordings:** the short "और" before अनेक in all four clips (not cut — boundary not confirmable without listening).

---

## Round 66 — सही-शब्द-चुनिए: question and answers made visually distinct (Q1–Q6)

**Asked:** remove the एक/अनेक labels, move the content up, and give the main question a clear hierarchy over the answer options (colour, size, spacing) — on every सही-शब्द-चुनिए question.

All six questions are one module (PICK_VACHAN_WORD), so one change covers Q1–Q6:
* the two `.pvw-pill` labels are removed from the markup;
* the screen now starts from the top (`justify-content:flex-start`) instead of floating mid-card;
* the question — source word, both quantity pictures and the box to fill — sits together in one pale-blue panel (#E4F2FF, 34px corners);
* the given word is a solid navy card with 62px white type: still spoken when tapped, but it no longer looks like the buttons below;
* 56px gap, then the answers: white buttons with a pressed-in blue shadow, the only things that look tappable.

**Verified** at 1333x750 on Q1–Q6: no labels, panel starts at 180px, 55px gap to the options, everything fits inside the slide (options end at 559 of 662); tapping the correct answer still fills the box; all 18 slides mount with no errors. The revised VO for this section is still to come from the team.

---

## Round 67 — leftover options disappear after the right answer

**Asked (globally):** once the correct answer is given, the remaining options vanish completely instead of staying faded.

`.pvw-opt.gone` went from 28% opacity to fully hidden: a 0.35s fade-out, then `visibility:hidden`, untappable, with its space kept so nothing jumps. Checked the rest of the game for the same pattern: the drag game already hides a used tile completely, and the bubble game's matched bubbles fly away; the bubble `.faded` state is used only during a guided rescue, not after an answer, so it was left alone. Verified on Q1–Q6: after the correct tap both other options end hidden, opacity 0, not tappable; no JS errors.

---

## Round 68 — सही-शब्द-चुनिए: white question box, sky-blue-tinted options

**Asked:** the given word (e.g. लड़की / मछली) is not on a dark-blue fill — it sits in a white box with dark-blue text; the options get a very light, subtle sky-blue tint so there is a slight difference.

`.pvw-src` (Round 66 navy fill, white text) → white background, 4px #8FC7F5 border, navy text, still 62px and still inside the pale-blue question panel. `.pvw-opt` → background #EAF6FF (a light sky-blue tint), navy text and its blue under-shadow unchanged. Applies to Q1–Q6. Verified by computed style: question white / navy text, options rgb(234,246,255) / navy text; no JS errors.

---

## Round 69 — options moved a little lower

**Asked:** move the options slightly down. The gap between the question panel and the options on Q1–Q6 went from 56px to 80px (options end at ~583 of the 662px slide area, still inside).

---

## Round 70 — one continuous bubble game, with "अब आपकी बारी!" before it

**Asked:** add the "अब आपकी बारी" transition before the bubble game; run the game on a single screen instead of two, with all word pairs in one continuous sequence — as pairs are popped, new bubbles keep appearing to replace them; keep the bubble design and popping.

**One screen.** PAIR2 is gone; its three pairs moved into PAIR1, which now holds all six (गुब्बारा, टोपी, केला, घोड़ा, सहेली, मछली) — in both data copies. The lesson is 17 slides now (`T1 C1 T2 C2 T3 C3 T4 C4 Q1–Q6 PAIR1 FILL CEL`).

**Continuous refill.** `visible_pairs: 3` keeps three pairs (six bubbles) on the field; the rest wait in a queue. Each time a pair pops, the next pair floats in (`spawnPair`): both halves at the roomiest free spots measured from every bubble's live drift position, the two halves at least two bubbles apart so a pair never arrives side by side, two different hues, the same size and word fitting as the opening field, a 0.6s grow-in, and then they join the same drift/collision loop. When the queue is empty the field simply runs down. The intro pulse, the wrong-answer ladder, the guided rescue, the pop and burst are unchanged. The result screen now assembles all six cards, its completion line and hand-off timed from the last card (same 3.6s / 5.9s as before), then the swim transition to the drag game as before.

**The gate.** A slide can now carry `data.gate_before`; PAIR1 has `"practice"`, so "अब आपकी बारी!" with `vo_pt_practice` plays once right before the bubble game (round gates alone never fired there, because the game continues round 3).

**Verified** at 1333x750: Q6 → gate "अब आपकी बारी!" (VO at 5.7s) → bubble game with 6 bubbles; matching all six pairs kept 6 on the field for the first three matches (घोड़ा, सहेली, मछली floated in) then ran down 4 → 2 → 0; each new pair 178px like the originals, inside the field, halves 407–902px apart, distinct colours; the result showed 6 cards and fits; the game then handed over to FILL through the swim transition; all 17 slides mount with no errors. VO_SCRIPT.md regenerated.

**Note:** "अब आपकी बारी!" also still plays before Q1 (the round-3 gate), so a child now sees it twice — before Q1–Q6 and again before the bubbles. Q1–Q6 work like guided practice; giving them "चलिए, साथ में करें!" instead would need a `vo_pt_guided` recording.

---

## Round 71 — पौधा added; घोड़ा and पौधा text-only, last

**Asked:** add पौधा–पौधे to the bubble game; keep pictures for every pair except घोड़ा–घोड़े and पौधा–पौधे, which show only the word, centred; put those two at the end so the game gets harder gradually; keep pictures for सहेली–सहेलियाँ.

* Pair order (both data copies): गुब्बारा, टोपी, केला (on the field at the start) → सहेली, मछली → घोड़ा, पौधा. पौधा uses `obj_paudha_s` / 🌱 and the existing `vo_w_paudha_s/p` clips.
* `text_only: true` on घोड़ा and पौधा: their bubbles get no picture, only the word, centred both ways, and the word may grow to 21% of the bubble (from 16.5%) since the picture's room is free. All other pairs, सहेली included, keep their pictures. The result cards at the end still show each pair's picture.

**Verified** by playing all 7 pairs: the field opens with गुब्बारा, टोपी, केला; refills arrive in the order सहेली, मछली, घोड़ा, पौधा; a text-only bubble shows only "घोड़ा" at 37px, exactly centred (0px off both ways) and inside the bubble; the result screen holds all 7 cards inside the stage; all 17 slides mount with no errors. VO_SCRIPT.md regenerated.

---

## Round 72 — the opening bubble pair glows blue instead of pulsing

**Asked:** the bubbles already drift, so the गुब्बारा pair's opening pulse is hard for a child to see; make the pair glow — a good bluish glow — for 4–5 seconds.

`.mtp-bubble.intro-pulse` now runs `mtpIntroGlow`: a blue ring plus a wide blue halo (box-shadow) that breathes in and out three times over 1.5s each — 4.5s — with no scale change; the class is removed at 4.5s (was 2s). It runs while the 9s instruction VO plays, so it ends well inside it. (This is an explicit request for a glow on a game element; the Round 63 no-glow rule was about highlighted words during reading.) Verified: on mount गुब्बारा and गुब्बारे carry `mtpIntroGlow`, 1.5s × 3, and the glow ended at ~4.5s; no errors.

---

## Round 73 — stronger, longer opening glow

**Asked:** more glow, 6 seconds. The गुब्बारा pair's blue halo is stronger at rest (6px ring, 30px halo) and at its peak (10px solid ring, 70px halo), and breathes 4 × 1.5s = 6s (was 4.5s); the class is removed at 6s. Still inside the 9s instruction VO.

---

## Round 74 — the "सभी जोड़ियाँ" result screen removed

**Asked:** remove the screen that shows every pair card after the bubble game, completely. `finish()` no longer switches the stage to the `fin` / `result-story` card board. When the last pair pops the game stays on its own screen: confetti at 0.3s, the completion line "तुमने कर दिखाया!" at 0.9s, and 0.9s after that line ends the swim transition into the drag game. The heading still reads "सभी जोड़ियाँ पूरी हुईं!" and the side tray keeps its pair cards as during play.

---

## Round 75 — the bubble game's pair list restyled

**Asked:** the pairs listed on the right of the bubble game looked small and basic. Words 19px → 24px (#0B3D8C, weight 800); the "जोड़ियाँ" heading 16px grey → 22px navy; each card now has a white-to-aqua gradient, a 2px sky border, 16px corners and a lifted shadow; the arrow between the two words is orange. Checked with the tray filled: no word overflows its card or the 220px tray, and all seven pairs fit (six end at 585px of the tray's 698px).

---

## Round 76 — a chime when a pair lands in the जोड़ियाँ list

**Asked:** when a matched pair appears in the list on the right of the bubble game, there should be a sound effect. New `sfxCardLand`: two quick rising bell notes (A5, then E6 90ms later), each with a soft octave partial and a 0.42s decay — softer than the pop before it, same mute rule as the other sounds. It plays on the frame the card appears (`addPairCard`). Verified: after a match the card appeared at ~0.89s and the chime started on the same frame; no errors.

---

## Round 77 — the last game is now Swiftie's submarine

**Asked:** replace the fill-in-the-blanks game with a new game built from two supplied videos. Same
sea as the bubble game. After the swim transition the submarine comes in from the right and stops in
the middle, and stays still there. Its five portholes carry the sentence — e.g. पापा | बहुत | सारे |
(empty) | लाए — with the two answers (गुब्बारा / गुब्बारे) below. Same levels as the fill game; only
the mechanic changes. A correct answer replaces the windows' contents in place with the next
sentence — every question on one screen. When all are done the submarine leaves to the left. On 7s
of inactivity Swiftie waves (cut from the video).

### Getting the submarine out of the videos

The two videos have their own, different sea baked in (A: reef and sand; B: open blue water), and
neither matches the bubble game's sea — so the videos could not simply be played full-screen. The
submarine had to be lifted off its background:

* the supplied white-background still did not match the video's submarine (the video redraws it —
  fatter hull, different window spacing), so it could not be used as a matte;
* video A's parked submarine was matted from its own frames: flood the sea in from the frame edges,
  stopping at the warm hull/fins and the dark outline; keep the largest piece; break thin bridges.
  Coral and weed that touched the hull were removed by tightening the colour rules (pale coral and
  sand are not "hull"), by using the first frame — when the submarine is still off to the right — as a
  clean background plate on the left half, and by keeping the plain pass only inside an ellipse
  around the cockpit dome, whose glass is the same blue as the sea;
* video B could not be used: its dome is open at the front, so the sea floods in.

Results (`scratchpad/sub/*.js`):
* `assets/UI/sub_hold.webp` — the parked submarine, transparent, Swiftie's hands on the wheel
  (t = 6.0s), 1400×662, 108 KB;
* `assets/UI/sub_wave_sheet.webp` — the cockpit while Swiftie waves (video A 3.0s→6.0s at 15fps,
  46 frames, 551 KB). The submarine drifts a few pixels while she waves, so every frame was shifted
  to sit exactly on the still's dome (measured on the dome's ring) and feathered just inside the dome,
  so the overlay has no seam; it starts and ends on the parked pose;
* the five porthole glasses were located on the still (diameters 11.9% → 9.8% of its width — they
  shrink towards the tail) and stored in the slide data.

### The game (`SUBMARINE_FILL`, slide `SUB`)

* The submarine glides in from the right (2.8s, easing to a stop, a bubble trail from the propeller),
  parks centred in the field, waves once, and then stays still.
* Each sentence is split into exactly five window chunks — two-word chunks such as "बहुत सारे" or
  "खेल रहे" wrap inside the glass and the type shrinks only as far as it must (31px → 15px floor). All
  twelve chunkings were checked by the patch script to re-join into the original sentences.
* The empty window is a dashed white ring that breathes gently; the answers are dragged into it, or
  tapped. A correct word settles in green (only the word), with a chime and a ring; the sentence stays
  up to be read (≥ 2.4s, longer for longer sentences), then the next sentence pops into the same
  windows, left to right.
* Levels as before: स्तर 1 (गुब्बारा, मछली, लड़का) and स्तर 2 (केला, टोपी, पौधा), each pair giving its
  एक sentence and its अनेक sentence — twelve questions. Which of the pair comes first, and which side
  the right answer sits on, are random per question but never the same for a whole level.
* Instruction VO at the start of each level (the text stays up throughout). Wrong answers: the tile
  wiggles with the soft wrong sound (never red), one spoken retry per game; a second miss on the same
  sentence makes its words pulse (read it again); a third makes the right word glow — the child still
  places it.
* 7s of quiet: Swiftie waves; on a level's first question the instruction is repeated too; from the
  second reminder the empty window pulses as well.
* स्तर 1 ends with its supplied "स्तर 1 पूरा हुआ" panel (stars landing one by one, confetti, praise).
  After the last sentence the submarine leaves to the left with its bubble trail; then the
  "स्तर 2 पूरा हुआ" panel (the supplied art that had been unused since Round 55) and the lesson's
  closing line, then the end screen.
* The swim transition from the bubble game now leads into this slide; it is excluded from the
  engine's generic idle VO like the other ocean games; both data copies were updated (17 slides).

---

## Round 77 (follow-up) — review fixes on the submarine game

The submarine game was reworked in another session after Round 77 (one continuous sentence window
along the hull instead of five portholes, a progress rail with a small submarine, answers that are
dragged only and turn into a bubble near the blank). That rework is kept as it is. A four-lens
review of the game found these problems, which still applied to the reworked version and are now
fixed on top of it:

* **The order gave answers away.** A pair's two sentences always came one after the other, so the
  second could be answered as "the other word from last time". A level's six sentences are now dealt
  so a pair's two sentences are never next to each other, and neither the एक/अनेक answers nor the
  side of the right word fall into a rule a child could learn (never all the same, never strictly
  alternating, never three in a row). Dealt fresh on every visit.
* **Reading time.** The finished sentence stayed up 2.4–3.6s on its own timer; it now uses the
  lesson's shared reading pace (`PACE.readTime`, at least 3.8s).
* **No wave on arrival.** The submarine parks and stays still; Swiftie waves only after 7s of quiet,
  as asked.
* **The arrival is seen.** Most of the glide used to happen under the swim transition. The submarine
  now waits until the transition has fully cleared, then glides in on an even curve.
* **The idle hint on the empty bubble never showed** (its breathing animation outranked it). Fixed.
* **Words dropped during a voice line snapped back with no feedback.** During the idle reminder and
  the replay, the engine switches drop targets off. The board is now locked during every voice line,
  as it already was for the level's opening instruction.
* **Drop area.** The tile already shows its bubble when it is near the blank, but a drop only counted
  inside the small circle. A drop anywhere the bubble shows now goes in.
* The wrong tile no longer pops in again after its wiggle. The white glow behind the sentence words
  is removed (no glow while reading). Reduced-motion settings are respected. Each sentence now counts
  towards the end screen's mastery score.

Verified by playing all twelve sentences through by drag: every rule held in the deal, a drop 40px
outside the bubble went in, there was no wave on arrival, the board stayed locked through the idle
reminder, the submarine waited for the transition, the end screen was reached, and there were no
errors.

---

## Round 78 — a two-line opening page, one picture per line, and a page for the wind

**Asked:** the first poem page should be just two lines, like every other page:
*आज है मीरा का जन्मदिन, मीरा ने एक गुब्बारा टाँगा। / पापा और गुब्बारे लाए, आओ, इन्हें सजाएँ!*
It used to be two lines, then a second screen with two more lines. When the first line comes, its
picture appears on the **left**. When the second line comes, its picture appears on the **right**,
instead of replacing the first picture in the middle. This is the same left/right layout the
comparison screen uses, and it applies to every poem page. After the गुब्बारा/गुब्बारे comparison
screen (on Next) and before *एक लड़का उछलकर बोला…*, a new page shows
*तभी हवा का झोंका आया, फुर्र-फुर्र गुब्बारे उड़ते जाएँ!* with the new picture supplied.

* **T1** now has two one-line beats: *आज है मीरा का जन्मदिन, मीरा ने एक गुब्बारा टाँगा।* with
  `scn_gubbara_s`, then *पापा और गुब्बारे लाए, आओ, इन्हें सजाएँ!* with `scn_gubbara_p`. The text
  is the user's wording exactly. घर में खूब तैयारी and माँ ने बाँधी झालर प्यारी are gone.
* **T1B** (new, between C1 and T2) shows *तभी हवा का झोंका आया, फुर्र-फुर्र गुब्बारे उड़ते जाएँ!*
  with the supplied picture (`assets/Images/scn_hawa.webp`, 1460×1077), centred. गुब्बारे is in
  orange like the other pair words.
* **Every poem page (T1–T4)** has two picture places side by side, the size and position of the
  comparison screen's pictures (34px apart). Line 1 brings the left picture, line 2 the right one, and
  both stay. Every line and picture is laid out from the first frame and only shown in its turn, so
  nothing moves or resizes while the poem is read. The सहेली pictures keep their balancing per card.
* **VO.** No new recording was needed. The three clips were cut from the original stanza
  recordings, at the silences between phrases:
  * `vo_stanza1a` joins stanza 1 from 0 to 2.40s with 4.45 to 6.90s (a 25ms crossfade inside the
    pause);
  * `vo_stanza1b` is stanza 2 from 0 to 4.25s;
  * `vo_stanza_hawa` is stanza 2 from 4.25s to the end.

  The word timing for the moving orange highlight was measured again with the lesson's poem-cue
  method, one phrase per comma. The old `vo_stanza1`/`vo_stanza2` are removed; a backup is kept
  outside the project. VO_SCRIPT.md has been regenerated and notes the split.
* 18 slides now (tutorial 9). Both copies of the lesson data were updated together.

Verified in the browser:
* T1: the left picture showed with line 1 and the right one with line 2; the line-2 clip started on
  its beat; Next appeared after.
* T2 and T4: the same, with the सहेली cards balanced.
* T1B: one centred picture at its own ratio.
* C1 → Next → T1B → Next → T2 worked.
* All 18 slides mounted with no errors.

**Review.** Rounds 77b and 78 were reviewed from four angles: the request, the code, the submarine
fixes, and a run in the browser. A second agent then checked each finding. The confirmed ones are
fixed (they shipped with Round 80):

* **Poem replay.** The replay chip re-read only the last line of a two-picture page. A tap in the
  one-second pause between lines was cut off by the next line, and the old line stayed lit. The chip
  now re-reads the whole page in order. If tapped in the pause, it then goes on to the line that was
  still to come.
* **Picture count.** A page gets two pictures side by side only when it has exactly two lines. Any
  other page keeps one picture that swaps. The step between lines uses `PACE.tail`.
* **Submarine.**
  * The idle reminder starts its next 7s only when it has finished speaking.
  * The bubble morph keeps its own in/out band; the landing ring decides only whether a drop counts.
  * With reduced motion, the submarine fades in and out where it parks instead of sweeping across
    faster, and each cue keeps a still emphasis.

---

## Round 79 — the grey आगे comes first on every screen that uses आगे

**Asked:** on every screen where the yellow Next button is used, the grey (disabled) Next button
should appear first, before the yellow one.

The grey button showed only on the comparison screens, and only while a clip was playing. It
disappeared in the gaps between clips, and never showed on the poem pages. Now a screen that uses
आगे asks for the grey button (`state.navShowDisabled`, renamed from `navVoEligible`), and it stands
in place from the moment the screen opens. It cannot be tapped and does not pulse. When the screen's
VO is done, the yellow pulsing button replaces it. This applies to every poem page (T1, T1B, T2,
T3, T4) and every comparison screen (C1–C4). These are all the screens in the lesson that use आगे:
the सही-शब्द-चुनिए questions advance by themselves, and the two games and the end screen hide the
button.

Verified by sampling the button from mount to the yellow state:
* T1 and T4: grey from 0ms, through the 1s gap between the two lines, then yellow.
* C1 and T1B: grey from 0ms, then yellow.
* No button on the landing screen, Q1, PAIR1, SUB or CEL.

---

## Round 80 — the submarine game: a progress card, floating answers, a smaller submarine, bigger type

**Asked:**
* Put the submarine game's progress bar inside a card, in a soft blue.
* Take the blue water panel away from behind the answers, leaving just the rectangle options, and
  let them float very slightly.
* Make the submarine a little smaller.
* Make the sentence type in the window a bit bigger, fitted to the window, for readability.

* **Progress card.** The rail and its small climbing submarine now sit on a pale-blue card: a soft
  gradient from #E2F6FF to #B0E1F8, a white rim, 24px corners and a light shadow. It is 112px wide,
  centred on the rail, with room for the marker at both ends of its climb.
* **Answers.** The water panel behind them is gone, leaving just the two rectangles. They drift 4px
  up and down over 3.4s, the two out of step. The drift moves the face and the label with the CSS
  `translate` property, so it never fights the tile's pop-in, wiggle or hint, the bubble morph, or
  the drag. It holds still while a tile is being dragged or has turned into its bubble, and is off
  with reduced motion.
* **Submarine.** 820px wide (was 892), set 8px lower so it stays centred over the answers.
* **Sentence type.**
  * It now fits to the window from up to 40px (was 32). Most sentences land at 40px; the two
    longest land at 34–35px.
  * The fit runs again once the sentence's font face has loaded. On a first visit, or a direct jump
    to this screen, the first sentence was being measured in the wider fallback font and came out a
    few px small.
* The confirmed findings of the Round-78 review shipped with this patch (see Round 78).

Verified by playing all twelve sentences through by drag:
* the type was 34–40px, and drops 45px outside the bubble still went in;
* there was no water panel, both answers were floating, and the card sat around the rail;
* the end screen was reached, with mastery 12/12 and no errors.

---

## Round 81 — no "स्तर पूरा हुआ" panel in the submarine game

**Asked:** remove the *स्तर 1 पूरा हुआ* screen (the three stars and the title shown over the
submarine).

The same panel also closed the game as *स्तर 2 पूरा हुआ*, so it is gone there too (the rule is to
apply a fix everywhere the pattern occurs). A level now ends with confetti and Swiftie's praise over
the emptied window, then the next level opens with its instruction. At the end, the submarine leaves,
the confetti falls, the closing line plays over the open sea, and the end screen follows. The panel
code and its styles are removed. `ui_level1_done.png` / `ui_level2_done.png` are no longer shown
(still named in the slide data, left on disk).

Verified by playing all twelve sentences through:
* no panel appeared at any point;
* after sentence 6: confetti, then the praise line, then the स्तर 2 instruction;
* after sentence 12: the submarine left, confetti, then the closing line and the end screen;
* no errors.

---

## Round 82 — transitions start with Swiftie already up; no wait after a right answer

**Asked:**
* In every transition screen ("चलिए, शुरू करें!", "अब आपकी बारी!" and the rest), Swiftie peeks a
  little, looks up, climbs up, and only then speaks. That is too much pause. When the transition
  comes she should already be up, and the voice-over should start from there. Do this globally.
* In the submarine game, after the correct word is dropped there is a ~3s gap before the next
  question. Remove it: the next question should come as soon as the answer is right.

* **Transitions.** The gate animation (`peeking.webp`) spent 3.8s silent before Swiftie's mouth opened
  at ~4.2s: hands over the edge, a look up, the climb.
  * The gate now uses `assets/UI/peeking_up.webp`. It is the same animation cut at its first
    full-canvas frame with her already up (frame 54, 3.82s). The remaining 61 frames are copied
    byte for byte, so nothing is re-encoded (1.69 MB; the old file was 2.84 MB).
  * The CSS rise from below is replaced by a 0.25s fade. The line starts 0.38s in, the same offset
    from her mouth's first movement as before, so the lip-sync holds.
  * This applies to every gate, since they all share `phaseBlurTransition`.
  * `peeking.webp` is no longer loaded but is left on disk.
* **Submarine.** After a correct answer the next sentence starts after `PACE.afterCorrect` (450ms, a
  new shared value, just long enough to see the word land green) instead of `PACE.readTime` (~4s).

Verified:
* Tutorial gate: Swiftie visible at 0.04s, `vo_pt_tutorial` playing at 0.46s (was about 4.2s), and
  the gate closes 0.25s after the line ends.
* Practice gate: Swiftie is up from the first frame.
* Submarine: the old sentence starts leaving 0.47s after the drop, and the next one can be played
  at ~1.6s (was over 4s).
* All 18 slides mount with no errors.

---

## Round 83 — the submarine game is one continuous game, praise only at the end, the propeller spins

**Asked:**
* "सही शब्द खींचकर खाली जगह में रखिए" must not come twice — only at the start — and after that the
  game runs continuously.
* No confetti and no शाबाश in between. Confetti and शाबाश come only when all the questions are done
  and the submarine is ready to go.
* When the submarine moves, its motor at the back should run.

This supersedes the per-level instruction rule (Round 56) for this game.

* **One continuous game.**
  * The instruction plays once, when the first sentence is up. The idle reminder repeats it only on
    that first question.
  * स्तर 2's first sentence follows स्तर 1's last one like any other next sentence: no instruction,
    no confetti, no praise. The levels stay as the order of difficulty.
  * The deal now also keeps "never three in a row" across the join between the levels.
* **Praise only at the end.** After the last sentence the window empties, the confetti falls and
  Swiftie says the lesson's closing line (`vo_well_done`, शाबाश! …) while the submarine waits, ready.
  Then it leaves, and the end screen follows.
* **The motor runs.**
  * The propeller's two blades were cut out of the still. `sub_blades.webp` is the blades alone;
    `sub_hull.webp` is the hull with them removed. Recombined, the two match the original to within
    1.7/255 on average.
  * The blades sit under the hull, so the tail ring still covers their roots and the hub stays in
    front.
  * While the submarine moves (gliding in, and leaving), the blades spin: seen from the side they
    fold flat and flip over about the hub, about 4½ turns a second. They stop when it parks.
  * The progress marker keeps the whole still. Both data copies carry the new art.

Verified by playing all twelve sentences through:
* the instruction played once, at the start; स्तर 1 ran straight into स्तर 2;
* the confetti fired once, after the last sentence, then `vo_well_done` played with the submarine
  parked;
* the motor ran during the arrival (0.09–3.6s) and the departure, and was off while parked;
* the end screen was reached, and all 18 slides mount with no errors.

---

## Round 84 — full-screen games, a glow that follows the instruction, bubble answers and a ghost

**Asked:**

*Bubble game*
* When the VO says "पहले एक शब्द पर", गुब्बारा glows; when it says "फिर उसकी जोड़ी पर टैप कीजिए",
  गुब्बारे glows — in sync with the voice.
* The glow should be more strongly blue, and pulse a little.
* The instruction must not be repeated again and again — only after 7–10s in which the child has
  done nothing.

*Both games*
* Remove the whole top bar: no instruction text, no Swiftie, no bar. They are mastery games, so they
  are full screen and the VO tells the child what to do.
* Keep the playable layout as it is, just full screen.

*Submarine game*
* Answers as bubbles, not rectangles, floating gently.
* A lighter bubble, because the dark one melted into the sentence window when it was dropped there.
* At the start, a light, blurred ghost preview of an answer going into the blank, repeating until
  the child has done it.

**Bubble game**
* *Walk-through glow.* गुब्बारा lights up when the line reaches "पहले एक शब्द पर" (5.15s of the 9.0s
  clip) and गुब्बारे when it reaches "फिर उसकी जोड़ी पर" (6.8s). Both stay lit to the end of the line
  and 1.5s more.
  * The times were measured on the clip with silencedetect. They are read off the clip's own clock
    and scaled to its length, so a re-record still lands, with a wall-clock fallback.
  * The glow is a white inner ring, a deep-blue band and a wide blue halo, breathing with a 7% pulse.
    The pulse uses the `scale` property, so the bubble keeps drifting.
* *Instruction repeats.* It plays once at the start. After that it comes back only after 10s with no
  touch at all (oceanIdle now takes a wait time; every other caller keeps 7s). It comes back at most
  once until the child makes a pair, and when it does, it walks a pair that is on the board.

**Full screen (bubble + submarine)**
* On these two slides the header row (prompt text, speaker chip, hint button) and the Swiftie
  mascot are hidden.
* The slide stage loses its padding and the game card its margins, rounding and rim, so the sea runs
  edge to edge (1333×750).
* Inside, nothing is re-arranged:
  * the bubble field simply has more room (the bubbles keep their 112–178px size);
  * the submarine's layout — submarine, answers, progress card — is the old 532px arrangement,
    centred vertically.
* The poem pages, the सही-शब्द-चुनिए questions and the end screen are unchanged.

**Submarine answers and ghost**
* *Bubble answers.* The answers are bubbles from the start: 120px, with no rectangle and no morph,
  floating 4px up and down out of step. The word is fitted from 28px down to 18px.
* *Lighter colour.* The skin is a new `assets/Images/bubble_light.png` (the same bubble blended
  halfway to white, 256px) with a white rim. The placed answer in the window uses it too, so it
  stands out from the blue glass. The third-miss hint is an orange ring round the bubble.
* *Ghost.* On the first question a blurred (1.3px), 55%-opacity copy of the right answer glides
  from its bubble into the empty window over 2.4s, pauses, and comes again.
  * It hides the moment the game is touched and returns after a pause.
  * It stops for good once the child has put the right word in.
  * It is not a tile, cannot be touched and places nothing.

Verified:
* PAIR1: header and Swiftie gone, the game is 1333×750; the walk-through glow came at 5.2s and
  6.8s and cleared 1.5s after the line.
* PAIR1 idle: with no touch the instruction came once after 10s, again walking the pair, then only
  the silent pulse hint; no third instruction.
* SUB: full screen with the layout centred; bubble answers at 28px.
* SUB ghost: it looped (2.9s, 6.6s, …); after the first correct drop it never came back, and the
  placed answer showed the light bubble.
* All 18 slides mount with no errors. The header is still there on Q1–Q6.

---

## Round 85 — the sea fills the whole window in the two games

**Asked** (with screenshots from a 1920×962 screen): fill the space on the left and right too,
while keeping the actual playable screen.

The stage is a fixed 1333×750 canvas scaled to fit the window. On a screen wider than 16:9 it
leaves bands at the sides, painted the plain gutter colour. In the bubble game and the submarine
game the sea now runs across the whole window:

* **How.**
  * `oceanDecor` puts the sea for these two games into a fixed full-window layer
    (`.ocean-backdrop`) behind the stage, instead of inside the game card. The layer holds the sea
    video, its wash and the rising bubbles; the bubbles keep their on-stage size.
  * The stage and the card are see-through over it. The card's own light-streak layers are off, so
    there is no seam at the stage's edges.
  * The playable screen is untouched: same stage, same size, same layout. Bubbles, the जोड़ियाँ
    tray, the submarine and its answers stay where they were.
* **During the swim transition** from the bubble game to the submarine, the sea behind the bands
  keeps playing, with only its sound hushed (`oceanStopAmbient(true)`). It no longer goes blank for
  three seconds.
* **Other screens.** The layer exists only while one of the two games is up. It is removed by the
  game's cleanup, and every other screen is unchanged.

Verified at 1920×962 (scale 1.28; the stage sits at x 105–1815):
* sea across the full width in both games, with the playable layout unchanged;
* the layer is present only on PAIR1 and SUB (gone on Q6, CEL and T1);
* the sea kept playing, muted, through the swim transition;
* all 18 slides mount with no errors.

---

## Round 86 — review pointers from the call (made outside this session)

These changes were made to the files between sessions and were found in them on 2026-10-19; this
entry only records what is there.

* **Practice is guided.** The six सही-शब्द-चुनिए questions are now the guided-practice section
  (`phase: guided`). The gate after the teaching section says *चलिए, साथ में करें।*
  (`assets/Audio/review_guided_gate.mp3`, mapped as `vo_pt_guided`).
* **Poem colour.** Each line starts navy. Words turn orange one at a time as they are spoken, and a
  pair word turns orange only once it has been spoken.
* **Poem sync.** The word highlight now waits for the clip's own clock. It used to run on the wall
  clock while the clip buffered, which lit the first word twice.
* **The टोपी page.** The second picture appears at "फिर उड़ीं सबकी टोपियाँ" (1.93s into the first
  line) with no pause before the next line. The last line is now *फिर से हमने पकड़ लीं अपनी-अपनी
  टोपियाँ।* (`review_topi_final.mp3`).
* **Q1 introduction.** *सही शब्द चुनिए। एक है तो 'मछली', अनेक हैं तो 'मछलियाँ'।*
  (`review_pick_intro.mp3`), with the hand going to मछलियाँ as the word is said.
* **Third wrong answer (practice only).** The correct option is lit, the hand points at it, and the
  other options fade.
* **Submarine.** 1110px wide and moved up. The window holds two rows, with the pair's एक and अनेक
  sentences one above the other.
* **Title screen.** The landing Play-button flicker was addressed by guarding the landing VO from
  starting twice.

Note: some of these are applied at start-up by a small override at the top of the engine script
(phases, the gate clip, the टोपी page) as well as in `card.json`.

---

## Round 87 — the two sentences in the submarine are one question

**Asked:** with two sentences in the window (e.g. *मैदान में एक ___ खेल रहा है* over *मैदान में बहुत
सारे ___ खेल रहे हैं*, answers लड़का / लड़के), dropping लड़का into the first made the question fade
out and come back as the same question before लड़के could be placed. The two sentences are ONE
question. The fade to the next question must come only after both are complete, not after one.

**Cause.** The game still treated each sentence as its own question. Every pair was two entries
in the plan: the एक sentence, then the अनेक sentence. Only one blank was live at a time, always the
एक blank first, so the order itself was a pattern. Moving from the first entry to the second redrew
the whole window: the words popped out and back in.

**Now: one screen = one pair.**
* Both sentences are up together and both blanks are live from the start, with the pair's two
  answer bubbles below.
* A word dropped into its own sentence's blank settles there (green, ring, chime). Its bubble
  leaves the tray, and the screen stays exactly as it is — nothing fades, nothing is redrawn —
  while the child places the other word.
* Only when both blanks are filled does the next pair fade in, after the usual short beat.
* A word dropped into the other sentence's blank is a wrong answer (wiggle, retry ladder).
  * 2nd miss: the sentences' words pulse.
  * 3rd miss: the dropped bubble glows and the blank it belongs in pulses.
* **Dealt per visit.** The pairs come in a fresh order. Which sentence sits on top, and which bubble
  sits on the left, follow no pattern: not all the same, not strictly alternating, never three in a
  row.
* **Counting.** The progress rail and the mastery score still count sentences (12). A sentence
  counts as first-try if no wrong word was dropped into its blank.
* **Ghost.** On the first screen it goes to the first open blank, with the bubble that belongs there.

**Also fixed** — the confirmed findings of the Round 83–84 review:
* **Bubble-game idle replay.** It now lights the pair the child is already working on (the selected
  bubble's pair, or the guided pair). Following the glow can no longer cause a wrong match.
* **Walk-through glow.** It stops if another clip cuts the instruction off, instead of lighting
  both bubbles ahead of the voice. A selected bubble keeps its selection ring while lit.
* **Submarine first-screen reminder.** The spoken reminder comes once only.
* **Full screen.**
  * The swim-transition overlay is square over the full-screen games.
  * The card-margin reset is keyed on `:has()` like the other full-screen rules, so all of them
    switch on or off together.

Verified by playing all six screens by drag:
* after the first correct drop there was no fade or redraw (no word left the window), one blank
  stayed open, one bubble stayed in the tray, and the board was free;
* the second drop brought the next pair;
* a wrong drop did not fill the blank;
* the top/left order varied with no pattern;
* the end screen was reached (mastery 11/12, after one deliberate miss), and all 18 slides mount
  with no errors.

---

## Round 88 — the submarine's two lines fill the glass; the games' playable screen is full screen

**Asked** (with a screenshot):
* The sentences in the window looked small and did not use the window's space. Make the text
  bigger, so it fills the window properly.
* The empty circle in the middle overlapped the window. Fix it; the overall UI should look really
  clean.
* In both mastery games the playable screen was cut. Make the playable screen itself full screen,
  shifting elements as needed — e.g. the bubble game's जोड़ियाँ card to the right side.

**Submarine window**
* *Size.* The submarine is a little larger (1180px, was 1110), centred in the window, less the
  progress card. It stays centred on resize; its position is now a CSS calc, not a one-off pixel
  value.
* *Rows.* The two rows now sit inside the glass's clear area: 47.8%–71.4% of the submarine's height,
  measured on `submarine-sentence-window.svg` where the frame slopes. Before, the box reached up to
  44% and touched the rim, so the upper blank overlapped the frame. The rows share that area evenly.
* *Type.* Both lines start at 50px (was 32) and step down only if the longer line would not fit. All
  six pairs fit at 50px; the widest line is 569px of a 684px box.
* *Blanks.* 54px, with a 16px invisible landing ring.
* *Placed answer.* A placed word no longer shrinks into the little circle. The blank becomes a clean
  white pill (white rim, soft shadow) with the word in green at the sentence's own size.

**Full-screen playable area**
* `fit()` now also publishes how far the window reaches past the 1333×750 stage, in stage px
  (`--fs-x`, `--fs-y`).
* While a mastery game is up, the game card leaves the stage and covers the whole window, and the
  stage stops clipping.
  * *Bubble game:* the bubbles drift over the full width, and the जोड़ियाँ card sits at the window's
    right edge.
  * *Submarine game:* the submarine, its answers and the progress card are laid out across the whole
    window, centred vertically on taller screens.
* Every other screen still sits in the stage exactly as before.

Verified:
* 1920×962: the card covered the window; the tray was at the right edge (x 1615–1893); the bubbles
  spread across the full width.
* The submarine was centred. Both rows were at 50px, the upper blank was ~14px under the glass's
  top edge and the lower one ~10px above its bottom. A placed word showed as a 162×54 pill at 50px.
* 1024×768 (4:3): the card was full screen, the composition centred, and nothing overlapped.
* The swim transition covered the full window.
* T1, Q1 and CEL kept their normal stage. All 18 slides mount with no errors.

---

## Round 89 — the submarine's sentences: more space, a quieter empty slot, green bubbles for answers

**Asked** (with a screenshot):
* A little more spacing between the words.
* Make the dotted empty circle subtler and nicer, with a different design.
* After a correct answer, the answer should stay a bubble, slightly green (asked mid-way).

* **Spacing.** 20px between the window's word groups (was 10), and wider spaces inside a two-word
  group such as "बहुत सारी" or "तालाब में" (word-spacing .3em).
* **The empty place.** A soft frosted slot (108×52) in place of the dashed circle. It has the
  capsule shape of the answer that fills it: a pale glass body, a thin white rim and a faint inner
  shade. It breathes very gently in brightness, with no dashes and no size pulse. A bubble dragged
  over it warms it to a soft gold.
* **The placed answer stays a bubble, slightly green.**
  * A round bubble cannot hold the word at the sentence's size within one line of the window, so it
    is drawn as a capsule-shaped bubble. It has the same glassy look as the answer bubbles: a bright
    highlight top-left, a small one bottom-right, a thin white rim with faint blue and pink inner
    tints, over a soft green body. The word stays dark green.
* **No shrink after a drop.** The wider gaps and slot meant a long line could no longer stay at 50px
  once its answer was in, so the type would have shrunk mid-screen. Now, when the size is chosen,
  each empty slot is measured as the answer bubble that will fill it, so the type stays the same from
  first frame to last. Each screen still takes the largest size that fits (42–50px across the six
  pairs).

Verified at 1920×962 by playing all six pairs: the type size was identical before and after each
drop on every screen; the slot, the gold hover and the green answer bubble render as described;
all 18 slides mount with no errors.

---

## Round 90 — a round empty slot; a correct answer stays the option's own bubble, slightly green

**Asked** (with a close-up of the slots): make the empty slots circles, keeping their hover design.
After a correct answer it should stay the same bubble as in the options.

* **The empty slot** is a 74px circle with the Round-89 look: a frosted glass body with a thin
  white rim, gentle brightness breathing, and the soft-gold hover. It is a little taller than a line
  of the window. The sentence type is capped at 44px (was 50), which leaves room above and below
  each line, so the circle never touches the other line or the glass rim. All six pairs now read at
  the same 44px.
* **A correct answer** stays the option's own round bubble (`bubble_light.png`) at the slot's size,
  tinted slightly green. The skin is hue-shifted from blue to green over a soft green body. The word
  inside is dark green, fitted to the bubble from 26px down: most words land at 23–26px, टोपियाँ at
  22px and मछलियाँ at 17px.
* Because the bubble is exactly the slot's size, a drop never changes a line's width, so the sentence
  type never changes after a drop. The Round-89 pre-measuring is no longer needed and was removed.

Verified at 1920×962 by playing all six pairs: the type was 44px on every screen, before and after
each drop; the slots were 74px circles; the placed bubbles were green with their words fitted. All
18 slides mount with no errors.

---

## Round 91 — the dragged bubble takes the slot's size while it is over the slot

**Asked:** the answer bubbles (112px) and the empty circles (74px) differ in size. When a bubble is
dragged over an empty slot, it should shrink smoothly to the slot's size, so it clearly reads as
"this goes here". It grows back to its own size when moved away.

* While a dragged bubble is over an empty slot (the slot or its invisible landing ring), it gets
  `over-slot`. Its face eases to 68px (×1.08 for the drag lift ≈ the 74px slot) and its word scales
  to 0.64. Both ease back the moment it leaves the slot or is let go.
* The sizes change on the face (centred by its own translate) and on the label's own scale, never on
  the dragged tile. The bubble therefore stays exactly under the finger.
* This happens over any empty slot, right or wrong: the child finds out only on the drop.
* The first-screen ghost now also ends at the slot's size (0.62 of the bubble, was 0.78).

Verified at 1920×962 with a held drag:
* halfway the face was 119px;
* over the slot it was 72px (slot 73) with the word at 0.64, centred on the pointer;
* moved away it returned to 119px, and back over the slot it was 72px again;
* on the drop the answer filled the slot and the tile left the tray;
* all 18 slides mount with no errors.

---

## Round 92 — a taller sentence window

**Asked:** the submarine's window is long enough, but too thin top to bottom; make it a little taller
so everything fits well.

* **The window artwork** is a new file, `assets/UI/submarine-sentence-window-v2.svg`, so no browser
  can show a cached copy of the old one.
  * Every y in the frame, glass, highlights and rivet rows was moved to 392 + (y − 392) × 1.13 − 4.
    The glass is 13% taller, about 269–491 where it was 287–483.
  * The rivets keep their round size (only their centres moved), and the stroke widths are
    unchanged. The glass gradients and the lilac glow moved and grew with it.
  * The window stays clear of the periscope base above, the front fin below and the hull's
    tapering top edge near the tail.
* Both the game and the small progress-rail submarine use the new file. The old file is no longer
  referenced and is left on disk.
* **The two rows** use the extra height: 45.8%–72.2% of the submarine's height, inside the glass
  where it slopes. Each row is now about 70px (was 62), so each 74px answer circle sits within its
  own line instead of reaching the rim. The type is unchanged at 44px.

Verified at 1920×962: the upper circle sits ~14px below the glass top and the lower one ~7px above
its bottom; the frame covers neither the fin nor the periscope base. All 18 slides mount with no
errors.

---

## Round 93 — the submarine game ends without a voice line; the end screen says "शाबाश! तुमने कर दिखाया!"

**Asked:** when every question of the submarine game is done, the line that came next ("… अब तुम
जानते हो कि गुब्बारा-गुब्बारे, लड़का-लड़के, बच्चा-बच्चे …") goes completely. The motor simply starts,
the submarine leaves to the left, and then the final screen comes, where Swiftie just says
"शाबाश, तुमने कर दिखाया".

* **The submarine's finish.** No confetti and no voice line any more (`vo_well_done` is no longer
  played anywhere). When the last word is in, the window empties, the motor starts, the submarine
  leaves to the left with its bubble trail, and the end screen follows.
* **The end screen's line** is now *शाबाश! तुमने कर दिखाया!*: `assets/Audio/ocean_end_praise.mp3`,
  the two existing praise clips (`ocean_correct_1` + `ocean_correct_2`, the same voice) joined with a
  0.34s pause. Speech runs 0.07–2.76s. It is listed as `OCEAN_VO.endPraise`.
* **In step with Swiftie's beak.** The approved end animation talks only for frames 18–35 (1.6s),
  too short for the longer line.
  * The end screen now plays `assets/UI/swiftee_end_talk.webp`. It is the same 36 frames, with its
    steady wave-and-talk stretch (frames 22–30) played three times instead of once: 54 frames ×
    90ms = 4.86s, played once, then the calm still pose as before.
  * The line starts so that its first syllable lands on frame 18, and it ends while she is still
    talking.
  * The old `swiftee_end_page.gif` is no longer referenced; it is left on disk.

Note: the CEL slide still names `vo_well_done` as its prompt audio in the data, but the end screen
plays its own line and never that one. The open item about `vo_well_done` saying बच्चा-बच्चे no longer
affects the lesson.

Verified at 1920×962 by playing all six pairs:
* after the last answer there was no voice and no confetti, and the motor came on 0.8s later;
* on the end screen the talking animation loaded, the praise started 1.6s in and ended 3.2s later,
  and the still pose came at 4.9s;
* all 18 slides mount with no errors.

---

## Round 94 — an excited शाबाश on the end screen

**Asked:** the end screen's "शाबाश" sounds dry and dull next to the excited "तुमने कर दिखाया", so
"शाबाश" should sound excited too. The voice must stay the same.

* **Why it was dull.** It was measured, not guessed. The old clip (`ocean_correct_1`) is nearly
  flat: about 137Hz, moving only ~13Hz, and quiet (mean −21.8dB). "तुमने कर दिखाया" (`ocean_correct_2`)
  sits around 340Hz with a ~200Hz swing, and is louder (−13.5dB).
* **The livelier शाबाश.** Every "शाबाश!" in the lesson is in the same voice (hi-IN-SwaraNeural; see
  `gen_vo.js`). The liveliest is the one opening `vo_pick_ok_q1` ("शाबाश! आपने सही शब्द चुना…").
  * Its pitch rises 281→421Hz on "शा" and 308→381Hz on "बाश" — an exclamation.
  * Only that word is cut out (0.20–1.56s, ending in the pause before "आपने"). It is raised 5.5dB
    (limited at −1dB) to the loudness of "तुमने कर दिखाया", and joined to it with a 0.2s pause.
  * The result is `assets/Audio/ocean_end_praise_v2.mp3`: "शाबाश!" 0.07–1.26s, "तुमने कर दिखाया!"
    1.46–3.02s, both about −14dB. It replaces the Round-93 clip, which is removed.
  * It has a new file name so no browser plays a cached copy, and is mapped as `OCEAN_VO.endPraise`.
* **Timing on Swiftie.** The first syllable still lands on the animation's frame 18. The line ends
  during the cheerful arm-lowering frames, before the still pose.
* **Also fixed:** the end screen's "go to the still pose" timer now lives on the shared end-screen
  image. Re-entering the end screen (e.g. from the dev nav) cancels the old timer instead of letting
  it cut the new animation short.

Verified in the browser:
* the praise started 1.6s after the animation, speech ended at ~4.7s, and the still pose came at
  ~4.96s, also on re-entry;
* all 18 slides mount with no errors.

---

## Round 95 — two flaws in the submarine art repaired

**Asked** (with a screenshot circling two spots): fix the distortion on the submarine. The spots were
the dome's lower-left edge by the steering wheel, and the tip of the rear lower fin.

Both came from cutting the submarine out of video A in Round 77.

* **The dome by the wheel.**
  * There, the dome's dark outline and the cockpit behind the wheel are the same dark blue as the
    water, so the cut-out lost them. A notch of sea showed through the glass, with loose dark
    shards along the edge.
  * The dome's bright inner rim is a clean line in the video. The outer edge is rebuilt from it:
    rim − 5px, the outline width the cut-out keeps on the rest of the dome. The edge is fitted as one
    smooth curve (within 1.1px of the rim everywhere) and anti-aliased.
  * The shards outside the edge are removed. The hollow behind the wheel is filled back with the
    video's own pixels: the glass, the brown band and the cockpit.
* **The fin tip.** A drip of the coral behind the submarine hung below the fin and broke its dark
  outline. The damaged columns are rebuilt from the fin's clean edge on either side. The outline now
  runs unbroken to the tip, and nothing remains below it.
* **Rebuilt from the repaired still**, at the same sizes and quality settings, with new file names so
  no browser shows a cached copy:
  * `sub_hold_v2.webp`: the progress marker;
  * `sub_hull_v2.webp`: the game's hull, blades removed by the Round-83 rule;
  * `sub_wave_sheet_v2.webp`: the waving cockpit. It is cut with the repaired outline, so the wave
    has no gap at that spot either. Its frames are aligned exactly as before.
* `sub_blades.webp` is unchanged. The old three files are no longer referenced and are left on disk.
* The slide data in the lesson and in `card.json` names the new files.

Verified at 1920×962, zoomed 3.2× on the live game:
* the dome is whole by the wheel, both at rest and mid-wave;
* the fin's outline is continuous with no drip;
* all 18 slides mount with no errors and no broken images.

---

## Round 96 — the submarine leaves the screen completely

**Asked:** when the submarine leaves to the left it does not fully disappear; its tail stays visible.

* **Why.** It moved a fixed 1150px, set when the game sat in the 1333px stage. Since Round 88 the
  game fills the window and the 1180px submarine is centred in it. The tail stayed on screen: 46px on
  a 16:9 window, ~160px at 1920×962. On the way in, its nose already showed at the right edge before
  it set off.
* **Fix.** Both distances are now measured when each move starts. The whole submarine, propeller
  included, ends 40px past the edge. Its speed is unchanged, so a longer way takes proportionally
  longer (capped at 1.6×). With reduced motion it still just fades in place.
* Verified by playing all six pairs at 1920×962, 2560×1080, 1333×750, 1024×768 and 375×812:
  * before setting off, the submarine is fully past the right edge;
  * after leaving, its right edge is 11–58px past the left edge.
* An independent review confirmed the patch. Its remaining risk is a window resized *during* the
  3s exit, which could bring the tail back into view; this is not handled.

## Round 97 — "चलिए, साथ में करें।" before the bubble game

**Asked:** the gate before the bubble game said "अब आपकी बारी!"; it should say
"चलिए, साथ में करें।", with its VO.

* The bubble slide's `gate_before` changed from `practice` to `guided`, in both the lesson and
  `card.json`. It now plays the same line and clip as the gate before Q1
  (`review_guided_gate.mp3`, the same voice).
* The guided gate's on-screen line now ends in "।" (it was "!"), as asked and as the clip's text
  reads. This applies to both gates.
* "अब आपकी बारी!" / `vo_pt_practice` is no longer played anywhere. VO_SCRIPT.md still lists it,
  because its generator hard-codes the tutorial and practice gates.

Verified: finishing Q6 shows the gate with "चलिए, साथ में करें।" and plays `review_guided_gate.mp3`,
then the bubble game opens with its instruction. The Q1 gate shows the same line. The title fits and
sits above Swiftie.

## Round 98 — टोपियाँ is highlighted once on the topi page

**Asked:** on the poem page, टोपियाँ lit up orange on both lines; once it has been highlighted, the
next line's टोपियाँ should not be.

* The review round's last line ("फिर से हमने पकड़ लीं अपनी-अपनी टोपियाँ।") marked it as a target
  word. The mark is removed from the runtime override and from `card.json`. The line still reads
  word by word, with its timings unchanged.
* No other poem page repeats a target word on its next line. गुब्बारे is highlighted on the first
  page and again on the gust page, but that is a separate page.

Verified: line 1's टोपी and टोपियाँ are highlighted, and line 2's टोपियाँ is plain.

---

## Round 99 — end-to-end optimisation (media formats, preloader, watchdogs, dead code)

Work moved to this folder (`Desktop\HI02H11_L03_S01\HI02H11_L03_S01`) from this round on.
**Deployed payload (HTML + card.json + assets): 96.05 MB → 19.00 MB (−80%).**

| | before | after |
|---|---|---|
| video | 5 files, 38.75 MB | 3 files, 4.45 MB (−89%) |
| audio | 80 files, 9.52 MB | 78 files, 4.61 MB (−52%) |
| images | 110 files, 46.64 MB | 58 files, 9.19 MB (−80%) |
| HTML | 1.08 MB | 0.69 MB (−36%) |

### Media formats
* **Video.** MP4 (H.264/AAC) became WebM (VP9 + Opus 96k), at source resolution and frame rate. The
  encode used constrained quality: CRF 33 with the bitrate capped at 75% of the source's.
  * title video 14.8 → 2.29 MB; sea background 14.6 → 1.15 MB; swim transition 6.2 → 1.23 MB.
  * SSIM against the originals is 0.98–0.99. No file needed the two-pass fallback.
* **Audio.** MP3 and Ogg Vorbis became Ogg Opus.
  * Speech is mono 64k, and music is stereo 96k.
  * The cap is 80% of the source bitrate, so no file grows: the 48k MP3s and the ~50k Vorbis
    lines become ~38–40k Opus.
  * The inline pop sound (a base64 data URI) was re-encoded too (5.9 → 3.8 KB).
* **Images.** PNG became WebP q82, with alpha kept and checked on the title art. The loader GIF
  became animated WebP.
* **Every output is smaller than its source.** Each reference was rewritten by exact file name in
  the HTML, card.json and both ocean helpers. The engine's default image extension is now webp. No
  live reference to `.mp4/.mp3/.png/.gif` remains.
* **Browser support:** Chrome, Edge, Firefox, and Safari 17+ (WebM/VP9) / 18.4+ (Ogg Opus). The
  lesson already relied on Ogg for its VO.

### Preloader (in `<head>`, before anything creates media)
* **The bar.** The title screen shows a loading bar where Play stands. Play pops in only at 100%,
  and `sgBtn` itself refuses until then, so a keyboard or script start waits too.
* **Byte-accurate progress.** Files stream through `fetch` + reader and are weighted by their real
  sizes. Content-Length refines the weights, and the bar never moves backwards.
* **The size table** is generated from the files on disk by `_dev/gen_preload_manifest.js`.
  **Re-run it after any change in assets/.**
* **Order.** The landing's intro line goes first, then everything else smallest-first, 5 at a time.
* **Not fetched twice:**
  * what the landing markup and CSS load by themselves is waited for through Resource Timing;
  * the title video streams in its own `<video>` (the landing card *is* that video, so it must
    start at once), and the bar follows its buffered range;
  * anything the page never requests is fetched once the page has loaded.
* **Everything else is local.** Each fetched file becomes a `blob:` URL, used by:
  * `img`/`audio`/`video`, including `new Audio()`, `setAttribute`, and elements created from HTML
    strings;
  * stylesheet `url()`s, rewritten at 100%;
  * the submarine's inline wave sheet, through `assetURL()`.
  Reading `.src`/`.currentSrc` still returns the original path, so the clip-name checks still work.
  A blob that will not decode falls back once to the file, and a video resumes.
* **Nothing blocks.** A failed, stalled (15s), over-long (90s) or aborted transfer counts as done.
  On `file://` everything is done at once.
* **Fewer duplicate loads.** The two animations restarted with `?r=` (Swiftie's peek, the end
  animation) no longer load from the markup at page load.

### Media-driven states
* **`play()` watchdog.** After its length + 3s, re-armed while the sound still moves. No metadata
  after 10s counts as a failed clip. A stalled clip can no longer leave the VO lock on or hold back
  Next.
* **Landing Play.** An intro that errors or stalls now counts as heard. A refused autoplay still
  waits for a tap, as designed, but a watchdog (intro length + 4s) brings Play regardless. The
  CSS comment always promised this; the code had stopped doing it.
* **Swim transition.** The video's `error` now leads to the next screen, alongside `ended` and its
  timers. The phase gate's fallback also shows Swiftie's picture.
* **GPU audit.** Only one slide is ever mounted. Hidden overlays are `display:none`, and the landing
  video is paused after Play. The confetti's 3D faces already have `backface-visibility:hidden` and
  no filtered children. No change was needed.

### Unused code and files
* **58 slide modules** for types this card never uses were removed. Then 50 functions nothing
  called, found with acorn and removed in rounds, including the hand-picture landing branch that
  pointed at missing files.
* **CSS.** 618 rules, 48 keyframes and 16 custom properties that nothing can match or read were
  removed. Class prefixes the JS builds (`tri-`, `opt_`, `thm-`) were respected, after a first pass
  broke the bubble pictures; that was caught by screenshot diffing. Before/after screenshots of
  every slide and gate now match.
* **Fonts.** The two embedded Baloo 2 fonts were already subset (a re-subset saved < 1 KB), so they
  were left alone.
* **Files.** 57 files (≈27 MB) that no live code reaches were moved to
  `..\_quarantine_unused_assets\unreferenced`. The converted originals went to
  `..\_quarantine_unused_assets\replaced_originals`. Nothing was deleted.
* **Other.** The favicon 404 is gone (`<link rel="icon" href="data:,">`). `.deployignore` lists
  what must not ship: `_dev/`, `.claude/`, PROGRESS/VO_SCRIPT, review material, the quarantine.

### Verified (headless Chromium, local HTTP)
* **Every slide and gated control.** All 18 slides, the gates and the swim transition were crawled.
  Next appeared on all 9 story/compare pages and the finish button on the end screen.
* **A full playthrough** (226s), every slide played as a child would:
  * Q1 with a wrong answer first;
  * all 7 bubble pairs;
  * all 12 submarine sentences by drag;
  * the end screen with its praise.
* **Zero JS errors, zero 4xx/5xx, zero failed loads, zero broken img/video/audio.**
* **Throttled to ~4 Mbit/s.** The bar climbs monotonically, small files first (109 of 139 by 11s).
  The landing card plays from about 5s, and Play appears at 100% (~39s for 19 MB).
* **Failure modes:**
  * every fetch fails → still 100% and Play, and the lesson runs from the files;
  * one transfer hangs → aborted at 15s;
  * `file://` → instant;
  * corrupt blob → falls back to the file and plays;
  * landing intro hangs → Play at 13s;
  * gate VO hangs → the gate still closes and the next slide mounts.

Known, unchanged: the embedded card data still differs from `card.json` exactly where the review
round's runtime override (engine start) patches it.

---

## Round 100 — the straight hull, and a window like the reference

**Asked** (with three pictures): the window looked odd because the submarine narrows towards the tail.
Use the supplied straight hull instead. Make the window and the two sentences look exactly like the
reference. Do not change the answer options.

* **The hull.** Another session had already switched to the supplied straight hull
  (`sub_hull_equal_v3.png`, 1.3 MB) and drawn an amber window (v3). Both are now replaced:
  * the hull is the same art as WebP (`sub_hull_equal_v3.webp`, alpha kept), on the submarine and
    on the progress marker;
  * the PNG and the v3 window are in `../_quarantine_unused_assets/replaced_originals`.
* **The window** is a new `submarine-sentence-window-v4.svg`: an orange riveted frame round
  sky-blue glass. It sits on the hull's straight body, measured on the art:
  * right of the cockpit rim (x≈510 of 1824);
  * below the periscope base (y≈285);
  * above the front fin (y≈670).
* **The two sentences** are two pale-blue pills with a white rim that fill the glass (83px each, 11px
  apart), in navy type.
* **Each blank** is the reference's light-blue circle in a white ring with a dashed blue border:
  * it is 80px (was 74), nearly the height of its row;
  * a bubble held over it still eases to the slot's size (face 74px × the 1.08 drag lift);
  * the first-screen ghost now lands at 80/120, and the placed green bubble is 80px too.
* **Unchanged:** the answer bubbles. Swiftie's wave frames and the spinning propeller sit correctly on
  the new art.

Verified at 1920×962, by playing all 12 sentences with real drags:
* over a slot, the dragged bubble's face measured 103px against the 103px slot;
* the placed bubble is 103px;
* the game reached the end screen with no errors.

---

## Round 101 — a shorter जोड़ियाँ card, centred on the right

**Asked:** in the bubble game the जोड़ियाँ card was too tall for its pairs, so it looked empty even
when full. Make it a little smaller so it looks filled, and centre it vertically, keeping it on the
right edge.

* The card used to stretch the full height of the game (730px), while the title and all seven pairs
  take ~477px. It is now 490px, just enough for all seven, and sits in the middle of the screen's
  height against the right edge. The finished summary layout is unchanged.

Verified at 1920×962 with all seven pairs placed: the card is 490px tall, starts 130px from the top
of a 750px game, and the last pair ends 13px above its bottom.

---

## Round 102 — Swiftie waves hello on inactivity again

**Asked:** Swiftie no longer waved from the submarine when the child did nothing; that hello must
stay.

* The wave itself was intact, but nothing called it any more. The submarine's idle beat had been
  rewritten to outline the row that needs an answer, and the call to `wave()` was lost in that
  rewrite.
* The idle beat now calls it again. After 7s of real inactivity Swiftie waves from the cockpit while
  the row hint shows, as before. As before, any touch restarts the 7s count.

Verified at 1920×962: with no input, the wave started 6.9s after the board became free. It plays
correctly on the new straight hull, with no errors.

---

## Round 103 — no third hand on the wheel while Swiftie waves

**Asked:** when Swiftie waves, one hand stays stuck on the steering wheel.

* **Why.** The wave frames show her left hand raised, but they fade out before the bottom of the
  dome. The still hull's left glove, resting on the wheel there, showed through, so she had three
  hands. The frames hold no real picture outside their fade, and the source video is no longer
  available, so the frames could not be re-cut.
* **Fix.** `assets/UI/sub_wave_hand_patch.webp` (2.7 KB) is a 96×96 piece of the hull art with that
  glove painted out. The glove and its outline are filled from the brown cockpit wall above and the
  dark console below, never from the yellow jacket. It sits on the hull under the wave frames and is
  shown only while the wave plays.
* The preloader's size table was regenerated.

Verified at 1920×962 on a real idle wave:
* at rest both hands are on the wheel and the patch is hidden;
* mid-wave one hand is raised and only the other is on the wheel;
* the patch hides again after the wave;
* no errors.

---

## Round 104 — the submarine's motor sound

**Asked** (with `freesound_community-thai-motor-boat-64851.mp3`): play that sound with the
submarine's motor.
* Arriving (right to left, as the game starts) it fades in as the submarine comes, and stops when
  the motor stops.
* Leaving at the end (middle to left) it fades out as the submarine goes.

* **The sound.** `assets/Audio/sfx_submarine_motor.ogg` is a 10s steady stretch of the recording
  (5–15s; its first seconds are silence and a run-up), looped. It is Ogg Opus 64k (82 KB, from a
  60s 1.2 MB MP3), with 50ms edge fades for a click-free loop. The preloader table was regenerated.
* **Arriving:** volume 0 → 0.55 over 70% of the glide, held, then a 0.4s fade and stop when the
  motor stops at the parking spot.
* **Leaving:** 0.55 → 0 over the whole exit, then stop.
* **Conditions:** silent when the lesson is muted. Off with reduced motion, as the motor itself is.
  Stopped if the game is left mid-move.

Verified at 1920×962 by sampling the sound through a full game (all 12 sentences):
* arriving: 0.03 → 0.55 by 2.7s, then stopped half a second after the motor stopped;
* leaving: from 0.46 down to 0 as the submarine left, then stopped;
* no errors.

---

## Round 105 — a new recording for “फिर से हमने पकड़ लीं अपनी-अपनी टोपियाँ।”

**Asked** (with `Downloads/audio_1.wav`): use this audio for the topi page's second line.

* **The clip.** `assets/Audio/review_topi_final_v2.ogg` is the supplied 4.08s WAV as Ogg Opus 48k
  (22.7 KB). It has a new name, so no browser plays a cached copy. The old clip is in
  `../_quarantine_unused_assets/replaced_originals`.
* **The word cues** were re-timed to the new voice, set by the loudness profile against the old
  clip's known timings:
  * word starts: फिर .25, से .55, हमने .78, पकड़ 1.15, लीं 1.55, अपनी-अपनी 2.05, टोपियाँ 3.05s;
  * cues `[100,430,660,1030,1430,1930,2930]`, each about 120ms ahead of its word, as before.
* Both places that hold the line were updated: the runtime override at engine start and
  `card.json`. The preloader table was regenerated.

Verified at 1920×962 on the topi page:
* line 2 plays the new clip;
* each word lights as it is spoken (फिर 0.14s … टोपियाँ 3.06s);
* Next appears after the line;
* no errors.

---

## Round 106 — a new recording for the Q1 guided intro

**Asked** (with `Downloads/audio_1 (1).wav`): use this as the voice-over where the सही-शब्द-चुनिए
game starts, in the guided part that says “सही शब्द चुनिए। एक है तो मछली, अनेक हैं तो मछलियाँ”.

* **The clip.** `assets/Audio/review_pick_intro_v2.ogg` is the supplied 5.56s WAV as Ogg Opus 48k
  (30 KB). It has a new name, so no cached copy plays. The old 6.8s clip is in
  `../_quarantine_unused_assets/replaced_originals`.
* **The hand cue.** The hand that points at the right answer is timed to “मछलियाँ”, which now starts
  at 4.35s (5.15s in the old clip). The cue moved from 5.182s to 4.37s. The phrase starts were read
  off the loudness profile against the old clip: सही शब्द चुनिए .35, एक है तो मछली 2.00, अनेक हैं तो
  3.70, मछलियाँ 4.35s.
* The preloader table was regenerated.

Verified at 1920×962 on Q1:
* the new clip plays;
* the hand points at the answer at 4.48s, while मछलियाँ is spoken;
* the clip ends at 5.57s and the board unlocks;
* no errors.

---

## Round 107 — Swiftie moves only while she is speaking

**Asked:** after a second wrong answer (e.g. ताली for लड़की → लड़कियाँ), Swiftie's worried animation in
the header kept looping after her line “दोबारा देखिए…” had ended. She should stop on one frame and move
only while a voice-over plays. Fix it wherever the same thing happens.

* **Why.** `setSwMood` chose the animated face (`sw_head_<expr>_anim.webp`) for every mood except
  talking, and left it looping until the mood changed, whether or not anything was being said.
* **Fix, in the shared header Swiftie (every screen that shows her):**
  * the animated face is used only while a clip is sounding;
  * otherwise she holds the same expression as a still (`sw_head_<expr>.webp`);
  * `setPlaying` re-applies the mood whenever playback starts or stops, so the switch follows the
    voice exactly. That call is guarded so it can never break playback.
* **The other animated Swiftie pictures already stop with their line:**
  * the title-screen Swiftie plays once (3.2s, loop count 1);
  * the hint pop-up and the gate's peek close when their line ends;
  * the end screen freezes on its still pose.

Verified at 1920×962 on Q2:
* during the second wrong answer's line she shows the animated worried face;
* the moment it ends she is on the still worried face, and still 1.5s later;
* no errors.

---

## Round 108 — Swiftie's default face between lines; worried only while she explains

**Asked** (with two pictures): when a voice-over ends, Swiftie should go back to her default face,
not the worried one.
* The worried face, moving, shows only while she speaks: explaining a wrong answer (“एक है तो लड़की,
  अनेक हों तो…”) and the inactivity reminder “सही शब्द चुनिए”.
* With no voice-over she shows the default face.

* **The rule** (shared header Swiftie, every screen):
  * with nothing sounding she shows the default face (the resting talking head);
  * while a clip sounds she shows the current mood's animated face: worried for a wrong-answer
    explanation, happy for praise;
  * with reduced motion, that mood's still picture is used.
  * Round 107's still-worried resting face is replaced by this.
* **Inactivity reminder.** On the सही-शब्द-चुनिए screens it now sets the worried mood just before it
  is spoken (it used to stay on the neutral face).
* **No restarts.** An unchanged face is not reloaded, so the play-once happy animation is not
  restarted by every clip start.

Verified at 1920×962 on Q2, all with no errors:

| moment | face |
|---|---|
| at rest | default |
| second wrong answer, speaking | worried, moving |
| after that line | default |
| inactivity reminder, speaking | worried, moving |
| after the reminder | default |
| correct answer, praise | happy, moving |

---

## Round 109 — the submarine's second wrong attempt: a voice line, no word highlight

**Asked:** in the submarine game, a second wrong drop into the same sentence (e.g. लड़के into
“मैदान में एक ___ खेल रहा है।”) highlighted the clue word (एक). Drop the highlight. Have Swiftie say an
existing, relevant line once instead (nothing newly generated). The third attempt already shows the
ghost.

* The second wrong drop now plays the existing retry line from `OCEAN_VO.retry`: “दोबारा कोशिश करो।”
  or “कोई बात नहीं, फिर से कोशिश करो।”, picked at random.
* The board is held while she speaks, as for every voice line, and her worried face shows while the
  line plays.
* The clue-word highlight (`contextualHint`) is gone; the function is removed as nothing else used it.
* Unchanged:
  * the first wrong drop plays only the error sound;
  * the third shows the ghost hint.

Verified at 1920×962 with three wrong drops into one blank:
* first: error sound only;
* second: error sound + “दोबारा कोशिश करो।”, no highlighted word;
* third: the ghost;
* no errors.

---

## Round 110 — the transition and the poem's word walk, as in the reference game

**Asked**, pointing at https://hindi-game-gender-identify.vercel.app/:
* In its Swiftie transition she goes back DOWN when her line (“चलिए, शुरू करें” / “चलिए, साथ में
  करें”) is done; ours did not.
* The poem's words jump and turn orange as they are spoken. That behaviour should be exactly the
  same here, and properly in sync with the voice.

Studied in the reference's own code (same engine family): `phaseBlurTransition` + `.pg-sink`, and
`prepVerseWords` + `.verse-word.saying` / `.verse-done`. Measured side by side in a headless browser.

* **The transition.** When the gate's line is done Swiftie drops below the edge (0.34s,
  `ease-in`, the reference's own timing), and only then does the gate lift and the next slide
  mount.
  * It applies to every gate (in the reference code only its first gate has it).
  * Reduced motion skips the drop.
* **The word walk.** Ours already ported the reference's mechanics: the spoken word turns orange and
  lifts to 110% with a 0.15s ease, held for max(220, min(620, next cue − 40))ms, driven here by the
  clip's own clock. Two differences remained, now aligned:
  * the orange is the reference's #FF8A00 (ours was overridden to #ED8200);
  * the एक/अनेक pair words (लड़का/लड़के…) are ordinary navy words while the line is read. They take
    the moving orange on their turn and turn orange + bold together once the reading is over.
    **This replaces** the pair words being orange from the first frame (an earlier change).
* All nine poem beats have exactly one cue per word, so every word walks on its own cue.

Verified at 1600×900:
* T2's pair word लड़का: navy before it is spoken, orange and lifting while spoken, orange bold after
  the line;
* a gate's Swiftie ran `pgSinkDown` and the gate closed 0.33s later;
* no errors.

---

## Round 111 — the poem's pair words stay pre-highlighted

**Asked:** Round 110 was right except one thing. The एक/अनेक words in the poem (गुब्बारा/गुब्बारे,
लड़की/लड़कियाँ, सहेली/सहेलियाँ, लड़का/लड़के…) must stay highlighted from the start. Only the animation
was meant to follow the reference.

* **Restored:** the pair words are orange (#FF8A00) and bold from the first frame, as before
  Round 110.
* **Kept from Round 110:**
  * the reference's word walk: the spoken word turns orange and lifts to 110%, in sync with the
    clip; a pair word lifts on its turn like every other word;
  * Swiftie sinking out of the transitions.

Verified on T2: लड़का is orange and bold before it is spoken, lifts while spoken, and stays orange
after; no errors.

---

## Round 112 — the confetti, exactly as in the reference game

**Asked** (reference: https://hindi-game-gender-identify.vercel.app/, code on
https://github.com/Prashantkumar12345678/Hindi-game-gender-identify): every confetti burst should
look exactly like the reference's.

**Studied.** The reference's active `confettiCannon` (the last definition on its page) calls its FLN
kit with `FLNMotion.confetti.burst({ host: "#fxLayer", phases: [], count: 100, fall: [1.6, 2.6] })`.
It draws a window-wide layer whose pieces are sized with the stage at 1.5×.

**Ours was an older copy of the same kit.** The keyframes (cfFall, cfGlide, cfRock, cfTumble) and the
shape and colour tables are identical. What differed is now aligned:

| | was | now (= reference) |
|---|---|---|
| pieces | 80 | 100 |
| fall | 1.1–1.8s | 1.6–2.6s |
| piece size | the kit's fixed px | × stage scale × 1.5 |
| stars | none in the bubble and submarine games | in every burst (40% stars) |
| reduced motion | confetti anyway | no confetti |

Our celebration sound stays. Bursts now last up to ~1s longer, so the move on after a correct
answer, which waits for the confetti, waits that much longer, as in the reference.

Verified side by side at 1600×900, one burst each, 0.8s in:
* reference: 100 pieces, max/avg side 29/21.5px, gone at 4.2s;
* ours: 100 pieces, 27/20.1px, gone at 3.8s (random draw);
* the same star-heavy mix;
* no errors.

---

## Round 113 — the लड़का/लड़के poem page, re-synced

**Asked:** on the poem page “एक लड़का उछलकर बोला, “मैं पकड़ूँगा सारे!” / फिर लड़के भी दौड़ पड़े— आगे-आगे
गुब्बारे!” the word pop was not in sync with the voice.

* **Why.** T2's two clips (vo_stanza3a, vo_stanza3b) had cues up to half a second off, e.g.:
  * बोला lit at 1.97s, in the pause after the comma; it is spoken at 1.40s;
  * पकड़ूँगा lit at 2.48s, before it starts at 2.68s;
  * भी lit at 1.10s, the moment दौड़ begins (भी starts at 0.84s);
  * गुब्बारे lit at 2.66s, early (it starts at 2.80s).
* **Re-measured** from the clips at 20ms resolution: the pauses, plus the short closures before
  stop consonants (ब, प, द, ग).
  * Word starts, line 1: .26 .49 .82 1.40 2.34 2.68 3.20s.
  * Word starts, line 2: .26 .46 .84 1.12 1.41 2.03 2.80s.
* **New cues**, each ~30ms ahead of its word so the 0.15s lift peaks as the word sounds:
  * line 1: `[230,460,790,1370,2310,2650,3170]`;
  * line 2: `[230,430,810,1090,1380,2000,2770]`;
  * in the lesson's card data and `card.json` alike.

Verified at 1600×900. Each word first lit at:
* line 1: एक .27, लड़का .48, उछलकर .80, बोला 1.39, मैं 2.33, पकड़ूँगा 2.70, सारे 3.17s;
* line 2: फिर .26, लड़के .44, भी .82, दौड़ 1.10, पड़े 1.42, आगे-आगे 2.03, गुब्बारे 2.79s.

Each is within a few hundredths of its spoken start. No errors.

---

## Round 114 — the hint GIF is back on the 3rd wrong answer; “सही शब्द चुनिए” said once

**Asked:**
* On the सही-शब्द-चुनिए screens the 3rd wrong answer used to show Swiftie's HINT animation in the
  header bar. It had disappeared, and it was never asked to go.
* With the hand nudge, “सही शब्द चुनिए” should be said ONCE, not over and over.
* Standing instruction: change only what is asked, nothing else.

* **Why the GIF went.** Rounds 107/108 (Swiftie's mood face only while a voice line plays) also
  caught the 3rd attempt, which sets the hint mood with no voice line, so it fell back to the
  default face. Now the hint mood keeps its animation with or without a voice, as before Round 107.
  Everything else from 107/108 is unchanged.
* **Said once.** On the 3rd wrong answer (correct option lit, the others faded, the hand on the
  answer) Swiftie says “सही शब्द चुनिए” once. After that nothing repeats on that question. Two
  reminders had to be silenced:
  * the game's own inactivity reminder: its voice is off from then on, its visual pulse stays;
  * the engine's one-per-slide idle prompt replay: marked as used.
  Both reset on the next question.

Verified at 1600×900 on Q2 with three wrong answers:
* after the 3rd, only the error sound and one “सही शब्द चुनिए”;
* nothing more in the next 27s;
* the hint animation and the hand stayed on throughout;
* no errors.

---

## Round 115 — the optimisation checklist, re-run on the current lesson

**Asked:** the full optimisation checklist again (formats, preloader, media watchdogs, GPU,
unused code/files, verification). Round 99 did it once; since then Rounds 100–114 added a new hull,
window, motor sound, two recordings, a hand patch and code changes. So this round re-audits every
section against the current files, fixes the drift, and re-verifies.

**Drift found and fixed:**
* `assets/UI/submarine-sentence-window-v2.svg` was no longer used (v4 replaced it in Round 100); it
  was moved to `../_quarantine_unused_assets/unreferenced`.
* `@keyframes subgSlot` (the Round-89 slot breathing; the slot now has `animation:none`) was
  removed from `ocean-games.css`.
* The preloader's size table was regenerated: 142 files, 19.38 MB.

**Already in order (checked, nothing to change):**
* **Formats:** only WebM, Ogg Opus, WebP and SVG in assets. Every file added since Round 99 was
  converted at the time and is smaller than its source (hull PNG 1.3 MB → WebP; motor MP3
  1.2 MB → 82 KB; WAVs → Ogg).
* **References:** no live reference to an old extension, and none to a missing file. The only data
  URIs are the two subset fonts and the Opus pop sound.
* **Dead code:** no unreferenced function (acorn, to a fixed point). No unmatchable CSS rule or unused
  custom property; the JS-built class fragments (`tri-`, `opt_`, `thm-`) are respected.
* **Media watchdogs:** the new voice lines go through the protected `play()`; the motor sound gates
  no UI.
* **GPU:** unchanged since the Round-99 audit.
* **Files:** no junk files, and `.deployignore` is current.

**Verified** (headless Chromium, local HTTP; the harness was rebuilt, as the scratchpad had been
cleared):
* **Crawl at 1920×962:**
  * the bar from 1%, monotonic; Play only after 100% (10.5s, after the intro);
  * every gated control appeared (T1…C4 Next 5–13s, end button);
  * zero 4xx/5xx, failed loads, console errors, page errors and broken media;
  * screenshots of the key states checked.
* **Throttled to ~4 Mbit/s:** 0 → 8% (6.8s) → 49% (20s) → 100% at 39.3s, monotonic. Small files
  landed first (86 of 142 by 6.8s), and Play appeared at 100%. Zero errors.
* **Failure modes:**
  * every fetch fails → still 100% and Play, and the lesson runs (0 broken images);
  * one transfer hangs → aborted at 15.9s, Play;
  * `file://` → instant;
  * corrupt blob → falls back to the file (8.13s clip decodes);
  * landing intro hangs → Play at 13.2s, no VO lock.
* **Full playthrough:** landing → all 18 screens → end button in 218s, with zero errors, 4xx/5xx or
  broken media.

**Payload now 19.24 MB** (the original was 96.05 MB, −80%):

| | files | size |
|---|---|---|
| video | 3 | 4.45 MB |
| audio | 79 | 4.70 MB |
| images | 60 | 9.33 MB |
| HTML | 1 | 0.69 MB |

---

## Round 116 — poem pair words light up only when they are spoken

**Asked:** in the whole poem section the pair words must NOT be pre-highlighted.
* Each line first appears in blue, and the words turn orange one by one as they are spoken (the
  bounce).
* गुब्बारा, गुब्बारे, सहेली, सहेलियाँ, लड़का, लड़के… turn orange only when the voice reaches them, and
  stay highlighted from then on.

* **Starting state.** `.hl-orange` now inherits the line's navy, so nothing is orange before it is
  spoken. This replaces Round 111's pre-highlight.
* **When spoken.** The word walk marks a pair word `.pair-spoken` the moment it is spoken, and that
  class turns it orange and bold and keeps it so. A replay of the line clears it, so the pair is
  earned again.
* Ordinary words still flash orange only while spoken, then return to blue. The bounce, sync and
  colour (#FF8A00) are unchanged from Rounds 110/113.

Verified at 1600×900 on all five poem pages (T1, T1B, T2, T3, T4): the first pair word was blue
before it was spoken, orange while spoken, and still orange after; other words were back to blue. No
errors.

---

## Round 117 — a lit pair word stays lit into the next line

**Asked:** once a pair word has lit up (e.g. लड़का in line 1), it must STAY highlighted. It went
back to blue when the next line started. Once lit, it stays lit for the whole poem section.

* **Why.** Before each new line, the page stops the previous line's word walk (`reset`). That
  reset also removed Round 116's `.pair-spoken`.
* **Fix.** The reset still stops the moving highlight, but no longer clears `.pair-spoken`. A pair
  word, once spoken, keeps its orange-bold for the rest of the page.

Verified at 1600×900:
* when line 2 starts, line 1's pair word is still orange on T1 (गुब्बारा), T2 (लड़का), T3 (टोपी,
  टोपियाँ) and T4 (सहेली), and line 2's is still blue;
* when the page is done, both are orange;
* no errors.

---

## Round 118 — the bubble game's gate says "चलिए, अब आपकी बारी।"

**Asked:** before the bubble game, the gate must say "चलिए, अब आपकी बारी।" instead of "चलिए, साथ
में करें।". This reverses Round 97.

* **Gate.** PAIR1 `gate_before` is back to "practice" (in the embedded card and in `card.json`).
  `PHASE_GATE_TITLE.practice` = "चलिए, अब आपकी बारी।". Only this gate reaches it.
* **VO.** No new VO was generated. The new `review_practice_gate.ogg` (2.44s) joins two existing
  clips in the same voice:
  * "चलिए," from `review_guided_gate.ogg` (0–0.98s);
  * "अब आपकी बारी।" from `vo_pt_practice.ogg` (from 1.15s; its "वाह!" is dropped).
  
  Both cuts sit in silence. The runtime override points `vo_pt_practice` at it. The preload
  manifest was regenerated.

Verified: Q6 → gate "चलिए, अब आपकी बारी।" plays `review_practice_gate.ogg`, the text fits, and
PAIR1 mounts. The gate before Q1 is unchanged ("चलिए, साथ में करें।"). No errors.

---

## Round 119 — the new poem, with the user's four recordings

**Asked:** replace the poem section with the new four-stanza text, using the four recordings
`Downloads/audio_1 (3)…(6).wav`.

* **Which file is which stanza.** (3) गुब्बारा, (4) हवा/लड़का, (5) टोपी, (6) सहेली. This was matched
  from each file's pause pattern against the stanza's commas.
* **Clips.** Each file was split in the middle of its line-break pause into an a/b clip, one per
  line, as before. They are saved as Opus, 48 kHz, 44 kbps, under the beat keys `vo_stanza1a/1b`
  (T1), `3a/3b` (T2), `4a/4b` (T3) and `5a/5b` (T4); the engine builds a beat's path from its key.
  Loudness already matched the old clips, so there was no gain change.
* **Text.** One line per beat, with the pair word starred, in the embedded card and `card.json`
  (lines and audio_text alike):
  * T1: "आज है मीरा का जन्मदिन, उसने एक *गुब्बारा* लगाया," / "पापा और *गुब्बारे* लाए, मिलकर घर सजाया।"
  * T2: "तभी हवा का झोंका आया, *लड़का* दौड़कर आया," / "पीछे-पीछे *लड़के* दौड़े, सबने फिर हाथ बढ़ाया।"
  * T3: "मीरा की एक *टोपी* उड़कर हवा में लहराई," / "फिर सबकी *टोपियाँ* उड़ीं और सबने दौड़ लगाई।"
  * T4: "केक कटा, खुश हुई एक *सहेली* प्यारी," / "संग नाचीं *सहेलियाँ*, बाजाएँ तालियाँ ढेर सारी।"
    "बाजाएँ" is kept exactly as the user typed it.
* **T1B (the old hawa page) is removed.** Its line "तभी हवा का झोंका आया" now opens stanza 2 on T2.
  The flow is T1 C1 T2 C2 T3 C3 T4 C4 …
* **T3 override cleaned up.** T3's runtime overrides (r98 line, r105 `review_topi_final_v2`,
  `reveal_next_ms`) are removed. टोपी and टोपियाँ now sit one per line.
* **Quarantined.** The old clips, `vo_stanza_hawa`, `review_topi_final_v2` and `scn_hawa.webp` are in
  `../_quarantine_unused_assets/r119_old_poem/`. The preload manifest was regenerated.
* **Cues.** Every word start was measured from the clips: speech chunks between pauses, then the
  energy dips (stop closures, fricatives) inside each chunk. Each cue is ~30ms ahead of its word, as
  in r113. Word starts:
  * 1a: .28 .66 .85 1.31 1.55 2.64 2.98 3.45 3.90
  * 1b: .26 .82 1.07 1.53 2.34 2.89 3.14
  * 3a: .28 .72 1.19 1.43 1.90 2.74 3.38 3.87
  * 3b: .31 1.13 1.65 2.29 2.91 3.28 3.53
  * 4a: .27 .82 1.09 1.47 1.93 2.65 2.98 3.20
  * 4b: .30 .61 1.16 1.68 2.33 2.65 3.20 3.39
  * 5a: .28 .67 1.45 1.83 2.03 2.24 2.75
  * 5b: .23 .59 1.09 2.03 2.63 3.21 3.65

Verified at 1600×900:
* each page plays its new clips and shows the new text;
* every word first lit within ~20ms of its cue;
* a pair word stays orange into line 2 and both are lit at the end;
* no 404s or errors;
* full playthrough T1 → CEL in 211s, end button shown.

Not changed (not asked): the submarine game's sentence "मीरा ने एक ___ टाँगा।" still uses the
old poem's wording.

---

## Round 120 — the compare screens recap the new poem

**Asked:** after a poem page, the compare screen (गुब्बारा | गुब्बारे) still recapped the OLD poem
("मीरा ने एक गुब्बारा टाँगा…"). It must say the new poem's lines, and the same goes for every pair.

* **What changed.** Only the four recap clips `vo_cmp_*_1` were on old wording. Each was rebuilt
  from the user's new stanza recordings: the two half-lines that hold the pair words. That is the
  same voice, nothing generated. Each clip has ~0.27s lead and 0.25s tail silence.
  * C1 gubbara: "उसने एक गुब्बारा लगाया, पापा और गुब्बारे लाए।" (4.57s), from (3) 2.56–4.70 + 5.02–6.92.
  * C2 ladka: "लड़का दौड़कर आया, पीछे-पीछे लड़के दौड़े।" (4.03s), from (4) 2.68–4.36 + 4.76–6.58.
  * C3 topi: "मीरा की एक टोपी उड़कर हवा में लहराई, फिर सबकी टोपियाँ उड़ीं।" (5.94s), from (5)
    0.25–3.84 + 4.24–6.06.
  * C4 saheli: "केक कटा, खुश हुई एक सहेली प्यारी, संग नाचीं सहेलियाँ।" (5.28s), from (6) 0.25–3.28 +
    3.54–5.26.
* **Text.** `audio_text` is updated in the card and `card.json`. The screen times each word card's
  reveal from the recap text's character position, so the text must match the clip.
* **Unchanged.** The "एक है तो …, अनेक है तो …" explain clips were already correct.
* **Quarantined.** The old clips are in `../_quarantine_unused_assets/r120_old_recap/`. The preload
  manifest was regenerated.

Verified: C1–C4 each play the new recap, then the explain clip. The cards appear at:

| Screen | Singular | Plural |
|---|---|---|
| C1 | गुब्बारा .76s | गुब्बारे 3.19s |
| C2 | लड़का .00s | लड़के 2.77s |
| C3 | टोपी 1.05s | टोपियाँ 4.51s |
| C4 | सहेली 1.94s | सहेलियाँ 4.33s |

This is on or a little ahead of each spoken word (the reveal timing is the screen's existing
text-position rule, unchanged). No errors or 404s.

---

## Round 121 — title screen: no star, no shell, a slightly bigger title

**Asked:** on the title screen, remove the yellow star above "मीरा" and the purple shell right of
"जन्मदिन"; only the text stays. Also make the "मीरा का जन्मदिन" title a little bigger.

The title is baked into `assets/UI/title_swifty_swimming.webm` (1920×1080, 30fps, 10s). The
title_art image is hidden on this screen and is a different design. So the video itself was
re-rendered frame by frame, with the same file name and no code change.

* **Star** (frame x 736–797, y 56–115; static ±2px). It sat on sloping bands: water, plate rim,
  plate fill, navy outline, yellow headline. Each column under it is a piecewise morph between the
  columns just left (x 727) and right (x 806) of it. The band edges (rim / navy / yellow) are
  detected per frame and matched, so every band continues at its own slope. The water above it
  stays animated.
* **Shell** (x 1308–1376, y 198–262) and the little plate lobe that only held it were removed. That
  area gets the same frame's water from 80px to the right, with a 3px feathered edge.
* **Bigger title.** The plate (text + its bubbly blue plate) is scaled 1.15× about its centroid
  (951, 150) and laid over the frame with a 2px soft edge. The new title spans ~x 489–1441,
  y 42–286; the old one was 549–1377, 49–268.
  * The plate mask was traced from the plate's dark rim outline, cleaned with opening, closing
    (r 8) and hole fill, and lies inside the 1.15× copy, so the old title never shows through.
  * The small pink sparkle by न is kept, since it was not asked to be removed.
  * Meera's head stays clear in every frame.
* **Encoding.** VP9, crf 30 / 2.4M cap, original Opus audio copied; 2.29 MB, the same as before.
  The original is in `../_quarantine_unused_assets/r121_old_title/`. The preload manifest was
  regenerated.

Verified:
* 10 frames across the clip, all clean;
* the landing screen in Chromium: video plays, no errors (screenshot checked).

---

## Round 122 — the submarine game reads both lines once a pair is done

**Asked:** in the submarine game, once BOTH sentences of a pair are filled in correctly, a voice
line repeats the two lines. The user's recordings are `Downloads/audio_1 (12/13/15/16).wav`.

* **Which file is which pair.**
  * Found by keyword spotting (MFCC + DTW against the existing word clips): (13) = m1 मछली (मछली
    @1.86s, मछलियाँ @5.64s) and (15) = b3 केला (केला @1.56s, केले @5.38s).
  * Confirmed by the user: (12) = l1 लड़का and (16) = p3 पौधा.
  * g1 (गुब्बारा) and t3 (टोपी) have no recording. As the user chose, they stay as before, with no
    voice line.
* **Clips.** `assets/Audio/sub_lines_{l1,m1,b3,p3}.ogg` are the recordings as delivered (Opus,
  48 kHz, 44 kbps, 5.9–6.8s). Each voiced pair carries `"vo"` in the embedded card and `card.json`.
* **Behaviour.** When the second blank of a pair is filled, the board stays locked and the idle
  timer is reset. After the usual 450ms the correct-sound has played and Swiftie reads the clip
  (talking face). Then the next pair comes after 450ms, as before. Pairs without `vo` take the old
  path unchanged.
* The preload manifest was regenerated.

Verified: the whole game played through in Chromium. Each clip played exactly once, right after
its own pair, with the board locked. The game then left to CEL. No errors.

**Round 122b — the last two recordings.**
* The user sent `audio_1 (14).wav` and `(17).wav`. Keyword spotting identified them:
  * (14) = g1 गुब्बारा (गुब्बारे @4.94s, cost 1.58 — the strongest match of any file);
  * (17) = t3 टोपी (सहेलियों @3.22s at the start of the second sentence, टोपियाँ @4.98s).
* Added as `sub_lines_g1.ogg` (6.41s) and `sub_lines_t3.ogg` (6.65s), with `"vo"` in the card and
  `card.json`. All six pairs now read their lines. The preload manifest was regenerated.
* Verified: all six clips played once each, right after their own pair, board locked, no errors.
  This run stopped at the test loop's iteration limit after the last pair, so the exit to CEL was
  not re-observed here; it was observed in the r122 run above.

---

## Round 123 — the submarine read-back bounces word by word, like the poem

**Asked:** while Swiftie reads the two lines (r122), the words must highlight with the same bounce
as the poem's word walk.

* **Same rule as the poem's `storyTypeSync`.**
  * The spoken word turns #FF8A00 and scales to 1.10, 0.15s each way (`.subg .subg-vw.is-speaking`
    in `ocean-games.css`).
  * The word lit is the last one whose cue has passed, held max(220, min(620, gap − 40))ms, on the
    clip's own clock.
* **Word spans.** `readLines()` splits each row's chunks into word spans at read time, including the
  clue words and the placed answer. The एक sentence is read first (as recorded), whichever row it
  sits in.
* **Cues.** `pair.vo_cues_ms = [एक cues, अनेक cues]`, in the card and `card.json`, one per word,
  ~30ms ahead of the word. They were measured from the clips as follows:
  * pause chunks;
  * syllable peaks;
  * closure dips (त before सारे/सारी, क/ख/प/ट before केले/खा/पहनी/टोपियाँ);
  * keyword anchors where reliable (मछली 1.87, टोपियाँ 5.33).
* **Bug fixed while testing.** The split regex lost its backslash (`/(s+)/`), so "तालाब में" stayed
  one span and that line's cue count did not match. It was fixed to `/(\s+)/`.

Verified, with the whole game played in Chromium: all 71 words of the six pairs lit in order at
their cues (e.g. मछलियाँ 5.53s, टोपियाँ 5.32s). The game left to CEL. No errors. The screenshot shows
मछलियाँ orange and lifted.

---

## Round 124 — read-back in sync, always from the top line

**Asked:**
1. The voice and the highlight were out of sync: she said one line while the other line lit.
2. Whichever line the child fills first, the voice and the highlight always start from the TOP line.

* **Cause of (1).** r123 assumed every recording reads the एक sentence first. Three do not: लड़का
  (12), पौधा (16) and गुब्बारा (14) read the अनेक sentence first. Re-checked from the pause structure:
  * a long unbroken first sentence (11 / 9 / 10 syllable peaks);
  * then "मैदान में | एक लड़का…", "गमले में | एक पौधा है", "मीरा ने एक | गुब्बारा टाँगा".

  गुब्बारा now sits at 4.78s, which agrees with the keyword match (4.94s). Those three were
  re-aligned to the right sentences.
* **Fix for (2).** Each recording is cut at the middle of its between-sentence pause into one clip
  per sentence: `sub_lines_<id>_{one,many}.ogg`, 0.25s lead, 0.3s tail. In the card and
  `card.json`:
  * `pair.vo = { one, many }`;
  * `pair.vo_cues_ms = { one, many }`, each on its own clip's clock.

  `readLines()` plays the top row's clip with its word walk, waits 250ms, then plays the bottom
  row's. The bounce is unchanged.
* **Quarantined.** The six whole-pair clips are in `../_quarantine_unused_assets/r124_whole_line_clips/`.
  The preload manifest was regenerated.

Verified: the whole game played in Chromium, with the bottom blank filled first on half the pairs.
Every pair lit row 0 (top) with the top clip first, then row 1 with its own clip. Each word lit at
its cue, e.g. "r0 g1_many पापा .22 … गुब्बारे 1.31", "r1 g1_one … गुब्बारा 1.26". The game left to
CEL. No errors.

---

## Round 125 — submarine questions arrive line by line, words and circle together

**Asked:** when the submarine arrives, the empty circles showed first and the words followed.
Instead, the first line should arrive together with its empty circle, with a soft bounce-pop.
Then the second line arrives the same way. It should look smooth.

* `putWords` now keeps both lines hidden (`.row-wait`, opacity 0, and the words' own scale-in
  switched off) while it builds them. The words are placed at full size inside the hidden line.
* Each whole line then pops (`.row-pop`): scale .6→1.06→.98→1 with a fade in, 0.56s. The top line
  starts at 40ms and the bottom line 420ms later.
* The circles start their usual pulse, and the board unlocks, 120ms after the second pop ends.
* Under reduced motion it is a plain 0.3s fade.
* This runs for every pair, since every pair goes through `putWords`, not only the first one after
  the submarine arrives.

Verified in Chromium:
* the per-frame timeline shows both lines at opacity 0 (circles included); the top line rises
  0.60→1.06→0.98→1.00, then the bottom line follows the same curve 420ms later;
* screenshots at 150 / 600 / 1500ms;
* two full playthroughs reached CEL, the read-back still starts from the top line, no errors.

---

## Round 126 — the line panels stay hidden while the submarine arrives

**Asked:** while the submarine glides in, the two light-blue line panels inside its window must
not show. They appear only with the question's pop.

* The two `.subg-sentence-row` elements are now created with `row-wait`, so they are at opacity 0
  from mount. The first `row-pop` (r125) is their first appearance. Nothing else changed.

Verified:
* the per-frame timeline has both rows at opacity 0 from mount until the first pop;
* a screenshot 2.5s into the glide shows the window empty;
* a full playthrough reached CEL with no errors.

---

## Round 127 — two new poem images

**Asked:** replace the current images with the two supplied ones.

* `scn_topi_p.webp` (T3 line 2 and C3) is now three children with three flying party hats; it was
  four of each.
* `scn_gubbara_s.webp` (T1 line 1 and C1) is now Meera taping the balloon to the wall, without the
  bunting.
* Both are the user's WebP files as supplied (1672×941, the same size as before), so there was no
  code or data change. The old images are in `../_quarantine_unused_assets/r127_old_images/`. The
  preload manifest was regenerated.

Verified: T1, C1, T3 and C3 each show the new image (loaded, 1672px wide), no errors, screenshots
checked.

**Round 128 — the टोपी image without the bunting.**
* Asked: the Meera image on the टोपी screen should also be without decoration. That is
  `scn_topi_s.webp` (T3 line 1 and C3).
* No new file was supplied, so the bunting (x 0–720, y 0–180) was painted out of the current image:
  * the bunting is the non-wall pixels in that zone, dilated 5px;
  * they were filled with a smooth wall-colour surface (a quadratic in x and y, per channel) fitted
    to 43k clean wall samples around it, mean error 0.7 levels per channel;
  * the edge is feathered over 3px.
* Nothing else in the picture changed. Saved as WebP q90, 1672×941. The old file is in
  `../_quarantine_unused_assets/r127_old_images/`. The preload manifest was regenerated.
* Verified: C3 and T3 show it (loaded), no errors, screenshot checked.

---

## Round 129 — Q1 intro: the fish pulse with the words, then the hand

**Asked:** in the first सही-शब्द-चुनिए screen, Swiftie says "एक है तो मछली, अनेक हैं तो मछलियाँ".
* At "एक है तो मछली", the single fish and its word pulse together.
* At "अनेक हैं तो मछलियाँ", the four fish pulse.
* Only after that pulse does the hand go to the answer मछलियाँ. Before, it came at 'मछलियाँ' itself.

Implementation:
* The word starts were measured in `review_pick_intro_v2.ogg`: मछली 2.70s (before the छ closure at
  2.86) and मछलियाँ 4.45s (after the तो closure at 4.36).
* The screen's own pulse is used (pvwPulse, .9s × 2 = 1.8s) on `.src-qty` + `.pvw-src`, then on
  `.tgt-qty`. The hand follows 1.8s after the plural pulse starts.
* If the clip ends or fails before 4.45s, its end still runs the plural pulse and then the hand.
  Replaying the intro resets both.
* The hand timer is cleared on cleanup.
* Note: a `sed -i` here turned the file's CRLF into LF. It was restored to CRLF (6121, no lone LF).

Verified in Chromium:
* single fish + मछली pulse at vo 2.73s;
* four fish pulse at vo 4.45s;
* the hand appears at 6.37s on the wall clock, after the pulse, with no hand before;
* no errors.

---

## Round 130 — submarine: the answer bubbles come after both lines

**Asked:** the two answer options must appear only after both lines (top, then bottom) have come in.

* `showQuestion` now calls `putOptions` inside `putWords`' completion (after the second line's
  pop), instead of before it.
* The board opens, or on the first question the instruction starts, 640ms later, once the bubbles'
  own pop-in (140 + 140 + 340ms) is done. Nothing else changed.

Verified in Chromium (first question):
* line 1 complete at 5.05s and line 2 at 5.44s;
* bubble 1 in at 6.03s and bubble 2 at 6.16s;
* the board unlocked after the instruction.

Two full playthroughs reached CEL, all six read-backs still start from the top line, no errors.

---

## Round 131 — title: the pink sparkle by न removed too

**Asked:** remove the little star over "न" in the title. This is the pink sparkle kept in r121.

* The title video was re-rendered from the original
  (`../_quarantine_unused_assets/r121_old_title/`) with the r121 pipeline plus a sparkle fill:
  * its pink pixels are flooded from a seed, so the न letter behind the navy band stays out, and
    dilated 4px;
  * each frame they are filled by inverse-distance weighting of the light water/bubble pixels
    around them (G ≥ 190, R ≤ 150);
  * this runs before the plate is enlarged.
* The r121 addition of the sparkle to the plate mask was dropped. The plate mask is again the
  rim-outline mask with closing r8, so the bubble beside it now shows whole.
* Same file name and size (2.29 MB). The preload manifest was regenerated.

Verified:
* 10 frames across the clip: no sparkle, no patch at natural size;
* the landing video plays in Chromium, no errors.

---

## Round 132 — four fixes: bubble taps, swim sound, bigger answer bubbles, gate words in sync

1. **Bubble game intro.** Asked: no tap while the VO explains, but the moment the pair lights up
   (the nudge), taps must work. Before, the board stayed locked to the end of the line, so a right
   tap on the glowing pair did nothing.
   * `walkPair(one, many, onLit)` now calls `onLit` once, when the first bubble lights.
   * The intro passes an unlock there; the line plays on.
   * Taps before the glow stay ignored.
2. **Swim transition.** Asked: a bubbles sound while Swiftie swims across.
   * The kit has no bubble/underwater SFX, so `assets/Audio/sfx_swim_bubbles.ogg` (3.8s) was
     synthesised: 14 rising-pitch bubble blips over a soft low water swell, edges faded.
   * `oceanFishTransition` plays it with the video (`playKitSfx`, vol .6; it respects mute).
3. **Submarine answer bubbles bigger.** Asked so that the word is bigger.
   * The bubble is 150px (was 120) and the face 140px (was 112).
   * `fitBubble` starts at 36px (was 28), fits within 116px, min 22.
   * Over a slot, the label scale is .55 (was .69), so it still fits the 74px slot face.
   * The ghost lands at scale .533 (80/150).
4. **Gates.** Asked: in चलिए शुरू करें / चलिए, साथ में करें / चलिए, अब आपकी बारी, the words and the VO
   come together.
   * The title is built as word spans. Each word writes itself in (the same left-to-right pgWipe,
     0.32s per word) when the clip's clock reaches it. The box itself no longer wipes as a whole.
   * `GATE_WORD_CUES`, measured from pauses, closures and syllable peaks:

     | Gate | Clip | Word starts |
     |---|---|---|
     | शुरू करें | `vo_pt_tutorial` | चलिए 3.30, शुरू 3.89, करें 4.20 |
     | साथ में करें | `review_guided_gate` | चलिए .33, साथ 1.19, में 1.58, करें 1.80 |
     | अब आपकी बारी | `review_practice_gate` | चलिए .33, अब 1.17, आपकी 1.30, बारी 1.60 |

   * r82's tutorial-only phrase cue is folded into this.
   * If the clip does not play, or a gate has no table, the whole line shows at once. Closing the
     gate always leaves the whole line up.

Verified in Chromium:
* **Gates.** Words in at:
  * tutorial: चलिए 3.30, शुरू 3.87, करें 4.20;
  * guided: .31 / 1.19 / 1.57 / 1.77;
  * practice: .34 / 1.18 / 1.29 / 1.59.
* **Bubble intro.** Unlocked at vo 5.20s, the same frame the glow appears; locked before.
* **Swim.** `sfx_swim_bubbles.ogg` starts with the swim video.
* **Submarine.** Bubbles 150px with the word at 36px, clear of the submarine (screenshot). A full
  submarine game by drag reached CEL.
* **Full lesson.** T1 → CEL in 247s, no 4xx/5xx, no errors, no broken media.

---

## Round 133 — gate titles reverted to their own style; sync only checked

**Asked:** the r132 word-by-word gate text was not wanted. Keep the gates' own style and only check
whether the text and the VO are in sync.

* **Reverted** r132 item 4 completely:
  * no `GATE_WORD_CUES`, no word spans, no per-word CSS;
  * the whole line wipes in again (pgWipe 0.9s);
  * the tutorial gate waits for its phrase at 3.15s, as before.

  Items 1–3 of r132 are untouched.
* **Sync check, original style, nothing changed:**

  | Gate | Wipe runs | Speech |
  |---|---|---|
  | चलिए, शुरू करें! | VO 3.19 → 4.09s | 3.30–4.44 |
  | चलिए, साथ में करें। | VO 0.00 → 0.90s | चलिए .33–.77, साथ में करें 1.19–2.08 |
  | चलिए, अब आपकी बारी। | VO 0.00 → 0.90s | चलिए .33–.77, अब आपकी बारी 1.17–2.03 |

  * शुरू करें: in sync. The text starts 0.1s before the voice and is written while she says it.
  * साथ में करें and अब आपकी बारी: the line is fully written before she has finished "चलिए" (about
    1.2s ahead of the voice).

  Reported to the user; nothing changed without their go-ahead.

---

## Round 134 — submarine answer bubbles centred on the screen

**Asked:** move the two bubble options slightly right so they sit in the middle of the screen.

* They sat exactly 60 stage-px left of the screen's centre. `.subg .subg-opts` had
  `left:calc(50% - 60px)` and its content centres on that left edge.
* It is now `left:50%` (in `ocean-games.css`). Nothing else changed.

Verified:
* at 1887×926 and 1333×750, the pair's midpoint equals the viewport's midpoint (offset 0);
* a full submarine game by drag reached CEL, no errors.

---

## Round 135 — end screen: faint box beside Swiftee removed

**Asked:** remove the strange semi-transparent background beside Swiftee on the end screen.

* Not in the art: both `swiftee_end_talk.webp` and `swiftee_end_pause.webp` have alpha that is
  only 0 or 255, and `end_screen.webp` is clean.
* The strips' straight vertical edges fall exactly on the mascot image's box edges. The source is
  `.end-mascot`'s `filter:drop-shadow(0 12px 22px rgba(0,47,118,.22))`: the GPU clips the navy blur to
  the image box, which reads as a translucent panel.
* `.end-screen .end-mascot` now sets `filter:none`. That rule only affects the end screen; nothing else
  changed.

Verified in the browser pane:
* the computed filter is `none`;
* the end screen still plays the talk animation, then swaps to the pause pose;
* no console errors.

---

## Open items

**Checklist gaps from Round 58** (18 fails, 7 partials), in rough priority order: end screen uses
the DO-NOT-USE animation and a non-standard line; no standard background music anywhere; title flow
order (intro before Play, speaker active during VO, Play still, Meera and the mascot moving); no
guided-practice section, Q1–Q6 give no help on the first wrong answer and never lock wrong options,
and their order has no difficulty ramp; gate text shows about 5s before the VO says it; Next has no
visible disabled state and no pulse; both games tint wrong answers red-pink. Three of these conflict
with earlier instructions and need a decision before they change.

**Unused since Round 55:** `assets/UI/ui_level2_done.png` — the supplied *स्तर 2 पूरा हुआ* artwork.
It belonged to the end of the removed level; the new स्तर 2 is the last level and ends on the
summary, as the old स्तर 3 did. Left on disk as supplied art. If a *स्तर 2 पूरा हुआ* beat is wanted
before the summary, this is the image for it.

1. ~~**Recorded Hindi VO**~~ **Delivered (found in Round 58)** — all 59 `vo_*.ogg` clips listed in
   [VO_SCRIPT.md](VO_SCRIPT.md) are now in `assets/Audio/`, and none is silent (59 since Round 78:
   `vo_stanza1`/`vo_stanza2` became `vo_stanza1a`, `vo_stanza1b` and `vo_stanza_hawa`, cut from the
   old recordings — घर में खूब तैयारी and माँ ने बाँधी झालर प्यारी were dropped, so a re-record must keep
   that split). Still missing for the checklist: `vo_pt_guided` (no guided section exists yet) and a
   standard end-screen line. Check whether `vo_well_done` says बच्चा-बच्चे (see Round 58).

2. **सहेली story art** — `scn_saheli_s` / `scn_saheli_p` are missing scene pictures; the deck
   supplied none for that stanza. Compositing them from other frames was attempted and rejected
   (the source girl holds a balloon that belongs to the background, so the clones looked wrong).
   Needs real art: *a simple flat 2-D birthday-room illustration, cream wall and wood floor to
   match the existing scenes — one happy girl beside a cut cake for the singular, and several
   girls dancing together for the plural.*
3. ~~**Object icons** render as emoji.~~ **Done in Round 31** — every `obj_*` key in the
   manifest now has real, background-free art behind it, and no emoji fallback is reachable
   anywhere in the lesson.

4. **लड़के scene** — usable, but the three boys are one character repeated. Replace if distinct
   characters matter.
