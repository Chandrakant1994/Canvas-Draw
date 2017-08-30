var canv, ctx;
framesPerSecond = 30;
window.onload = function () {
    canv = document.getElementById("canvas");
    ctx = canv.getContext('2d');
    //drawEverything();
    ctx.fillStyle = '#f00';
    // Draw Pentagon
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(5, 35);
    ctx.lineTo(5, 70);
    ctx.lineTo(35, 70);
    ctx.lineTo(35, 35);
    ctx.closePath();
    ctx.fill();

    // Draw 

    setInterval(update, 1000 / framesPerSecond);
}

function update() {
    background.update();
}

function component(x, y, color, width, height) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;
    this.update = function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}

function drawEverything() {
    background = new component(0, 0, '#FFFFFF', 800, 600);
    background.update();
}