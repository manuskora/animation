let stars = []

function setup() {

    // create a canvas that fills the browser window and attach it to your HTML
    createCanvas(windowWidth, windowHeight).parent('p5')
    // the p5 variables "width" and "height" hold the dimensions of the canvas
    for(i=0;i<100;i++){
    let random_star = {x:random(0,width), y:random(0,height), color:[random(100,255),random(100,255),random(100,255),255], size:random(1,2), vx:random(-5,5), vy:random(-5,5), vblink:random(-10,10), vsize:random(-.05,.05)}
    stars.push(random_star)

    }

}

function draw() {

    background(0,0,0,60)
    for (let star of stars){

    noStroke()
    fill(star.color)
    angleMode(DEGREES)
    beginShape()
    vertex(star.x+10*star.size*cos(0),star.y+10*star.size*sin(0))
    vertex(star.x+5*star.size*cos(36),star.y+5*star.size*sin(36))
    vertex(star.x+10*star.size*cos(72),star.y+10*star.size*sin(72))
    vertex(star.x+5*star.size*cos(108),star.y+5*star.size*sin(108))
    vertex(star.x+10*star.size*cos(144),star.y+10*star.size*sin(144))
    vertex(star.x+5*star.size*cos(180),star.y+5*star.size*sin(180))
    vertex(star.x+10*star.size*cos(216),star.y+10*star.size*sin(216))
    vertex(star.x+5*star.size*cos(252),star.y+5*star.size*sin(252))
    vertex(star.x+10*star.size*cos(288),star.y+10*star.size*sin(288))
    vertex(star.x+5*star.size*cos(324),star.y+5*star.size*sin(324))
    endShape(CLOSE)
    star.x += star.vx
    if(star.x>=width&&star.vx>=0){
      star.x=0
    }
    if(star.x<=0&&star.vx<=0){
      star.x=width
    }
    star.y += star.vy
    if(star.y>=height&&star.vy>=0){
      star.y=0
    }
    if(star.x<=0&&star.vy<=0){
      star.x=0
    }

    star.color=[red(star.color),green(star.color),blue(star.color),alpha(star.color)+star.vblink]
    if(alpha(star.color)>=255&&star.vblink>0){
      star.vblink=-star.vblink
    }
    if(alpha(star.color)<=0&&star.vblink<0){
      star.vblink=-star.vblink
    }
    star.size+=star.vsize
    if(star.size>=3&&star.vsize>0){
      star.vsize=-star.vsize
    }
    if(star.size<=0&&star.vsize<0){
      star.vsize=-star.vsize
    }
    }


}

// if the window is resized, resize the canvas to match
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
