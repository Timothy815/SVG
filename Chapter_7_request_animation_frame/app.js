let canvas = document.querySelector("canvas"),
ctx = canvas.getContext('2d')
pixelRatio = window.devicePixelRatio,
w = canvas.width,
h = canvas.height;

canvas.width = w * pixelRatio;
canvas.height = h * pixelRatio;

ctx.arc(
    canvas.width /2,
    canvas.height / 2,
    canvas.width / 2,
    0,
    Math.PI * 2
)
ctx.fill();
canvas.style.width = w + "px";
