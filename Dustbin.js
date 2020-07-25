class Dustbin {
    constructor(x, y, width, height) {
    
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      World.add(world,this.body)
     
    }
    display(){
     push()
      rectMode(CENTER);
      fill(83,17,0);
      
      rect(this.body.position.x,this.body.position.y,  this.width, this.height);
      pop()
    }
  };
                 