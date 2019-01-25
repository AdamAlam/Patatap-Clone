// creating an empty array to fill with circle objects
var circles = [];

// list of the sounds that must be played with each key
var keyData ={
	a: {
		sound: new Howl({
			urls: ['A/bubbles.mp3']
		})
	},
	s: {
		sound: new Howl({
			urls: ['A/clay.mp3']
		})
	},
	d : {
		sound: new Howl({
			urls: ['A/confetti.mp3']
		})
	},
	f : {
		sound: new Howl({
			urls: ['A/corona.mp3']
		})
	},
	g : {
		sound: new Howl({
			urls: ['A/dotted-spiral.mp3']
		})
	},
	h : {
		sound: new Howl({
			urls: ['A/flash-1.mp3']
		})
	},
	j : {
		sound: new Howl({
			urls: ['A/flash-2.mp3']
		})
	},
	k : {
		sound: new Howl({
			urls: ['A/flash-3.mp3']
		})
	},
	l : {
		sound: new Howl({
			urls: ['A/glimmer.mp3']
		})
	},
	z : {
		sound: new Howl({
			urls: ['A/moon.mp3']
		})
	},
	x : {
		sound: new Howl({
			urls: ['A/pinwheel.mp3']
		})
	},
	c : {
		sound: new Howl({
			urls: ['A/piston-1.mp3']
		})
	},
	v : {
		sound: new Howl({
			urls: ['A/piston-2.mp3']
		})
	},
	b : {
		sound: new Howl({
			urls: ['A/piston-3.mp3']
		})
	},
	n : {
		sound: new Howl({
			urls: ['A/prism-1.mp3']
		})
	},
	m : {
		sound: new Howl({
			urls: ['A/prism-2.mp3']
		})
	},
	q : {
		sound: new Howl({
			urls: ['A/prism-3.mp3']
		})
	},
	w : {
		sound: new Howl({
			urls: ['A/splits.mp3']
		})
	},
	e : {
		sound: new Howl({
			urls: ['A/squiggle.mp3']
		})
	},
	r : {
		sound: new Howl({
			urls: ['A/strike.mp3']
		})
	},
	t : {
		sound: new Howl({
			urls: ['A/suspension.mp3']
		})
	},
	y : {
		sound: new Howl({
			urls: ['A/timer.mp3']
		})
	},
	u : {
		sound: new Howl({
			urls: ['A/ufo.mp3']
		})
	},
	i : {
		sound: new Howl({
			urls: ['A/veil.mp3']
		})
	},
	o : {
		sound: new Howl({
			urls: ['A/wipe.mp3']
		})
	},
	p : {
		sound: new Howl({
			urls: ['A/zig-zag.mp3']
		})
	},

}
// function that generates random coordinates on screen and
// draws new circle and plays the sound
function onKeyDown(event){
	if(keyData[event.key]){
		var maxPoint = new Point(view.size.width, view.size.height);
		var randomPoint = Point.random();
		var point = maxPoint * randomPoint;
		var newCircle = new Path.Circle(point, 120)
		newCircle.fillColor = genRand();
		keyData[event.key].sound.play();
		circles.push(newCircle)
		console.log(circles);
	}
	// removes the circle from the array after 1.4s
	setTimeout(function(){circles.shift()}, 1400);
}	
// function which decreases the size of the circle each frame
// this function also increases the hue by 1 every frame
function onFrame(event){
	for(var i = 0; i < circles.length; i++){
		circles[i].fillColor.hue +=1;
		circles[i].scale(.92);
	}
}

// generates random color for each keypress
function genRand(){
	var num1 = Math.floor(Math.random()*256);
	var num2 = Math.floor(Math.random()*256);
	var num3 = Math.floor(Math.random()*256);
	return ("rgb(" + num1 + ", " + num2 + ", " + num3 + ")");
}