

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
  

  for (let i = 0; i < students.length; i++) {
    let s = students[i];
    s.display();
    s.move();
    s.displayGrass()
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
  
  // bus.y += sin(frameCount * random(-0.001, 0.001) )
  // bus.x += sin(frameCount * random(-0.019, 0.026))
  
  busR.y += sin(frameCount * random(-0.6336, 3.1094) )
  busR.x += sin(frameCount * random(-0.1028, 0.0026))
  
   busG.y += sin(frameCount * random(-2.8094, 0.129) )
  busG.x += sin(frameCount * random(-0.0023, 0.0056))

   youB.y += sin(frameCount * random(-2.191, 5.741) )
  youB.x += sin(frameCount * random(-0.0029, 0.0036))
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
  push();
  rect(bus.x+width/2-180, bus.y+70, 4, 4)
  rect(bus.x+width/2-184, bus.y+74, 4, 4)
  rect(bus.x+width/2-176, bus.y+74, 4, 4)
  rect(bus.x+width/2-180, bus.y+78, 4, 4)
  
  rect(bus.x+width/2-180, bus.y+67, 6, 4)
  rect(bus.x+width/2-186, bus.y+74, 4, 6)
  rect(bus.x+width/2-174, bus.y+74, 6, 4)
  rect(bus.x+width/2-180, bus.y+80, 6, 4)
  pop();
  
  //busr
    push();
  
  strokeWeight(0.4);
  stroke(255);
  fill(255, 0, 0, 60);
  rect(busR.x+width / 10, busR.y+50, 130, 40, 5);
  pop();
  push();
  strokeWeight(7);
  stroke(0);
  fill(255, 0, 0, 60);
  circle(busR.x+width / 10 + busR.y+30, 90, 20);
  circle(busR.x+width / 10 + busR.y+100, 90, 20);
  pop();
  push();
  fill(255, 0, 0, 60)
  rect(busR.x+width/2-110, busR.y+54, 15  , 5 ,6)
  pop();
  push();
  stroke(255, 0, 0, 60);
  strokeWeight(1.5);
  rect(busR.x+width/2-113, busR.y+51, 2  , 25 ,2)
  pop();
  push();
  fill(255, 0, 0, 60)
  rect(busR.x+width/2-140, busR.y+57, 19, 15 ,2)
  rect(busR.x+width/2-160, busR.y+57, 19, 15 ,2)
  push();
  fill(255, 0, 0, 60)
  rect(busR.x+width/2-185, busR.y+57, 17, 30, 2)
  pop();
  rect(busR.x+width/2-220, busR.y+57, 19, 15 ,2)
  pop();
  push();
  fill(255, 0, 0, 60)
  rect(busR.x+width/2-100, busR.y+52, 6  , 15 ,6)
  pop();
  push();
  rect(busR.x+width/2-180, busR.y+70, 4, 4)
  rect(busR.x+width/2-184, busR.y+74, 4, 4)
  rect(busR.x+width/2-176, busR.y+74, 4, 4)
  rect(busR.x+width/2-180, busR.y+78, 4, 4)
  
  rect(busR.x+width/2-180, busR.y+67, 6, 4)
  rect(busR.x+width/2-186, busR.y+74, 4, 6)
  rect(busR.x+width/2-174, busR.y+74, 6, 4)
  rect(busR.x+width/2-180, busR.y+80, 6, 4)
  pop();
  
  //busg
  
    push();
  
  strokeWeight(0.4);
  stroke(0, 255, 0, 60);
  fill(0, 255, 0, 60);
  rect(busG.x+width / 10, busG.y+50, 130, 40, 5);
  pop();
  push();
  strokeWeight(7);
  stroke(0);
  fill(0, 255, 0, 60);
  circle(busG.x+width / 10 + busG.y+30, 90, 20);
  circle(busG.x+width / 10 + busG.y+100, 90, 20);
  pop();
  push();
  fill(0, 255, 0, 60)
  rect(busG.x+width/2-110, busG.y+54, 15  , 5 ,6)
  pop();
  push();
  stroke(0, 255, 0, 60);
  strokeWeight(1.5);
  rect(busG.x+width/2-113, busG.y+51, 2  , 25 ,2)
  pop();
  push();
  fill(100)
  rect(busG.x+width/2-140, busG.y+57, 19, 15 ,2)
  rect(busG.x+width/2-160, busG.y+57, 19, 15 ,2)
  push();
  fill(0, 255, 0, 60)
  rect(busG.x+width/2-185, busG.y+57, 17, 30, 2)
  pop();
  rect(busG.x+width/2-220, busG.y+57, 19, 15 ,2)
  pop();
  push();
  fill(0, 255, 0, 60)
  rect(busG.x+width/2-100, busG.y+52, 6  , 15 ,6)
  pop();
  push();
  rect(busG.x+width/2-180, busG.y+70, 4, 4)
  rect(busG.x+width/2-184, busG.y+74, 4, 4)
  rect(busG.x+width/2-176, busG.y+74, 4, 4)
  rect(busG.x+width/2-180, busG.y+78, 4, 4)
  
  rect(busG.x+width/2-180, busG.y+67, 6, 4)
  rect(busG.x+width/2-186, busG.y+74, 4, 6)
  rect(busG.x+width/2-174, busG.y+74, 6, 4)
  rect(busG.x+width/2-180, busG.y+80, 6, 4)
  pop();
  //busb
    push();
  
  strokeWeight(0.4);
  stroke(0, 0, 255, 60);
  fill(0, 0, 255, 60);
  rect(busB.x+width / 10, busB.y+50, 130, 40, 5);
  pop();
  push();
  strokeWeight(7);
  stroke(0);
  fill(0, 0, 255, 60);
  circle(busB.x+width / 10 + busB.y+30, 90, 20);
  circle(busB.x+width / 10 + busB.y+100, 90, 20);
  pop();
  push();
  fill(0, 0, 255, 60)
  rect(busB.x+width/2-110, busB.y+54, 15  , 5 ,6)
  pop();
  push();
  stroke(100);
  strokeWeight(1.5);
  rect(busB.x+width/2-113, busB.y+51, 2  , 25 ,2)
  pop();
  push();
  fill(0, 0, 255, 60)
  rect(busB.x+width/2-140, busB.y+57, 19, 15 ,2)
  rect(busB.x+width/2-160, busB.y+57, 19, 15 ,2)
  push();
  fill(0, 0, 255, 60)
  rect(busB.x+width/2-185, busB.y+57, 17, 30, 2)
  pop();
  rect(busB.x+width/2-220, busB.y+57, 19, 15 ,2)
  pop();
  push();
  fill(0, 0, 255, 60)
  rect(busB.x+width/2-100, busB.y+52, 6  , 15 ,6)
  pop();
  push();
  rect(busB.x+width/2-180, busB.y+70, 4, 4)
  rect(busB.x+width/2-184, busB.y+74, 4, 4)
  rect(busB.x+width/2-176, busB.y+74, 4, 4)
  rect(busB.x+width/2-180, busB.y+78, 4, 4)
  
  rect(busB.x+width/2-180, busB.y+67, 6, 4)
  rect(busB.x+width/2-186, busB.y+74, 4, 6)
  rect(busB.x+width/2-174, busB.y+74, 6, 4)
  rect(busB.x+width/2-180, busB.y+80, 6, 4)
  pop();
  
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
  text("just refresh to restart heh, good luck :D", width / 2, height / 2 + 30);
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
    this.ry = y;
    this.rx = x;
    this.gy = y;
    this.gx = x;
    this.by = y;
    this.bx = x;
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
    push();
    fill(120);
    rect(this.x, this.y, this.dia-5)
    circle(this.x, this.y, this.dia-6);
    rect(this.x+9, this.y+25, this.dia-19, this.dia-29)
    rect(this.x+19, this.y+21, this.dia-19, this.dia-29)
    
    push();
    fill(255, 0, 0, 60);
    rect(this.rx, this.ry, this.dia-5)
    circle(this.rx, this.ry, this.dia-6);
    rect(this.rx+9, this.ry+25, this.dia-19, this.dia-29)
    rect(this.rx+19, this.ry+21, this.dia-19, this.dia-29)
    
    push();
    fill(0, 255, 0, 60);
    rect(this.gx, this.gy, this.dia-5)
    circle(this.gx, this.gy, this.dia-6);
    rect(this.gx+9, this.gy+25, this.dia-19, this.dia-29)
    rect(this.gx+19, this.gy+21, this.dia-19, this.dia-29)
    
    push();
    fill(0, 0, 255, 60);
    rect(this.bx, this.by, this.dia-5)
    circle(this.bx, this.by, this.dia-6);
    rect(this.bx+9, this.by+25, this.dia-19, this.dia-29)
    rect(this.bx+19, this.by+21, this.dia-19, this.dia-29)
     this.y += sin(frameCount * random(-0.01, 0.01) )
  this.x += sin(frameCount * random(-0.019, 0.026))
    
     this.ry += sin(frameCount * random(-0.6336, 3.1094) )
  this.rx += sin(frameCount * random(-0.1028, 0.0026))
  
   this.gy += sin(frameCount * random(-2.8094, 0.129) )
  this.gx += sin(frameCount * random(-0.0023, 0.0056))

   this.by += sin(frameCount * random(-2.191, 5.741) )
  this.bx += sin(frameCount * random(-0.0029, 0.0036))
    pop();
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