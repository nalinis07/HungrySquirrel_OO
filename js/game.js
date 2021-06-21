class Game {
    constructor () {
        // game Intro   
        

        edges=createEdgeSprites();

        // main maze and blocker maze
        mazeGroup = new Group ();
        mazeGateGroup = new Group ();
        this.createMainMaze();
        this.createGateMaze();

        //golden and normal nuts
        nutGroup=new Group();
        gnutGroup=new Group();
        this.createNuts();
        this.createGoldenNuts();
          
        //create squirrel 
        squirrel = new Squirrel ();

        //create snakes and add image
        snake1=new Snake (55,575);
        snake2=new Snake(50,55);
        snake3=new Snake(750,575);

        //create story sprite for background
        this.story=createSprite(410,300,gameWidth,gameHeight);
        this.story.addImage(gameStory);
        this.story.scale=.84;

    }

    displayScore () {
  
      //display points and lives
      push();
      textSize (15);
      fill(220,30,5);
      stroke(4);
      text ("POINTS : " + score + "            LIVES : " + lives, 300,15);
      pop();
  
    
    }
    
    play () {
        

        //let squirrel move using arrow key controls
        squirrel.movement ();

        //call snake movement functions to make snakes move
        snake1.movement(5,2);
        snake2.movement(4,2);
        snake3.movement(5,3);
        snake1.snake.collide(snake2.snake);
        snake1.snake.collide(snake3.snake);
        snake2.snake.collide(snake3.snake);
                
        if (score>=MAXNUTS){
  
          //change gameState to win
          gameState=WIN;
  
        }
  
        if (lives<=0){
  
          //change gameState to end
          gameState=END; 
  
        }

    }  // method play ()
    
    end () {
      //destroy nuts
      nutGroup.destroyEach();
      gnutGroup.destroyEach();

      //make black screen visible
      blackScreen.visible=true;

      if (gameState == END) {
        //display you lose press r to try again text
        textSize(30);
        text("You Lose! Press R to try again.", 200,300);  

        //play end sound  
        if (soundPlayedOnce == false) {
          loseGame.play();
          soundPlayedOnce = true; 
        }
      } else if (gameState == WIN) {
        //display you win text
        textSize(40);
        text("You Win!!!", 320,300);

        //display mini text at bottom that says press r to play again
        textSize(15);
        text("Press R to play again", 350, 590);

        //play win sound  
        if (soundPlayedOnce == false) {
          gameWin.play();
          soundPlayedOnce = true;
        }
      }

    }  // method end ()
     
    createNuts(){
        var obj;
        //create all 35 nuts
        obj = new Nut (590,60,nutGroup);
        obj = new Nut (670,115,nutGroup);
        obj = new Nut (600,175,nutGroup);
        obj = new Nut (750,175,nutGroup);
        obj = new Nut (750,175,nutGroup);
        obj = new Nut (600,250,nutGroup);
        obj = new Nut (600,350,nutGroup);
        obj = new Nut (700,400,nutGroup);
        obj = new Nut (750,330,nutGroup);
        obj = new Nut (670,520,nutGroup);
        obj = new Nut (550,570,nutGroup);
        obj = new Nut (450,520,nutGroup);
        obj = new Nut (380,450,nutGroup);
        obj = new Nut (280,500,nutGroup);
        obj = new Nut (350,570,nutGroup);
        obj = new Nut (180,510,nutGroup);
        obj = new Nut (50,490,nutGroup);
        obj = new Nut (30,390,nutGroup);
        obj = new Nut (180,390,nutGroup);
        obj = new Nut (300,350,nutGroup);
        obj = new Nut (150,305,nutGroup);
        obj = new Nut (670,520,nutGroup);
        obj = new Nut (80,120,nutGroup);
        obj = new Nut (320,240,nutGroup);
        obj = new Nut (400,290,nutGroup);
        obj = new Nut (440,180,nutGroup);
        obj = new Nut (500,320,nutGroup);
        obj = new Nut (520,120,nutGroup);
        obj = new Nut (400,90,nutGroup);
        obj = new Nut (300,50,nutGroup);
        obj = new Nut (230,150,nutGroup);
        obj = new Nut (170,60,nutGroup);
        obj = new Nut (40,250,nutGroup);
        obj = new Nut (90,180,nutGroup);
        obj = new Nut (220,260,nutGroup);
        obj = new Nut (500,430,nutGroup);
        
      }
      
      createGoldenNuts(){
      
        //create all 5 golden nuts
        var obj ;
        obj = new GNut (730,230, gnutGroup);
        obj = new GNut (430,375, gnutGroup);
        obj = new GNut (50,320, gnutGroup);
        obj = new GNut (510,60, gnutGroup);
        obj = new GNut (220,570, gnutGroup);
        
      }
      
      createGateMaze(){
        // gate maze pieces
        var obj ; 
        obj = new Maze (30,550,170,7,"gray", mazeGateGroup);
        obj = new Maze (115,575,7,57,"gray", mazeGateGroup);
        obj = new Maze (765,105,110,7,"gray", mazeGateGroup);
        obj = new Maze (710,68.5,7,80,"gray", mazeGateGroup);
        obj = new Maze (110,53.5,7,60,"gray", mazeGateGroup);
        obj = new Maze (25,80,170,7,"gray", mazeGateGroup);
        obj = new Maze (700,575,7,70,"gray", mazeGateGroup);
        obj = new Maze (750,550,95,7,"gray", mazeGateGroup);
      }
      
      createMainMaze () {
        var obj;
        // main maze
        obj = new Maze (350,230,7,180, mazeColor, mazeGroup);
        obj =  new Maze (350,140,90,7,mazeColor, mazeGroup);
        obj =  new Maze (290,210,120,7,mazeColor, mazeGroup);
        obj =  new Maze (20,345,350,7,mazeColor, mazeGroup);
        obj =  new Maze (70,345,7,105,mazeColor, mazeGroup);
        obj =  new Maze (250,470,145,7,mazeColor, mazeGroup);
        obj =  new Maze (250,480,7,85,mazeColor, mazeGroup);
        obj =  new Maze (120,175,7,85,mazeColor, mazeGroup);
        obj =  new Maze (90,155,120,7,mazeColor, mazeGroup);
        obj =  new Maze (570,175,7,305,mazeColor, mazeGroup);
        obj =  new Maze (550,100,150,7,mazeColor, mazeGroup);
        obj =  new Maze (460,270,7,160,mazeColor, mazeGroup);
        obj =  new Maze (480,400,230,7,mazeColor, mazeGroup);
        obj =  new Maze (780,200,270,7,mazeColor, mazeGroup);
        obj =  new Maze (700,200,7,105,mazeColor, mazeGroup);
        obj =  new Maze (690,330,50,7,mazeColor, mazeGroup);
        obj =  new Maze (650,550,105,7,mazeColor, mazeGroup);
        obj =  new Maze (700,500,7,105,mazeColor, mazeGroup);
        obj =  new Maze (580,480,60,7,mazeColor, mazeGroup);
        obj =  new Maze (400,565,7,75,mazeColor, mazeGroup);
        obj =  new Maze (240,70,7,50,mazeColor, mazeGroup);
        obj =  new Maze (240,70,50,7,mazeColor, mazeGroup);
        obj =  new Maze (400,24,800,10,mazeColor, mazeGroup);
        obj =  new Maze (400,597,800,10,mazeColor, mazeGroup);
        obj =  new Maze (797,320,10,600,mazeColor, mazeGroup);
        obj =  new Maze (3,320,10,600,mazeColor, mazeGroup);
      
      }
 
      restart(){


        //reset gameState to start
        gameState=START;
      
        soundPlayedOnce = false;  //NALINI
        
        //move squirrel back to beginning position
        squirrel.squirrel.x=753;
        squirrel.squirrel.y=65;
      
        //reset lives and score
        lives=MAXLIVES;
        score=0;
      
        //reset snake's position
        snake1.snake.x=55;
        snake1.snake.y=575;
        snake2.snake.x=50;
        snake2.snake.y=55;
        snake3.snake.x=750;
        snake3.snake.y=575;
      
        //reset snake velocity to zero
        snake1.snake.setVelocity(0,0);
        snake2.snake.setVelocity(0,0);
        snake3.snake.setVelocity(0,0);
      
        //make blackScreen invisible again
        blackScreen.visible=false;
      
        //recreate maze 3,4,5,6,8,32
        this.createGateMaze ();
      
        //destroy all nuts and reset them
        nutGroup.destroyEach();
        gnutGroup.destroyEach();
      
        this.createNuts();
        this.createGoldenNuts();
       
      }


}