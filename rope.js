class Rope
{
    constructor(body1  , offsetX , offsetY )
    {
        this.offsetX = offsetX;
        this.offsetY = offsetY;

      var options = {
          bodyA: body1,
          pointB: {x : this.offsetX , y: this.offsetY}
     
      }

      this.rope = Constraint.create(options);
      World.add(world , this.rope);
    }
    display()
    {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;

        stroke("white")
        strokeWeight(5);
        line(pointA.x , pointA.y , pointB.x , pointB.y);
    }
}