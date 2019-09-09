const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(100,100),100,"rgba(100,100,100,0.5)");
A.draw(context)

let B = new Point(new Vector2d(500,400),200,"rgba(200,200,200,0.5)");
B.draw(context);
