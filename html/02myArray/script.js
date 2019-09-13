const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200),100,"red");
A.draw(context);

window.addEventListener('click',(evt)=>{
  let mouseVector = new Vector2d(evt.clientX,evt.clientY);
  let differenceMousePoint = new Vector2d(0,0);

  console.log(mouseVector);

  differenceMousePoint.differenceVector(A.position,mouseVector);
  console.log(differenceMousePoint)

});
