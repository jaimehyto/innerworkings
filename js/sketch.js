let cx = 0;
function setup() {
  createCanvas(1500,800, WEBGL);
  createEasyCam();
  document.oncontextmenu = ()=>false;
  angleMode(DEGREES);
}

function draw() {
  // always redraw
  background(127);
  // drawGrid(20, 20, 100);
  // drawAxis();
  let c = map(noise(cx), 0, 1, 0, 255);
  cx += 0.01;

  // ** put your code below this **/
  // ...
  noFill();
  //centerSquare
  push();
  translate(0, 0, 250);
  strokeWeight(5);
  box(500);
  noStroke();
  fill(c);
  sphere(40);
  noFill();
  stroke(255);
  rotateX(millis()/50);
  rotateZ(millis()/50);
  line(250, 0, 250, 0, -250, 250);
  line(0, -250, 250, -250, 0, 250);
  line(-250, 0, 250, 0, 250, 250);
  line(0, 250, 250, 250, 0, 250);
  line(250, 0, 250, 0, 0, -250);
  line(0, -250, 250, 0, 0, -250);
  line(-250, 0, 250, 0, 0, -250);
  line(0, 250, 250, 0, 0, -250);
  pop();
  
  //bottom
  push();
  translate(0, 0, -250);
  box(500);
  noStroke();
  fill(c);
  sphere(40);
  noFill();
  stroke(66, 135, 245);
  strokeWeight(5);
  rotate(frameCount*0.1);
  sphere(350, 10, 4);
  pop();
  
  //top
  push();
  translate(0, 0, 750);
  box(500);
  noStroke();
  fill(c);
  sphere(40);
  rotateY(millis() / 100);
  rotateX(90);
  strokeWeight(5);
  noFill();
  stroke(245, 66, 96);
  ellipsoid(400, 400, 400, 12, 2);
  pop();
  
  //down
  push();
  translate(0, 500, 250);
  box(500);
  noStroke();
  fill(c);
  sphere(40);
  noFill();
  stroke(129, 66, 245);
  strokeWeight(5);
  rotateX(45);
  rotateZ(45);
  rotate(millis()/50);
  cylinder(200, 400, 10, 3, false, false);
  pop();
  
  //up
  push();
  translate(0, -500, 250);
  box(500);
  noStroke();
  fill(c);
  sphere(40);
  noFill();
  stroke(245, 156, 66);
  strokeWeight(5);
  rotateZ(millis()/100);
  box(400);
  pop();
  
  //right
  push();
  translate(500, 0, 250);
  box(500);
  noStroke();
  fill(c);
  sphere(40);
  stroke(126, 245, 66);
  noFill();
  strokeWeight(5);
  rotateX(millis()/-70);
  rotateY(millis()/70);
  torus(200, 100, 5, 4);
  pop();
  
  //left
  push();
  translate(-500, 0, 250);
  box(500);
  noStroke();
  fill(c);
  sphere(40);
  noFill();
  stroke(245, 230, 66);
  strokeWeight(5);
  rotateY(millis()/100);
  rotateZ(millis()/100);
  plane(600, 600);
  pop();
}

/* This draws the axis on the 3D plane */
function drawAxis(){
  push();
  strokeWeight(3);
  let sz = 300;
  // draw the lines
  stroke(255,0,0); // R
  line(0,0,0,sz,0,0); // X
  stroke(0,255,0); // G
  line(0,0,0,0,sz,0); // Y
  stroke(0,0,255); //B
  line(0,0,0,0,0,sz); // Z

  // draw the tips
  strokeWeight(12);
  stroke(255,0,0); // R
  point(sz,0,0); // X
  stroke(0,255,0); // G
  point(0,sz,0); // Y
  stroke(0,0,255); //B
  point(0,0,sz); // Z

  pop();
}


/* draw a grid with variable width height and size */
function drawGrid(rows, cols, sz){
  push();
  stroke(255);
  // move to negative edge of the grid
  translate(-rows*0.5*sz,-cols*0.5*sz );

  // draw the rows
  for(let i = 0; i < rows+1; i++){
    line(i *sz, 0 ,i*sz, cols*sz);
  }
  // draw the columns
  for(let j = 0; j < cols+1; j++){
    line(0,j *sz, rows*sz ,j*sz);
  }

  pop();
}
