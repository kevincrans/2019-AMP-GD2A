class Point {
  constructor(position,radius,color,label){
    this.position = position;
    this.radius = radius;
    this.color = color;
    this.label = label || "";

  }

  draw(context){
    context.beginPath();
    context.strokeStyle = "blue";
    context.fillStyle = this.color;
    context.arc(this.position.dx,this.position.dy,this.radius,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
    context.fillStyle = "white";
    context.font = "" + height / 116 + "px Arial";
    context.fillText(this.label, this.position.dx-20, this.position.dy-this.radius-10);
  }
}
