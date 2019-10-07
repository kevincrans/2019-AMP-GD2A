const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let points = [];
let counter = 0;

let A = new Array();
while (A.length < 100)
{
  A.push(new Array());
}
animate();

function animate() {
  context.clearRect(0, 0, width, height);
  requestAnimationFrame(animate);
  A[1].position = new Vector2d(getRandom(width), getRandom(height));
  A[1].color = "rgba(" + getRandom(255) + "," + getRandom(255) + "," + getRandom(255) + ", 1)";
  A[1].draw(context);
}

animate()


function getRandom(max){
  let ans = Math.floor(Math.random() * max);
  return ans;
}
