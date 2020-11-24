class Bob {
  constructor(x,y,radius) {
      var opt = {
        'restitution':1.0,
        'isStatic':false,
        'friction':0,
        'density':0.9,
          
          
      }
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(x,y,radius,opt);

      World.add(world,this.body);
  }

  display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("white");
      ellipse(0,0,this.body.circleRadius,this.body.circleRadius);
      pop();
  }
}