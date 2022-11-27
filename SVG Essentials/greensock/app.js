let start = document.querySelector("#start");
let reverse = document.querySelector("#rev");
let pause = document.querySelector("#pause");
let resume = document.querySelector("#resume");
let restart = document.querySelector("#restart");
let tween=gsap.to("#circle", {duration: 1, x: 200, scale:0.5, ease: "power1",repeat:2,yoyo:true ,paused:true});
start.addEventListener("click",()=>{
   tween.play();
});


reverse.addEventListener("click",()=>{
   tween.reverse();
});


pause.addEventListener("click",()=>{
    tween.pause();
 });
resume.addEventListener("click",()=>{
    tween.resume();
 });

 restart.addEventListener("click",()=>{
    tween.restart();
 });