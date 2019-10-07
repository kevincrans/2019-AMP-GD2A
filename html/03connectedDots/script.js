const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let dots = [];
let dotsnum = getRandom(1024);
while(dots.length < dotsnum)
{
  dots.push(new Point(new Vector2d(getRandom(width), getRandom(height)), 100,"rgb(" + getRandom(191) + ", " + (159 + getRandom(64)) + ", " + (159 + getRandom(64)) + ")", "dot" + dots.length));
}
let x = 0;
let y = false
function animate()
{
  context.clearRect(0, 0, width, height );
  requestAnimationFrame(animate);
  for(let i = 0; i < dots.length; i++)
  {
    dots[i - x].draw(context);
    if (y)
    {
      x = x + 1;
    }
    !y;
  }
}
animate()
function getRandom(max){
  return Math.floor(Math.random()*max);
}
