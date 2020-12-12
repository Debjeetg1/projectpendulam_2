class Bob
{
    constructor(x , y,  radius)
    {
     
     var options = {
         isStatic: false,
         friction:0,
         frictionsAir : 0.0,
         slop: 65,
         inertia: Infinity
     }
        this.body = Bodies.circle(x , y , radius , options);
     this.radius = radius;


     World.add(world , this.body);
    }
     
    display()
    {
      var pos = this.body.position;

      fill("red");
      circle(pos.x , pos.y , this.radius);

    }
}