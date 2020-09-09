class Bob {
    constructor(x,y,radius){
        var options = {
            'restitution' :1, 'isStatic' : false, 'density' : 0.5
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,radius, options);
        
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(0, 0,this.body.circleRadius, this.body.circleRadius);
        pop();
    }
}
