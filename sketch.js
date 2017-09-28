function setup() {
    createCanvas(960,593);
    ellipseMode(RADIUS);
    noStroke();
}

var a = 40;
var b = 20;
var aspeed = 4;
var bspeed = 6;

function draw() {
    
//    background rain/gillet effects
    
    background(12);
    frameRate(7);
    for(y=20; y<height; y+=20) {
    
        for (x=10; x<width; x+=20) {
        fill(30,random(1,205),244); rain(x,y,random(1,5));
        }
    }
    
//mouse follower effect
    
    fill(218,49,36,80);
    ellipse(mouseX,mouseY,80,80);   
    
    
//bouncing ball

  	fill (random(100, 200), random(210, 230), random(100,300), 90);
  	ellipse (a,b,130,130);

 	 a = a + aspeed;
  	
  	 if (a > windowWidth || a < 0)  {
     	aspeed = -aspeed;
  	}

  	b = b + bspeed;

  	if (b > windowHeight || b < 0) {
	 	  bspeed = -bspeed;
  	}
    
    
}
function rain(x,y,d) {
    if (!d) {
        d=30;
    }
    ellipse(x,y,d,d); 
}
