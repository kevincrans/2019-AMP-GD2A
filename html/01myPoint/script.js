const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let points = [];
let counter = 0;

let A = new Point(new Vector2d(500, 500), 200, "rgb(255, 0, 127)", "pointharry");


A.draw(context);

function animate() {
  
}

animate()


function getRandom(max){

}
