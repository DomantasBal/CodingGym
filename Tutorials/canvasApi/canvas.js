const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d'); // ctx - context

// draw rectangle
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);

// draw cricle
ctx.fillStyle = 'red';
ctx.arc(250, 250, 100, 0, Math.PI * 2);
ctx.fill();

// draw line
ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.lineWidth = 10;
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.stroke();

// draw text
ctx.font = '30px Arial';
ctx.fillStyle = 'orange';
ctx.lineWidth = 1;
ctx.fillText('HELLO', 200, 100, 500);
ctx.strokeText('HELLO', 300, 300, 500);

const ball = document.getElementById('ball');
ball.style.display = 'none';
ball.addEventListener('load', () => ctx.drawImage(ball, 150, 150, 100, 100));
