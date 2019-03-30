var a = 0.0;
var b;

var sponge = [];

function setup() {
	createCanvas(400, 400, WEBGL);
	normalMaterial()

	b = new Box(0, 0, 0, 200);
	sponge.push(b);
}

function mousePressed() {
	var next = [];
	for (var i = 0; i < sponge.length; i++) {
		var newboxes = sponge[i].generate();
		next = next.concat(newboxes);
	}
	sponge = next;
}

function draw() {
	background(51);
	noStroke();
	//stroke(255);
	//fill(255);

	//translate(width / 2, height / 2);
	rotateX(a);
	rotateY(a * 0.4);
	rotateZ(a * 0.1);
	for (var i = 0; i < sponge.length; i++) {
		sponge[i].show();
	}

	a += 0.01;
}