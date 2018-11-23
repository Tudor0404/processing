<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>p5.js example</title>
    <style> body {padding: 0; margin: 0;} </style>
    <script src="C:\Users\tudor\Downloads\p5-js\p5.min.js"></script>
    <script src="C:\Users\tudor\Downloads\p5-js\addons\p5.dom.min.js"></script>
    <script src="C:\Users\tudor\Downloads\p5-js\addons\p5.sound.min.js"></script>
    <script src="sketch.js"></script>
  </head>
  <body>
  </body>
</html>

// Made by Tudor Popescu

var numRow = 100;
var numCol = 100;
var points = [];
var timesDrawed = 6; // make this '0' if you want to remove the lines between the triangles
var sat = (100 / 4) * 3;
var bright = (100 / 4) * 3;

function setup() {
  createCanvas(1000, 1000);
  background(0, 0, 0);
  colorMode(HSB,100,100,100);
}

function draw() {
  if (timesDrawed >= 3) {
    noLoop();
  } else {
    timesDrawed++;
  }
  noStroke()
  // create a list with all the point coords, used to draw triangles
  for (var r = 0; r < numRow; r++) {
    for (var c = 0; c < numCol; c++) {
      var tempX = (width / (numCol - 1)) * c;
      var tempY = (height / (numRow - 1)) * r;
      points.push([tempX, tempY]);
    }
  }
  print(points);
  // create trinagles
  for (var r = 0; r < numRow - 1; r++) {
    for (var c = 0; c < numCol - 1; c++ ) {
      if (r % 2 + 1 == 1) {
        if (c % 2 == 0) {
          // 'Green' trinagle
          fill(random(0,100),sat,bright);
          var point1 = c + (r * numRow);
          var point2 = c + (r * numRow) + numRow;
          var point3 = c + (r * numRow) + 1;
          triangle(points[point1][0],points[point1][1],points[point2][0],points[point2][1],points[point3][0],points[point3][1]);
          // 'Red' trinagle
          fill(random(0,100),sat,bright);
          point1 = c + (r * numRow) + numRow;
          point2 = c + (r * numRow) + 1;
          point3 = c + (r * numRow) + numRow + 1;
          triangle(points[point1][0],points[point1][1],points[point2][0],points[point2][1],points[point3][0],points[point3][1]);
        } else {
          // 'Green' trinagle
          fill(random(0,100),sat,bright);
          var point1 = c + (r * numRow);
          var point2 = c + (r * numRow) + 1;
          var point3 = c + (r * numRow) + numRow + 1;
          triangle(points[point1][0],points[point1][1],points[point2][0],points[point2][1],points[point3][0],points[point3][1]);
          // 'Red' trinagle
          fill(random(0,100),sat,bright);
          point1 = c + (r * numRow);
          point2 = c + (r * numRow) + numRow;
          point3 = c + (r * numRow) + numRow + 1;
          triangle(points[point1][0],points[point1][1],points[point2][0],points[point2][1],points[point3][0],points[point3][1]);
        }
      } else {
        if (c % 2 == 0) {
          // 'Green' trinagle
          fill(random(0,100),sat,bright);
          var point1 = c + (r * numRow);
          var point2 = c + (r * numRow) + numRow;
          var point3 = c + (r * numRow) + numRow + 1;
          triangle(points[point1][0],points[point1][1],points[point2][0],points[point2][1],points[point3][0],points[point3][1]);
          // 'Red' trinagle
          fill(random(0,100),sat,bright);
          point1 = c + (r * numRow);
          point2 = c + (r * numRow) + 1;
          point3 = c + (r * numRow) + numRow + 1;
          triangle(points[point1][0],points[point1][1],points[point2][0],points[point2][1],points[point3][0],points[point3][1]);
        } else {
          // 'Green' trinagle
          fill(random(0,100),sat,bright);
          var point1 = c + (r * numRow) + numRow;
          var point2 = c + (r * numRow) + 1;
          var point3 = c + (r * numRow) + numRow + 1;
          triangle(points[point1][0],points[point1][1],points[point2][0],points[point2][1],points[point3][0],points[point3][1]);
          // 'Red' trinagle
          fill(random(0,100),sat,bright);
          point1 = c + (r * numRow);
          point2 = c + (r * numRow) + numRow;
          point3 = c + (r * numRow) + 1;
          triangle(points[point1][0],points[point1][1],points[point2][0],points[point2][1],points[point3][0],points[point3][1]);
        }
      }
    }
  }
}
