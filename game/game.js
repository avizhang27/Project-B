

let students = [];
let num_students = 25;
const sspeed = 4;
const ssize = 20;
let you;
let bus;
let timer = 0;

function setup() {
  let canvas = createCanvas(600, 500);
  canvas.parent('p5container');
  
  
  you = {
    x: width / 2,
    y: height / 2+150,
    speed: sspeed,
    size: ssize,
  };
  youR = {
    x: width / 2,
    y: height / 2+150,
    speed: sspeed,
    size: ssize,
  };
  
  youG = {
    x: width / 2,
    y: height / 2+150,
    speed: sspeed,
    size: ssize,
  };
  
  youB = {
    x: width / 2,
    y: height / 2+150,
    speed: sspeed,
    size: ssize,
  };
  
   bus = {
    x: 0,
    y: 0
   }
   busR = {
    x: 0,
    y: 0
   }
   busG = {
    x: 0,
    y: 0
   }
   busB = {
    x: 0,
    y: 0
   }

  for (let i = 0; i < num_students; i++) {
    students[i] = new Person(random(width), random(height));
  }
}

function draw() {
  background(0);
  drawBus();
  drawYou();
  keyPressed();
  //Person.display();
   keyPressed();
   keyPressedR();
   keyPressedG();
   keyPressedB();
  busCollide()

  //showing students
  if (keyCode == 32){
    
  }
  for (let i = 0; i < students.length; i++) {
    let s = students[i];
    s.display();
    s.move();
    s.collisionCheck(you.x, you.y);
    if(s.checkGame()){
      console.log('contact!!');
      s.updateTimer();
      let t = s.checkTimer();
      console.log(t);
      timer ++;
      // s.escape();
    }
    
    if(s.checkTimer() >= 8){
      //console.log('game over');
      gameOver();
        
    }
  }
}


function drawBus() {
  //bus
  push();
  
  strokeWeight(0.4);
  stroke(255);
  fill(140, 0, 255);
  rect(bus.x+width / 10, bus.y+50, 130, 40, 5);
  pop();
  push();
  strokeWeight(7);
  stroke(0);
  fill(255);
  circle(bus.x+width / 10 + bus.y+30, 90, 20);
  circle(bus.x+width / 10 + bus.y+100, 90, 20);
  pop();
  push();
  fill(140, 0, 255)
  rect(bus.x+width/2-110, bus.y+54, 15  , 5 ,6)
  pop();
  push();
  stroke(100);
  strokeWeight(1.5);
  rect(bus.x+width/2-113, bus.y+51, 2  , 25 ,2)
  pop();
  push();
  fill(100)
  rect(bus.x+width/2-140, bus.y+57, 19, 15 ,2)
  rect(bus.x+width/2-160, bus.y+57, 19, 15 ,2)
  push();
  fill(140, 0, 255)
  rect(bus.x+width/2-185, bus.y+57, 17, 30, 2)
  pop();
  rect(bus.x+width/2-220, bus.y+57, 19, 15 ,2)
  pop();
  push();
  fill(140, 0, 255)
  rect(bus.x+width/2-100, bus.y+52, 6  , 15 ,6)
  pop();
  
  //busr
  
  //busg
  
  //busb
  
}

//show the player in bus scene
function drawYou() {
   fill(255, 255, 255);
 // circle (you.x, you.y, you.size);
  you.y += sin(frameCount * random(-0.001, 0.001) )
  you.x += sin(frameCount * random(-0.019, 0.026))
  
  youR.y += sin(frameCount * random(-0.6336, 3.1094) )
  youR.x += sin(frameCount * random(-0.1028, 0.0026))
  
   youG.y += sin(frameCount * random(-2.8094, 0.129) )
  youG.x += sin(frameCount * random(-0.0023, 0.0056))

   youB.y += sin(frameCount * random(-2.191, 5.741) )
  youB.x += sin(frameCount * random(-0.0029, 0.0036))


  
  //player head
  rect(you.x, you.y, 25, 20)
  
  //player head glitch
  push();
  noStroke();
  fill(255, 0, 0, 90)
  rect(youR.x, youR.y, 25, 20)
  pop();
  push();
  noStroke();
  fill(0, 255, 0, 90)
  rect(youG.x, youG.y, 25, 20)
  pop();  
  push();
  noStroke();
  fill(0, 0, 255, 90)
  rect(youB.x, youB.y, 25, 20)
  pop();
  
  
  
  //player eyes
  rect(you.x+3, you.y+7, 4, 3)
  rect(you.x+26, you.y+7, 4, 3)
  
  //player body
  rect(you.x+5, you.y+22, 15, 10)
  
  //player legs
  rect(you.x+8, you.y+31, 4, 6, 8)
  rect(you.x+13, you.y+31, 4, 6, 8)
  
  
  //player arms
  rect(you.x+4, you.y+20, 4, 10, 8)
  
}

//move the player
function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    you.y -= you.speed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    you.y += you.speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    you.x += you.speed;
  }
  if (keyIsDown(LEFT_ARROW)) {
    you.x -= you.speed;
  }  you.x = constrain(you.x, 0, width);
  you.y = constrain(you.y, 0, height);
}
  
  function keyPressedR() {
  if (keyIsDown(UP_ARROW)) {
    youR.y -= you.speed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    youR.y += you.speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    youR.x += you.speed;
  }
  if (keyIsDown(LEFT_ARROW)) {
    youR.x -= you.speed;
  }
  youR.x = constrain(you.x, 0, width);
  youR.y = constrain(you.y, 0, height);
}
  
function keyPressedG() {
  if (keyIsDown(UP_ARROW)) {
    youG.y -= you.speed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    youG.y += you.speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    youG.x += you.speed;
  }
  if (keyIsDown(LEFT_ARROW)) {
    youG.x -= you.speed;
  }
  youG.x = constrain(you.x, 0, width);
  youG.y = constrain(you.y, 0, height);
}
function keyPressedB() {
  if (keyIsDown(UP_ARROW)) {
    youB.y -= you.speed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    youB.y += you.speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    youB.x += you.speed;
  }
  if (keyIsDown(LEFT_ARROW)) {
    youB.x -= you.speed;
  }
  youB.x = constrain(you.x, 0, width);
  youB.y = constrain(you.y, 0, height);
}
      //drawYou(you.x, you.y, you.size)
//}



function gameOver() {
  noLoop();
  background(0);
  fill(255);
  textAlign(CENTER);
   textFont("Courier New");
    textSize(20)
  text("just refresh to restart :D", width / 2, height / 2 + 30);
  text("ew, other people.", width / 2, height / 2 - 30);

  Restart();
}

function Restart(){
  if (keyIsPressed){
    if (keyCode == ENTER){
     for (let i = 0; i < students.length; i++) {
    let s = students[i];
    s.display();
    
    you.x = width / 2;
    you.y = height +150;
       
    background(0, 0, 0, 0)
      //s.reset();
       
       
    
  }
  
       
       
  }
 
  
    
  }
}


class Person {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = ssize;
    this.dia = 25;
    this.xSpd = random(-0.01, -0.2);
    this.ySpd = random(-0.4, -0.1);
    //more speed range
    this.sContact = false;
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.col = color(255, 255, 255);
    this.timer = 0;
    //traits later
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }

  display() {
    fill(160, 20, 30);
    rect(this.x, this.y, this.dia-5)
    circle(this.x, this.y, this.dia-2);
    rect(this.x+9, this.y+25, this.dia-19, this.dia-29)
    rect(this.x+19, this.y+21, this.dia-19, this.dia-29)
     this.y += sin(frameCount * random(-0.01, 0.01) )
  this.x += sin(frameCount * random(-0.019, 0.026))
  }
  
  displayGrass(){
    
  }

  collisionCheck(x, y) {
    let d = dist(x, y, this.x, this.y);
    if (d < this.dia) {
      this.sContact = true;
    } else {
      this.sContact = false;
    }
  }
  
  updateTimer(){
    this.timer++;
  }
  
  checkTimer(){
    return this.timer;
  }
  
  checkGame(){
    return this.sContact; 
  }
  
  reset(){
     fill(this.col);
  }

}

function busCollide(){
  if(you.x >= 50 && you.x<= 140 && you.y >=10 && you.y <=90)
    youWon();
}

function youWon(){
  noLoop();
  background(0);
  fill(255);
  textAlign(CENTER);
   textFont("Courier New");
    textSize(20)
  text("you got to the bus! yay!", width / 2, height / 2 + 30);
 // text("ew, other people.", width / 2, height / 2 - 30);

}