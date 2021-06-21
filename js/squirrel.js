class Squirrel {
    constructor  () {
        this.squirrel=createSprite(753,65,10,10);
        this.squirrel.addImage("leftImg", squirrelImg);
    }
    movement () {

        if(keyDown("UP_ARROW")){
            this.squirrel.y = this.squirrel.y-SQUIRRELMOVE;
        }
        if(keyDown("DOWN_ARROW")){
            this.squirrel.y=this.squirrel.y+SQUIRRELMOVE;
        }
        if(keyDown("LEFT_ARROW")){
            this.squirrel.x=this.squirrel.x-SQUIRRELMOVE;
            this.squirrel.addImage("LeftImage", squirrelImg);
            this.squirrel.changeImage("LeftImage"); 
        }
        if(keyDown("RIGHT_ARROW")){
            this.squirrel.x=this.squirrel.x+SQUIRRELMOVE;
            this.squirrel.addImage("RightImage", squirrelFlip); 
            this.squirrel.changeImage("RightImage");
        }

        //make squirrel collide against all walls of the maze and edges 
        this.squirrel.collide (mazeGroup);
        this.squirrel.collide(edges);

        //if squirrel touches any nut,
        nutGroup.overlap(this.squirrel, this.collectNut);
        gnutGroup.overlap(this.squirrel, this.collectGoldenNut);
     
        // snake bites squirrel
        this.squirrel.overlap(snake1.snake, this.snakeBite);
        this.squirrel.overlap(snake2.snake, this.snakeBite);
        this.squirrel.overlap(snake3.snake, this.snakeBite);

    }


    //when snake touches/bites squirrel
    snakeBite(sq, sn){

        //if there is a life left,
        if (lives >= 1) {
            //dedcut life 
            lives--; 
        }  
        else {
            //else, change gameState to END 
            gameState = END;
        }
        sq.x = 753;
        sq.y = 65;
    
        //play snake bite sound
        snakeBites.play();
    
    }
    //when squirrel touches any normal nut,
    collectNut (nutSprite, squirrel) {

        //destroy nut
        nutGroup.remove (nutSprite);
        nutSprite.destroy ();
    
        //increment score
        score++;
    
        //play collect nut sound
        collectNuts.play();
    
    }
  
  
    //when squirrel touches any golden nut,
    collectGoldenNut (gnutSprite, squirrel) {
        
        //destroy golden nut
        gnutGroup.remove (gnutSprite);
        gnutSprite.destroy ();
    
        //increment score and lives 
        score++;
        lives++;
    
        //play collect golden nut sound
        collectGnut.play();
    
    }
      
}