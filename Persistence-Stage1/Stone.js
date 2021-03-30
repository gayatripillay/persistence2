class Stone
{
    constructor(x,y){
    this.image = loadImage("rock2.png")

        }
   
    
 spawnStones(){
    if (frameCount % 60 === 0) {
        var stone = createSprite(600,120,40,10);
        stone.x = Math.round(random(200,1000));
        stone.addImage(this.image);
        stone.scale = 0.5;
      //  stone.velocityY = -3;
       // stonesGroup.add(stone);
    }
}
    

display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}