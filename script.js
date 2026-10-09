(function(){
  var c=document.getElementById('clock');
  function t(){c.textContent=new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata',hour12:true})}
  t();setInterval(t,1000);
  var b=document.getElementById('theme'),r=document.documentElement;
  b.addEventListener('click',function(){
    var dark=r.dataset.theme?r.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
    r.dataset.theme=dark?'light':'dark';b.textContent=dark?'☾':'☀';
  });
})();

/* ---- Falling stars: enter off-screen top-right, slowly cross to bottom-left, exit off-screen ---- */
(function(){
  var sky=document.getElementById('sky'); if(!sky) return;
  function rnd(a,b){return a+Math.random()*(b-a)}
  function place(s){
    var W=window.innerWidth,H=window.innerHeight;
    if(Math.random()<0.5){ s.style.left=rnd(W*0.3,W+150)+'px'; s.style.top=-rnd(60,200)+'px'; }   // start above the top edge
    else { s.style.left=(W+rnd(60,200))+'px'; s.style.top=rnd(-60,H*0.5)+'px'; }                  // or beyond the right edge
    var d=W+H+400;                                    // far enough to leave the screen at the bottom-left
    s.style.setProperty('--d',d+'px');
    s.style.setProperty('--t',(d/rnd(90,100))+'s');   // 60-100 px per second = slow drift
    s.style.setProperty('--len',rnd(100,180)+'px');
  }
  for(var n=0;n<15;n++){
    var s=document.createElement('div'); s.className='star'; s.appendChild(document.createElement('i'));
    place(s); s.style.setProperty('--w',rnd(0,12)+'s');
    s.addEventListener('animationiteration',function(e){place(e.currentTarget)});
    sky.appendChild(s);
  }
})();
