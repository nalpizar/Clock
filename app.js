let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
  drawTest(ctx2);
}

function drawFace(ctx, radius) {
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = '#00A388';
  ctx.fill();
  ctx.strokeStyle = "#444";
  ctx.lineWidth = radius * 0.1;
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = '#444';
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(-85, -70, 60, 0, 10);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(-95,60);
  ctx.quadraticCurveTo(0, 150, 110, 50);
  ctx.stroke();
  ctx.closePath();


  ctx.beginPath();
  ctx.arc(85, -70, 60, 0, 10);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(70, -60, radius * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = '#000';
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(-70, -60, radius * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = '#000';
  ctx.fill();
  ctx.closePath();
}

function drawNumbers(ctx, radius) {
  let ang;
  let num;
  ctx.font = radius * 0.15 + "px Impact, Charcoal, sans-serif";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillStyle = "#444";
  for(num = 1; num < 13; num ++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, - radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    //horA
    hour = hour % 12;
    hour = (hour * Math.PI/6) +
    (minute * Math.PI/(6 * 60)) +
    (second * Math.PI/(360 * 60));
    drawHand (ctx, hour, radius * 0.5, radius * 0.07);
    //minutos
    minute = (minute * Math.PI/30)+(second * Math.PI/(30 * 60));
    drawHand (ctx, minute, radius * 0.8, radius * 0.07);
    // segunDOS
    second = (second * Math.PI/30);
    drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, - length);
    ctx.stroke();
    ctx.rotate(-pos);
}