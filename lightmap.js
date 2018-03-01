var mapImg;

function preload() {
	mapImg = loadImage("webmerc.jpg");
}
function setup() {
	createCanvas(mapImg.width, mapImg.height);
	angleMode(RADIANS);
	image(mapImg, 0, 0);

	var mx = mercX(53);
	var my = mercY(-6);

	fill(0,0,255);
	ellipse(mx, my, 16, 16);

	var lat = 52;
	var lon = -6;


	var x = (lon+180)*(mapImg.width/360)

	// convert from degrees to radians
	var latRad = lat*PI/180;

	// get y value
	var mercN = log(tan((PI/4)+(latRad/2)));
	var y     = (mapImg.height/2)-(mapImg.width*mercN/(2*PI));

	fill(0,255,0);
	ellipse(x-8, y-8, 16, 16);
}

function mercX(lon) {
  lon = radians(lon);
  return (128 / PI) * pow(2, 1) * (lon + PI);
}

function mercY(lat) {
  lat = radians(lat);
  return (128 / PI) * pow(2, 1) * (PI - log(tan((PI / 4.0) + (lat / 2.0))));
}


