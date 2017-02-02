var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var squarePosition = ["0", "40", "80", "120", "160", "200", "240", "280", "320", "360"];

squarePosition.forEach(function(param) {
	ctx.rect(param, 0, 40, 40);
	ctx.rect(param, 40, 40, 40);
	ctx.rect(param, 80, 40, 40);
	ctx.rect(param, 120, 40, 40);
	ctx.rect(param, 160, 40, 40);
	ctx.rect(param, 200, 40, 40);
	ctx.rect(param, 240, 40, 40);
	ctx.rect(param, 280, 40, 40);
	ctx.rect(param, 320, 40, 40);
	ctx.rect(param, 360, 40, 40);
	ctx.rect(param, 400, 40, 40);
	ctx.rect(param, 440, 40, 40);
	ctx.stroke();
});