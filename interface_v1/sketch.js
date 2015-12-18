var start = true;
var exo2, exo2l;

function preload() {
  exo2 = loadFont('exo-2/Exo2.0-Regular.otf');
  exo2l = loadFont('exo-2/Exo2.0-Light.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(42, 56, 47);
  loadImage('img/Brown-Tree-Logo.png', function(logo) {
    image(logo, (width/2) - 75, height - 180, 150, 150);
  });
}

function draw() {
  if (start == true){
    fill(200, 175, 75);
    textAlign(CENTER);
    textFont(exo2);
    textSize(52);
    text('Name Game', width/2, height/4);
    textSize(32);
    textFont(exo2l);
    text('To begin,\nscan all players\' bracelets and press green button', width/2, height/2);
    start = false;
  }
}
  
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
  