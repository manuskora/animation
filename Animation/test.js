let bouncing_balls = []
let bouncing_squares = []
let bouncing_triangles = []
let background_color

function setup() {
  let squares = int(random(0,6))
  let circles = int(random(0,6))
  let triangles = int(random(0,6))
  // create a canvas that fills the browser window and attach it to your HTML
  createCanvas(windowWidth, windowHeight).parent('p5')
  background_color=[random(255),random(255),random(255),random(0,255)]
  // the p5 variables "width" and "height" hold the dimensions of the canvas
  for(i=0;i<circles;i++){
  let random_ball = {x:random(0,width),y:random(0,height),size:random(1,200),vx:random(-5,5),vy:random(-5,5),ay:1,color:[random(0,255),random(0,255),random(0,255),random(0,255)],vsize:random(0,3)}

  bouncing_balls.push(random_ball)
  }

  for(i=0;i<squares;i++){
  let random_square = {x:random(0,width),y:random(0,height),size:random(1,200),vx:random(-5,5),vy:random(-5,5),ay:1,color:[random(0,255),random(0,255),random(0,255),random(0,255)],vsize:random(0,3)}

  bouncing_squares.push(random_square)
  }

  for(i=0;i<triangles;i++){
  let random_triangle = {x:random(0,width),y:random(0,height),size:random(1,100),vx:random(-5,5),vy:random(-5,5),ay:1,color:[random(0,255),random(0,255),random(0,255),random(0,255)],vsize:random(0,3)}

  bouncing_triangles.push(random_triangle)
  }

}

function draw() {

    background(background_color)
    for (let ball of bouncing_balls){
    fill(ball.color)
    noStroke()
    circle(ball.x, ball.y, ball.size)
    ball.x+=ball.vx
    ball.y+=ball.vy
    if(ball.x > width){
      ball.vx=-ball.vx
    }
    if(ball.x < 0){
      ball.vx=-ball.vx
    }
    if(ball.y >= height){
      ball.vy =-ball.vy
    }
    if(ball.y <= 0){
      ball.vy=-ball.vy
    }
    if(ball.y<height){
      ball.vy=ball.vy+ball.ay
    }
    ball.size+=ball.vsize

    if ((ball.size>=250&&ball.vsize>0)||(ball.size<=10&&ball.vsize<0)){
      ball.vsize=-ball.vsize
    }

  }
  for (let ball of bouncing_squares){
    fill(ball.color)
    noStroke()
    square(ball.x, ball.y, ball.size)
    ball.x+=ball.vx
    ball.y+=ball.vy
    if(ball.x > width){
      ball.vx=-ball.vx
    }
    if(ball.x < 0){
      ball.vx=-ball.vx
    }
    if(ball.y >= height){
      ball.vy =-ball.vy
    }
    if(ball.y <= 0){
      ball.vy=-ball.vy
    }
    if(ball.y<height){
      ball.vy=ball.vy+ball.ay
    }
    ball.size+=ball.vsize

    if ((ball.size>=250&&ball.vsize>0)||(ball.size<=10&&ball.vsize<0)){
      ball.vsize=-ball.vsize
    }

  }

  for (let ball of bouncing_triangles){
  fill(ball.color)
  noStroke()
  triangle(ball.x-pow(3,.5)*ball.size, ball.y+ball.size, ball.x+pow(3,.5)*ball.size, ball.y+ball.size, ball.x, ball.y-2*ball.size)
  ball.x+=ball.vx
  ball.y+=ball.vy
  if(ball.x > width){
    ball.vx=-ball.vx
  }
  if(ball.x < 0){
    ball.vx=-ball.vx
  }
  if(ball.y >= height){
    ball.vy =-ball.vy
  }
  if(ball.y <= 0){
    ball.vy=-ball.vy
  }
  if(ball.y<height){
    ball.vy=ball.vy+ball.ay
  }
  ball.size+=ball.vsize

  if ((ball.size>=150&&ball.vsize>0)||(ball.size<=10&&ball.vsize<0)){
    ball.vsize=-ball.vsize
  }

}

}

// if the window is resized, resize the canvas to match
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
