var splash
var gameState = "wait"
var playbutton, soundonbutton, soundoffbutton;
var backgroundImg, player, zombie, bgSound,playerimg, groundGame;
var  obImg1, obImg2, obstacle;

function preload() {
    splash = loadImage("Ghoul Grapple.gif")
    backgroundImg = loadImage("background.png")
    playerimg = loadImage("player.gif")
    zombie = loadImage("zombie.png")
    bgSound = loadSound("zombieSound.mp3")
    level1bg=loadImage("gameBackground.png")
    obImg1=loadImage("zombie.png")
    obImg2=loadImage("zombieSplashLeft.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    playbutton = createImg("startbutton.png")
    playbutton.position(20, height / 2.5 )
    playbutton.size(155, 140);

    soundonbutton = createImg("soundOn.png")
    soundonbutton.position(width-150, playbutton.y - 25)
    soundonbutton.size(150, 175)
    soundonbutton.mouseClicked(mute)


    soundoffbutton = createImg("soundOff.png")
    soundoffbutton.position(width-150, playbutton.y - 25)
    soundoffbutton.size(150, 175)
    soundoffbutton.hide()
    soundoffbutton.mouseClicked(mute)

    bgSound.play()

    ground=createSprite(0,0,width,height)
    ground.addImage(level1bg)
   ground.visible=false
  ground.x=ground.width/2
  ground.scale=4.35

    player=createSprite(width/2,height-150);
     player.addImage(playerimg);
     player.scale=0.7
     player.visible=false;
     
     
     groundGame=createSprite(width/2-10, height-30, width, 10)
     groundGame.visible=false

     
}

function draw() {
    player.collide(groundGame)
    if (gameState === "wait") {
        background(splash)
        // if (!bgSound.isPlaying) {
        //     bgSound.play()
        // }
        
 ;
    }

    playbutton.mousePressed(() => {
        gameState = "level1"
        playbutton.hide()
    })

    if (gameState == "level1") {
         background(level1bg)
         addobstacles()
        player.visible=true;
        playbutton.hide()
        soundoffbutton.hide()
        soundonbutton.hide()
        ground.visible=true
       // ground.velocityY=5
        ground.velocityX = -5
      // player.velocityY=5
        if(keyDown("SPACE")){
            player.velocityY=-10
        }
        player.velocityY +=0.5
        if(player.collide(obstacle)){
                
        }

if(ground.x<0){
    ground.x=ground.width/2
}
    }

drawSprites()

}

function mute() {
    if (bgSound.isPlaying()) {
        bgSound.stop();
        soundoffbutton.show();
        soundonbutton.hide();
        console.log("mute")
    }
    else {
        soundonbutton.show()
        soundoffbutton.hide();
        bgSound.play();
        console.log("unmute")
    }
}


function addobstacles(){


if(frameCount%300==0){
    var obstacle=createSprite(width,height-150)
    var rand=Math.round(random(1,2))
    obstacle.velocityX=-5

    switch(rand){

case 1:    obstacle.addImage(obImg1)
break;
case 2:    obstacle.addImage(obImg2)
break;
default:break;

}
}
}

function addrewards(){


    if(frameCount%300==0){
        var reward=createSprite(width,height-150)
        var rand=Math.round(random(1,2))
        reward.velocityX=-5
    
        switch(rand){
    
    case 1:    reward.addImage(obImg1)
    break;
    case 2:    reward.addImage(obImg2)
    break;
    default:break;
            
    }
    }
    }
    
