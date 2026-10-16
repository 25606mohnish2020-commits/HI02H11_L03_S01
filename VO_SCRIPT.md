# VO recording script — HI02H11_L03_S01

**59 lines.** Deliver one audio file per line, named exactly `<id>.ogg`, into
`assets/Audio/`. The build picks them up automatically — no code change is needed for any of them.

Every line is reconciled against the review deck (`*_review.pptx`): the landing line is deck p.3,
the poem stanzas pp.4/6/8/10, the comparison VO 1 / VO 2 pairs pp.5/7/9/11, the question
instruction and its correct-answer line pp.12-17, the second-attempt retry line p.18, and the
closing recap p.19. Two places the deck and the game differ on purpose. The opening poem page is
two lines and the gust line has a page of its own (asked in Round 78); their three clips —
`vo_stanza1a`, `vo_stanza1b`, `vo_stanza_hawa` — were cut from the original stanza recordings, so a
re-record should keep that split. And the deck's closing line still reads बच्चा-बच्चे, which the deck
itself renamed to लड़का-लड़के earlier on — the game says लड़का-लड़के.

**The two end games are already voiced and are NOT in this list.** The bubble game and the submarine
game speak from `assets/ocean-vo-config.js`, which carries seven recorded clips in the
hi-IN-SwaraNeural voice. Its one gap is `ocean_instruction_pick.mp3` — "सही शब्द चुनिए।" — which
the सही-शब्द-चुनिए screens borrow for their idle reminder.

Speaker: Swifty (the lesson mascot). Audience: Grade 2. Read at an unhurried pace with clear
articulation; the lesson's timing already leaves a pause after every line.

Text is authoritative as written here and in `card.json` → `assets.audio_text`. If a line needs
rewording, change it in `card.json` so the on-screen text and the recording stay identical —
several screens display the line they speak.

Slide ids match `card.json`: **T1, T1B, T2-T4** poem pages (T1B is the wind-gust page), **C1-C4**
comparison screens, **Q1-Q6** सही-शब्द-चुनिए, **PAIR1** the bubble game (one continuous screen, all seven
pairs), **SUB** the submarine game (the sentence rides in one long window along its hull; two स्तर,
twelve sentences on one screen), **CEL** the closing screen.

*Generated from `card.json`. Regenerate after any content change — do not hand-edit.*


## Landing & phase gates

| file | status | line | used on |
|---|---|---|---|
| `vo_landing.ogg` | नमस्ते दोस्त! आज हम मीरा की कविता से एक और अनेक के बदलते शब्द-रूप सीखेंगे। | landing screen |
| `vo_pt_tutorial.ogg` | ध्यान से देखिए और मेरे साथ जानिए। चलिए, शुरू करें! | phase gate → tutorial |
| `vo_pt_practice.ogg` | वाह! अब आपकी बारी। | phase gate → practice |


## Poem — story pages

| file | status | line | used on |
|---|---|---|---|
| `vo_stanza1a.ogg` | आज है मीरा का जन्मदिन, मीरा ने एक गुब्बारा टाँगा। | T1 · stanza |
| `vo_stanza1b.ogg` | पापा और गुब्बारे लाए, आओ, इन्हें सजाएँ! | T1 · stanza |
| `vo_stanza_hawa.ogg` | तभी हवा का झोंका आया, फुर्र-फुर्र गुब्बारे उड़ते जाएँ! | T1B · stanza |
| `vo_stanza3a.ogg` | एक लड़का उछलकर बोला, मैं पकड़ूँगा सारे! | T2 · stanza |
| `vo_stanza3b.ogg` | फिर लड़के भी दौड़ पड़े— आगे-आगे गुब्बारे! | T2 · stanza |
| `vo_stanza4a.ogg` | मीरा की एक टोपी उड़ी, फिर उड़ीं सबकी टोपियाँ। | T3 · stanza |
| `vo_stanza4b.ogg` | आखिर सबने पकड़ ही लीं, अपनी-अपनी टोपियाँ। | T3 · stanza |
| `vo_stanza5a.ogg` | केक कटा, खुश हुई एक सहेली, झूम-झूम नाची वह अलबेली। | T4 · stanza |
| `vo_stanza5b.ogg` | ताली बजी, गूँजीं खूब तालियाँ, संग-संग नाचीं सारी सहेलियाँ! | T4 · stanza |


## शब्दों की तुलना

| file | status | line | used on |
|---|---|---|---|
| `vo_cmp_gubbara_1.ogg` | मीरा ने एक गुब्बारा टाँगा, पापा और गुब्बारे लाए। | C1 · recap |
| `vo_cmp_gubbara_2b.ogg` | एक है तो गुब्बारा, अनेक है तो गुब्बारे। | C1 · explain |
| `vo_cmp_ladka_1.ogg` | एक लड़का उछलकर बोला, फिर लड़के भी दौड़ पड़े। | C2 · recap |
| `vo_cmp_ladka_2b.ogg` | एक है तो लड़का, अनेक है तो लड़के। | C2 · explain |
| `vo_cmp_topi_1.ogg` | मीरा की एक टोपी उड़ी, फिर उड़ीं सबकी टोपियाँ। | C3 · recap |
| `vo_cmp_topi_2b.ogg` | एक है तो टोपी, अनेक है तो टोपियाँ। | C3 · explain |
| `vo_cmp_saheli_1.ogg` | केक कटा, खुश हुई एक सहेली, संग-संग नाचीं सारी सहेलियाँ! | C4 · recap |
| `vo_cmp_saheli_2b.ogg` | एक है तो सहेली, अनेक है तो सहेलियाँ। | C4 · explain |


## सही शब्द चुनिए (practice)

| file | status | line | used on |
|---|---|---|---|
| `vo_pick_prompt.ogg` | सही शब्द चुनिए। | Q1 · prompt<br>Q2 · prompt<br>Q3 · prompt<br>Q4 · prompt<br>Q5 · prompt<br>Q6 · prompt |
| `vo_pick_retry_q1.ogg` | फिर से देखिए—यह एक मछली है। अनेक हों, तो क्या कहेंगे? | Q1 · retry |
| `vo_pick_ok_q1.ogg` | शाबाश! आपने सही शब्द चुना — मछलियाँ। | Q1 · correct |
| `vo_pick_retry_q2.ogg` | फिर से देखिए—यह एक लड़की है। अनेक हों, तो क्या कहेंगे? | Q2 · retry |
| `vo_pick_ok_q2.ogg` | शाबाश! आपने सही शब्द चुना — लड़कियाँ। | Q2 · correct |
| `vo_pick_retry_q3.ogg` | फिर से देखिए—ये अनेक टोपियाँ हैं। एक हो, तो क्या कहेंगे? | Q3 · retry |
| `vo_pick_ok_q3.ogg` | शाबाश! आपने सही शब्द चुना — टोपी। | Q3 · correct |
| `vo_pick_retry_q4.ogg` | फिर से देखिए—यह एक घोड़ा है। अनेक हों, तो क्या कहेंगे? | Q4 · retry |
| `vo_pick_ok_q4.ogg` | शाबाश! आपने सही शब्द चुना — घोड़े। | Q4 · correct |
| `vo_pick_retry_q5.ogg` | फिर से देखिए—यह एक केला है। अनेक हों, तो क्या कहेंगे? | Q5 · retry |
| `vo_pick_ok_q5.ogg` | शाबाश! आपने सही शब्द चुना — केले। | Q5 · correct |
| `vo_pick_retry_q6.ogg` | फिर से देखिए—ये अनेक पौधे हैं। एक हो, तो क्या कहेंगे? | Q6 · retry |
| `vo_pick_ok_q6.ogg` | शाबाश! आपने सही शब्द चुना — पौधा। | Q6 · correct |


## Part 1 — जोड़ियाँ (bubbles)

| file | status | line | used on |
|---|---|---|---|
| `vo_mtp_prompt.ogg` | एक और अनेक वाले शब्दों की जोड़ियाँ ढूँढ़िए। | PAIR1 · prompt |
| `vo_mtp_tap.ogg` | पहले एक शब्द पर, फिर उसकी जोड़ी पर टैप कीजिए। | PAIR1 · tap_hint |
| `vo_mtp_sahi.ogg` | यह सही जोड़ी है। | PAIR1 · sahi |
| `vo_mtp_retry.ogg` | फिर से देखिए। इस शब्द की जोड़ी कौन-सी है? | PAIR1 · retry |
| `vo_mtp_listen.ogg` | इन दोनों शब्दों को सुनिए— | PAIR1 · listen |
| `vo_mtp_now_tap.ogg` | अब इन पर टैप कीजिए। | PAIR1 · now_tap |
| `vo_mtp_done.ogg` | शाबाश! आपने एक और अनेक वाले सभी शब्दों की जोड़ियाँ ढूँढ़ लीं। | PAIR1 · done |


## Single words

| file | status | line | used on |
|---|---|---|---|
| `vo_w_machli_s.ogg` | मछली | Q1 · मछली<br>Q3 · मछली<br>Q5 · मछली<br>PAIR1 · मछली |
| `vo_w_topi_s.ogg` | टोपी | Q1 · टोपी<br>Q3 · टोपी<br>PAIR1 · टोपी |
| `vo_w_machli_p.ogg` | मछलियाँ | Q1 · मछलियाँ<br>PAIR1 · मछलियाँ |
| `vo_w_ladki_p.ogg` | लड़कियाँ | Q1 · लड़कियाँ<br>Q2 · लड़कियाँ<br>Q4 · लड़कियाँ |
| `vo_w_ladki_s.ogg` | लड़की | Q2 · लड़की |
| `vo_w_tali_s.ogg` | ताली | Q2 · ताली |
| `vo_w_saheli_p.ogg` | सहेलियाँ | Q2 · सहेलियाँ<br>PAIR1 · सहेलियाँ |
| `vo_w_topi_p.ogg` | टोपियाँ | Q3 · टोपियाँ<br>PAIR1 · टोपियाँ |
| `vo_w_kela_p.ogg` | केले | Q3 · केले<br>Q5 · केले<br>PAIR1 · केले |
| `vo_w_ghoda_s.ogg` | घोड़ा | Q4 · घोड़ा<br>Q6 · घोड़ा<br>PAIR1 · घोड़ा |
| `vo_w_paudha_p.ogg` | पौधे | Q4 · पौधे<br>Q6 · पौधे<br>PAIR1 · पौधे |
| `vo_w_ghoda_p.ogg` | घोड़े | Q4 · घोड़े<br>Q6 · घोड़े<br>PAIR1 · घोड़े |
| `vo_w_kela_s.ogg` | केला | Q5 · केला<br>PAIR1 · केला |
| `vo_w_paudha_s.ogg` | पौधा | Q5 · पौधा<br>Q6 · पौधा<br>PAIR1 · पौधा |
| `vo_w_gubbara_s.ogg` | गुब्बारा | PAIR1 · गुब्बारा |
| `vo_w_gubbara_p.ogg` | गुब्बारे | PAIR1 · गुब्बारे |
| `vo_w_saheli_s.ogg` | सहेली | PAIR1 · सहेली |


## Shared / other

| file | status | line | used on |
|---|---|---|---|
| `vo_try_again.ogg` | फिर से कोशिश करो। | engine fallback — any wrong answer with no slide-specific retry line |
| `vo_well_done.ogg` | शाबाश! अब तुम जानते हो — गुब्बारा-गुब्बारे, टोपी-टोपियाँ, बच्चा-बच्चे। एक हो तो एकवचन, बहुत सारे हों तो बहुवचन! | CEL · prompt |
