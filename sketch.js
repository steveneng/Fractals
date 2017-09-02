var angle= PI/4,
    slider,
    slider2;

function setup(){
  createCanvas(1000,1000);
  slider= createSlider(0, TWO_PI, PI/4, 0.01);
  slider2= createSlider(1,700,100,1);
};

function draw(){
  background(51);
  angle= slider.value(); // stores the angle value
  branchLength=slider2.value();
  console.log(branchLength);
  stroke(255); // color value
  translate(500,height); // changes to the right side
  branch(branchLength);
}

function branch (len){
  line(0,0,0,-len);
  translate(0,-len);
  if(len > 4){
    push();
    rotate(frameCount / 90.0);
    branch(len*.70);
    pop();
    push();
    rotate(-frameCount / 70.0 *.80);
    branch(len*.70);
    pop();
  }
}// how long this branch is
