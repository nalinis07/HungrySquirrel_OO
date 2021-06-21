//constants
const gameWidth =  800;
const gameHeight =  600;
const mazeColor = "black";
const INTRO=0, START=1, PLAY=2, END=3, WIN=4;
const SQUIRRELMOVE=5;
const MAXLIVES = 3;
const MAXNUTS=35;

var soundPlayedOnce = false;   //NALINI

//variables
var squirrel, squirrelImg, squirrelFlip;
var  snakeImg, snakeFlip, snake1,snake2, snake3;
var nutImg, gnutImg;
var bgImg;
var gameState=INTRO;
var story, gameStory;
var randNum;
var score=0, lives=MAXLIVES;
var nutGroup, gnutGroup, mazeGroup, mazeGateGroup;
var blackScreen;
var edges;
var collectGnut, collectNuts, snakeBites, loseGame, gameWin;

var game ;

function preload(){

  //load squirrel image
  squirrelImg=loadImage("assets/images/Squirrel_left.png");
  squirrelFlip=loadImage("assets/images/Squirrel_right.png");

  //load snake image
  snakeImg=loadImage("assets/images/snake2.png");
  snakeFlip=loadImage("assets/images/snakeFlip.png")

  //load nuts images
  nutImg=loadImage("assets/images/nut.png");
  gnutImg=loadImage("assets/images/gnut.png");

  //load bg image
  bgImg=loadImage("assets/images/bg1.png");

  //load story img
  gameStory=loadImage("assets/images/gameStory5.png");

  //load all sounds
  collectGnut=loadSound("assets/sounds/collectGoldenNut.mp3");
  collectNuts=loadSound("assets/sounds/collectNut.mp3");
  snakeBites=loadSound("assets/sounds/snakeBite.mp3");
  loseGame=loadSound("assets/sounds/loseGame.mp3");
  gameWin=loadSound("assets/sounds/gameWin.mp3");

}


function setup() {
  createCanvas(gameWidth, gameHeight);

  game = new Game () ;

  //create black screen
  blackScreen=createSprite(gameWidth/2,gameHeight/2,gameWidth,gameHeight);
  blackScreen.shapeColor="black";
  blackScreen.visible=false;

}

function draw() {
  background(bgImg);
  //show all sprites
  drawSprites();
  if(gameState!=INTRO){
    game.displayScore () ;
  }

  if (gameState==INTRO && keyDown("N")){
      //hide text and story sprite shown in INTRO state
      game.story.destroy();
  
      //change to start state
      gameState=START;
   }

  if (gameState==START){

    //show text to press S key to start playing
    fill(220,30,5);
    textSize(15);
    text ("Press the S key to start", 330,50);

    //when s key is pressed,
    if(keyDown("S")){
      //open the blockers
      mazeGateGroup.destroyEach ();
      // play game
      gameState=PLAY;
    }
  }
  if (gameState == PLAY) {
    game.play ();
  }

  if (gameState==END  || gameState == WIN){
    game.end ();
  }
  
  if (keyDown ("R") && (gameState == END || gameState == WIN)){
    game.restart ();
  }

}



