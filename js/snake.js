class Snake {
    constructor (x,y) {
        this.snake=createSprite(x,y,1,1);
        this.snake.addImage(snakeImg);
        this.snake.scale=.2;  
    }
    flip (sn,mz){
      if (sn.velocityX <0 ) {
        sn.addImage("leftImage", snakeFlip);
        sn.changeImage("leftImage"); 
      } else {
        sn.addImage("rightImage", snakeImg);
        sn.changeImage("rightImage"); 
      }        
    }
    movement (velocityX, velocityY) {
        this.snake.bounceOff (mazeGroup, this.flip);
        this.snake.bounceOff(edges, this.flip);
        
         
        if (frameCount%200==0){
  
            //assign random number movements
            randNum=round(random(1,4));
        
            //switch case
            switch (randNum){
        
              //let snake move left
              case 1 : 
                this.snake.velocityX= (-1) * velocityX; 
                this.snake.velocityY= velocityY; 
                this.snake.addImage("leftImage", snakeFlip);
                this.snake.changeImage("leftImage"); 
                break;
        
              //let snake move right
              case 2 : 
                this.snake.velocityX=velocityX; 
                this.snake.velocityY=velocityY; 
                this.snake.addImage(snakeImg);
                this.snake.addImage("rightImage", snakeImg);
                this.snake.changeImage("rightImage"); 
                break;
        
              //let snake move down
              case 3 : 
                this.snake.velocityY=velocityX; 
                this.snake.velocityX=velocityY;
                break;
        
              //let snake move up
              case 4 : 
                this.snake.velocityY=(-1) * velocityX; 
                this.snake.velocityX=velocityY;
                break;
        
              default : break ;
        
            }
        }
      
    }

}


  
  