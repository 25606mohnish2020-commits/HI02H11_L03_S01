/* VO CONFIGURATION — temporary AI Hindi voice: hi-IN-SwaraNeural.
   Replace each src with the recorded audio path later. All new game VO lives here.
   No VO manifest is generated at this stage. */
window.OCEAN_VO = {
  instructionBubble: {text:'एक और अनेक वाले शब्दों की जोड़ियाँ ढूँढ़िए। पहले एक शब्द पर, फिर उसकी जोड़ी पर टैप कीजिए।',src:'assets/Audio/ocean_instruction_bubble.mp3'},
  bubbleGuidedPair: {text:'गुब्बारे और उसकी जोड़ी पर टैप कीजिए।',src:'assets/Audio/ocean_bubble_guided_pair.mp3'},
  instructionFill: {text:'सही शब्द खींचकर खाली जगह में रखिए।',src:'assets/Audio/ocean_instruction_fill.mp3'},
  /* [r39] the सही-शब्द-चुनिए screens now use the same idle/instruction behaviour as the two ocean
     games. This clip is not recorded yet; until it is, the beat holds silently and everything else
     on those screens (praise, retry) is already voiced from the generic lines below. */
  instructionPick: {text:'सही शब्द चुनिए।',src:'assets/Audio/ocean_instruction_pick.mp3'},
  retry: [
    {text:'दोबारा कोशिश करो।',src:'assets/Audio/ocean_retry_1.mp3'},
    {text:'कोई बात नहीं, फिर से कोशिश करो।',src:'assets/Audio/ocean_retry_2.mp3'}
  ],
  correct: [
    {text:'शाबाश!',src:'assets/Audio/ocean_correct_1.mp3'},
    {text:'तुमने कर दिखाया!',src:'assets/Audio/ocean_correct_2.mp3'},
    {text:'बहुत बढ़िया!',src:'assets/Audio/ocean_correct_3.mp3'}
  ],
  resultComplete: {text:'तुमने कर दिखाया!',src:'assets/Audio/ocean_correct_2.mp3'}
};

let oceanLastCorrect = -1;
let oceanCleanup = null;
let oceanAmbientVideo = null;
function oceanAddCleanup(fn){
  const previous=oceanCleanup;
  oceanCleanup=()=>{if(previous)previous();fn();};
}
function oceanStopAmbient(){
  if(!oceanAmbientVideo)return;
  try{oceanAmbientVideo.pause();oceanAmbientVideo.removeAttribute('src');oceanAmbientVideo.load();}catch(e){}
  oceanAmbientVideo=null;
}
function oceanRetrySfx(){playKitSfx('ocean-retry','sfx_wrong_new.ogg',.28);}
function oceanSay(kind, done){
  const group = OCEAN_VO[kind];
  let line = group;
  if(Array.isArray(group)){
    const available = group.map((_,i)=>i).filter(i=>kind !== 'correct' || i !== oceanLastCorrect);
    const index = available[Math.floor(Math.random()*available.length)];
    if(kind === 'correct') oceanLastCorrect = index;
    line = group[index];
  }
  play(line.src, done);
}
function oceanDecor(wrap){
  const decor=document.createElement('div'); decor.className='ocean-decor'; decor.setAttribute('aria-hidden','true');
  const bubbles=Array.from({length:14},(_,i)=>`<i style="--x:${[6,14,22,31,39,48,56,64,72,79,86,93,27,68][i]}%;--size:${[10,17,8,22,13,9,19,11,24,8,15,12,7,16][i]}px;--rise:${[10.8,13.2,9.6,15.4,11.7,14.2,12.4,16.1,13.8,10.2,15.7,11.1,9.2,14.8][i]}s;--delay:-${[2.1,8.4,4.7,12.6,1.2,9.5,6.2,14.1,3.8,7.3,11.4,5.1,.6,10.3][i]}s"></i>`).join('');
  decor.innerHTML='<video class="ocean-sea-video" src="assets/Video/background_sea.mp4" autoplay loop playsinline preload="auto"></video><span class="ocean-video-wash"></span><span class="ocean-rise-bubbles">'+bubbles+'</span>';
  wrap.appendChild(decor);
  const video=decor.querySelector('.ocean-sea-video');
  oceanAmbientVideo=video; video.volume=.18; video.muted=!!isMuted;
  const wake=()=>{if(!video.isConnected)return;video.muted=!!isMuted;video.play().catch(()=>{});};
  video.play().catch(()=>{video.muted=true;video.play().catch(()=>{});});
  wrap.addEventListener('pointerdown',wake,{once:true});
  const duck=setInterval(()=>{
    if(!video.isConnected)return;
    video.muted=!!isMuted;
    const target=isPlaying ? .035 : .18;
    video.volume+=(target-video.volume)*.32;
  },120);
  oceanAddCleanup(()=>{clearInterval(duck);wrap.removeEventListener('pointerdown',wake);if(oceanAmbientVideo===video)oceanStopAmbient();else try{video.pause();}catch(e){}});
}
/* Two idle beats: instruction after 7s, then visual assistance after a further 7s.
   Every gesture cancels the hint. Feedback/dragging/hidden tabs do not count as inactivity. */
/* [r84] wait: how long the child must have done nothing before the reminder (default 7s) */
function oceanIdle(wrap, instruction, hint, wait){
  const WAIT = wait || 7000;
  let timer, token=0, cleanupHint=()=>{};
  function clear(){clearTimeout(timer);token++;cleanupHint();cleanupHint=()=>{};}
  function arm(){
    clear(); const mine=token;
    timer=setTimeout(function remind(){
      if(!wrap.isConnected || mine!==token)return;
      if(document.hidden || state.locked || isPlaying || document.querySelector('.dragging')){timer=setTimeout(remind,1000);return;}
      const afterInstruction=()=>{
        if(mine!==token || !wrap.isConnected)return;
        timer=setTimeout(()=>{
          if(mine!==token || !wrap.isConnected)return;
          if(state.locked || isPlaying || document.hidden){arm();return;}
          cleanupHint=hint() || (()=>{});
        },7000);
      };
      /* When the caller has no instruction to repeat at this point (it returns null), the
         reminder skips the voice and keeps only the delayed visual assist. */
      const instructionKey=typeof instruction==='function' ? instruction() : instruction;
      if(instructionKey)oceanSay(instructionKey,afterInstruction);else afterInstruction();
    },WAIT);
  }
  function activity(){arm();}
  wrap.addEventListener('pointerdown',activity,true);
  wrap.addEventListener('keydown',activity,true);
  const visibility=()=>{if(document.hidden)clear();else arm();};
  document.addEventListener('visibilitychange',visibility);
  oceanAddCleanup(()=>{clear();wrap.removeEventListener('pointerdown',activity,true);wrap.removeEventListener('keydown',activity,true);document.removeEventListener('visibilitychange',visibility);});
  return {arm,clear};
}
function oceanGhost(tile,zone,wrap,iterations){
  if(!tile || !zone)return ()=>{};
  const a=tile.getBoundingClientRect(),b=zone.getBoundingClientRect(),r=wrap.getBoundingClientRect();
  const scale=r.width/wrap.offsetWidth;
  const ghost=tile.cloneNode(true);ghost.className='fvd-tile ocean-ghost';ghost.setAttribute('aria-hidden','true');
  Object.assign(ghost.style,{left:(a.left-r.left)/scale+'px',top:(a.top-r.top)/scale+'px',width:a.width/scale+'px',height:a.height/scale+'px'});
  wrap.appendChild(ghost);
  const dx=(b.left+b.width/2-a.left-a.width/2)/scale,dy=(b.top+b.height/2-a.top-a.height/2)/scale;
  const animation=ghost.animate([{transform:'translate(0,0)',opacity:0},{transform:'translate(0,0)',opacity:.6,offset:.18},{transform:`translate(${dx}px,${dy}px)`,opacity:.65,offset:.8},{transform:`translate(${dx}px,${dy}px)`,opacity:0}],{duration:2200,iterations:iterations == null ? 3 : iterations,easing:'ease-in-out'});
  animation.onfinish=()=>ghost.remove();
  return ()=>{animation.cancel();ghost.remove();};
}
function oceanFishTransition(showNext){
  const overlay=document.createElement('div');overlay.className='ocean-crossing ocean-video-crossing';overlay.setAttribute('aria-hidden','true');
  overlay.innerHTML='<video class="ocean-transition-video" src="assets/Video/swiftie_swimming_v2.mp4" autoplay playsinline preload="auto"></video>';
  /* [r46] Size the overlay to the card the child is looking at rather than the whole window. The
     transition used to be position:fixed over everything, which blacked out Swiftie and the
     instruction bar at the top. It now sits inside .slide-stage, matched to the outgoing activity
     card box, so the layout, its margins and its ratio are preserved and the header stays on show.
     Rects are screen pixels; the stage is scaled, so divide by --scale to land in its own space. */
  const stageEl = document.querySelector(".slide-stage") || document.body;
  const cardEl  = document.querySelector(".fvd, .mtp-stage") || document.querySelector(".slide-host") || stageEl;
  const sc = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scale")) || 1;
  const sr = stageEl.getBoundingClientRect(), cr = cardEl.getBoundingClientRect();
  overlay.style.left   = ((cr.left - sr.left) / sc) + "px";
  overlay.style.top    = ((cr.top  - sr.top ) / sc) + "px";
  overlay.style.width  = (cr.width  / sc) + "px";
  overlay.style.height = (cr.height / sc) + "px";
  stageEl.appendChild(overlay);
  oceanStopAmbient();
  stopAudio();
  const video=overlay.querySelector('video');
  video.playbackRate=1.25;                 // 4.9 s source → a child-friendly transition under 4 s
  video.volume=.72;video.muted=!!isMuted;
  video.play().catch(()=>{video.muted=true;video.play().catch(()=>{});});
  /* [r47] ORDER MATTERS HERE, and it used to be wrong: the overlay began fading at 3420ms while
     the next slide was only mounted at 3660ms, so for a quarter of a second the fading video
     revealed the OLD screen underneath — the bubble game's finished tray flashing up before the
     drag game arrived. The next screen is now mounted BEFORE anything fades, so the fade is a
     cross dissolve straight into it and nothing else can show through. The clip ending early
     routes through the same path instead of closing outright, which was the other way the old
     screen could reappear. */
  const FADE = 600;                         // keep in step with the CSS transition on .fade-out
  let mounted=false, closed=false, fading=false, fadeTimer=null;
  const mount=()=>{if(!mounted&&overlay.isConnected){mounted=true;showNext();}};
  const close=()=>{if(closed)return;closed=true;clearInterval(fadeTimer);mount();try{video.pause();}catch(e){}overlay.remove();};
  const beginFade=()=>{
    if(fading||closed)return; fading=true;
    mount();                                // the drag game is in place while the overlay is still solid
    overlay.classList.add('fade-out');
    fadeTimer=setInterval(()=>{video.volume=Math.max(0,video.volume*.62);},70);
    setTimeout(close, FADE+140);            // lift the overlay only once it has fully faded
  };
  setTimeout(beginFade,3300);
  video.addEventListener('ended',beginFade,{once:true});
  setTimeout(close,5400);                   // hard stop if the clip stalls and never ends
}
