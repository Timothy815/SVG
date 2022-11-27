let start = document.querySelector("#start");
let reverse = document.querySelector("#rev");
let pause = document.querySelector("#pause");
let resume = document.querySelector("#resume");
let restart = document.querySelector("#restart");
let tween; 
start.addEventListener("click",()=>{
   tween = gsap.to("#circle", 2.3, {x: 200, scale:0.5 });
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