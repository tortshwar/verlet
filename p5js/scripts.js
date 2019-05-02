function setup() {
  createCanvas(windowWidth, windowHeight);
}

const bg = '#f6f6f6';


points = [],
  restitution = 0.675,
  gravity = 0.5;

points.push({
  x: window.screen.width/2,
  y: 101,
  oldx: (window.screen.width/2)-10,
  oldy: 100,
  r: 5,
  fill: '#f6f',
  stroke: '#000',
  trail: 1,
  hist: []
});

function draw() {
  updatePoints();
  renderPoints();
}

function updatePoints() {
  for(var i=0; i < points.length; i++) {
    var p = points[i],
    vx = p.x - p.oldx;
    vy = p.y - p.oldy;
    
    p.oldx = p.x;
    p.oldy = p.y;
    p.x += vx;
    p.y += vy;
    p.y += gravity;
    
    if(p.x > width) {
      p.x = width;
      p.oldx = p.x + vx * restitution;
    }
    if(p.x < 0) {
      p.x = 0;
      p.oldx = p.x + vx * restitution;
    }
    if(p.y > height) {
      p.y = height;
      p.oldy = p.y + vy * restitution;
    }
    if(p.y < 0) {
      p.y = 0;
      p.oldy = p.y + vy * restitution;
    }
  }
}

function renderPoints() {
  background(bg);
  
  for(var i=0; i < points.length; i++) {
    var p = points[i];
    p.hist.push({
      x: p.x,
      y: p.y
    });
    if(p.trail === 0) {
      fill(p.fill);
      stroke(p.stroke);
      ellipse(p.x, p.y, p.r);
    }
    else {
      fill(p.fill);
      stroke(p.stroke);
      ellipse(p.x, p.y, p.r);
      
      noFill();
      beginShape();
      for(var j=0; j < p.hist.length; j++) {
        var h = p.hist[j];
        vertex(h.x, h.y);
        console.log(p.hist.length);
      }
      endShape();
    }
  if(p.hist.length === 5) {
    p.hist.splice(0, 1);
  }
  }
}