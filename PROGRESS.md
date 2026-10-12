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

1. ~~**Recorded Hindi VO**~~ **Delivered (found in Round 58)** — all 58 `vo_*.ogg` clips listed in
   [VO_SCRIPT.md](VO_SCRIPT.md) are now in `assets/Audio/`, and none is silent. Still missing for
   the checklist: `vo_pt_guided` (no guided section exists yet) and a standard end-screen line.
   Check whether `vo_well_done` says बच्चा-बच्चे (see Round 58).

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
