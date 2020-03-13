	function setup() {
  createCanvas(400, 400);
      pixelDensity(1)
}

function draw() {
  background(121);


  loadPixels();

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      pixels[index] = random(0,255)
      pixels[index + 1] =random(0,255)
      pixels[index + 2] = random(0,255)
      pixels[index + 3] = 255

    }

  }
  updatePixels();
}