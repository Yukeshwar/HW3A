function setup() {
  createCanvas(2000, 2000); 
  background(255, 204, 0); 
  let dotSize1 = 30; 
  let dotSize2 = 60; 
  let spacing = 100; 

  for (let y = 0; y < height; y += spacing)
     { 
    for (let x = 0; x < width; x += spacing)
      { 
      fill(0); 
      noStroke(); 
      let dotSize = ((x / spacing) + (y / spacing)) % 2 * (dotSize2 - dotSize1) + dotSize1;
      ellipse(x + spacing / 2, y + spacing / 2, dotSize, dotSize);
    }
  }
}
function draw() {

}
