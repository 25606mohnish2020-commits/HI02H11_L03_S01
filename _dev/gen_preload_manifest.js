/* Regenerates the preloader's size table inside HI02H11_L03_S01_poem.html from the files on disk.
   Run after adding, removing or re-encoding anything in assets/:   node _dev/gen_preload_manifest.js

   Every file under assets/ (except the two helper files the page loads with <link>/<script>) is listed
   with its real byte size. Four groups:
   - FIRST: the landing's intro line — fetched before everything else so it is local when it plays.
   - OWNED_MEDIA: a media element that streams by itself (path -> element id); the preloader follows
     its buffered range. Empty since r136: the underwater title video it was made for is gone.
   - OWNED: what the landing markup/CSS requests by itself (measured with a headless crawl). The
     preloader does NOT fetch these a second time; it waits for the page's own request to complete
     (Resource Timing) and counts its bytes.
   - everything else: fetched smallest-first, so small pictures land in the first seconds and are
     never starved behind the large media files. */
const fs = require("fs"), path = require("path");
const ROOT = path.resolve(__dirname, "..");
const HTML = path.join(ROOT, "HI02H11_L03_S01_poem.html");
const FIRST = ["assets/Audio/vo_landing.ogg"];
/* streamed by its own element: the preloader follows that element's buffering. [r136] none any more —
   the cover is the Figma birthday picture, not the underwater title video */
const OWNED_MEDIA = {};
const OWNED = [
  "assets/UI/loader.webp", "assets/UI/nudge_hand_new.svg", "assets/UI/sw_head_talking.webp",
  "assets/UI/btn-next-disabled.svg", "assets/UI/btn-next.svg", "assets/UI/sw_anim_rest.webp",
  "assets/UI/new_landing_swiftee_anim.webp", "assets/UI/btn-play-round.svg", "assets/UI/btn-play-round-waiting.svg",
  "assets/UI/btn-finish.svg", "assets/UI/startnew_bg_plain.webp", "assets/UI/bgdeco_star_o.svg",
  "assets/UI/bgdeco_spark.svg", "assets/UI/bgdeco_star.svg",
  /* [r136] the birthday cover's layers (requested by the landing markup itself) */
  "assets/Images/landing_cover_room.webp", "assets/Images/landing_cover_bunting.webp",
  "assets/Images/landing_cover_balloons_yellow.webp", "assets/Images/landing_cover_balloons_pink.webp",
  "assets/Images/landing_cover_title.webp", "assets/Images/landing_cover_meera.webp",
  "assets/Images/landing_cover_meera_cake.webp", "assets/Images/landing_cover_meera_arm.webp",   /* [r137] the cake lift */
  "assets/Images/landing_cover_meera_blow.webp", "assets/Images/landing_cover_gift.webp"
];
const SKIP = new Set(["assets/ocean-games.css", "assets/ocean-vo-config.js"]);
const files = [];
(function walk(d){ for(const e of fs.readdirSync(path.join(ROOT, d), { withFileTypes: true })){
  const p = d + "/" + e.name; if(e.isDirectory()) walk(p); else files.push(p.replace(/^\//, "")); } })("assets");
const size = f => fs.statSync(path.join(ROOT, f)).size;
const live = files.filter(f => !SKIP.has(f));
const missing = FIRST.concat(OWNED, Object.keys(OWNED_MEDIA)).filter(f => !live.includes(f));
if(missing.length) throw new Error("listed but not on disk: " + missing.join(", "));
const own = OWNED.map(f => [f, size(f)]).concat(Object.entries(OWNED_MEDIA).map(([f, el]) => [f, size(f), el]));
const fetchList = FIRST.map(f => [f, size(f)])
  .concat(live.filter(f => !FIRST.includes(f) && !OWNED.includes(f) && !OWNED_MEDIA[f]).map(f => [f, size(f)]).sort((a, b) => a[1] - b[1]));
const total = own.concat(fetchList).reduce((a, x) => a + x[1], 0);
const manifest = { v: new Date().toISOString().slice(0, 10), total, first: FIRST.length, own, fetch: fetchList };
let html = fs.readFileSync(HTML, "utf8");
const re = /\/\*PRELOAD-MANIFEST\*\/[\s\S]*?\/\*END-PRELOAD-MANIFEST\*\//;
if(!re.test(html)) throw new Error("manifest markers not found in the HTML");
html = html.replace(re, () => "/*PRELOAD-MANIFEST*/" + JSON.stringify(manifest) + "/*END-PRELOAD-MANIFEST*/");
fs.writeFileSync(HTML, html);
console.log("manifest:", own.length, "owned +", fetchList.length, "fetched =", own.length + fetchList.length, "files,", (total / 1e6).toFixed(2), "MB");
