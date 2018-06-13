/**||**************************************************
 **||2018.06.11
 **||Samuel Antonio Farach Rojas
 **||[farachsamuel@gmail.com]
 **||
 **||*************************************************/
//

//GENERAL
var c;
var w, h;
var mX, mH;

//LOGO
var img;
var logo1;
var logo2;
var logo1W;
var logo1H;
var logo2W;
var logo2H;

var logoOffURL = "https://raw.githubusercontent.com/SamuelFarach/EshharP5Logo/master/logoOff.png";
var logoOnURL = "https://raw.githubusercontent.com/SamuelFarach/EshharP5Logo/master/logoOn.png";


var loading, loaded;
var img;
var samples;

var svgOff;
var svgOn;

var barVect1 = createVector();
var barVect2 = createVector();
var barRad;
/****************************************************************************************************/
function preload()
{
  //
  //img = loadImage('https://cdn.rawgit.com/SamuelFarach/EshharP5Logo/9e049cbf/logoOn.png');
  //logo1 = loadImage("data/logoOff.png");
  //logo2 = loadImage("data/logoOn.png");
  //svgOn = loadSVG('https://cdn.rawgit.com/SamuelFarach/EshharP5Logo/b535deae/logoOn.svg');
  //svgOff = loadSVG('https://cdn.rawgit.com/SamuelFarach/EshharP5Logo/b535deae/logoOff.svg');

  //logoW = logo1.width;
  //logoH = logo1.height;
  //alert(logoW + " & " + logoH);
}
/****************************************************************************************************/
function setup()
{
  //GENERAL
  c = createCanvas(windowWidth, windowHeight * 0.2);
  c.parent('holder-canvas');
  //imageMode(CENTER);


  //LOGO
  //image(logo1, 0, 0, 200, 200);
  //loading = false;

}

/****************************************************************************************************/
function mouseClicked()
{
  //alert(logo1W + " & " + logo1H + "\n" + logo2W + " & " + logo2H);
}
/****************************************************************************************************/
function draw()
{
  //background("#DDDDDD");

}

/****************************************************************************************************/
function mousePressed()
{
	var xx = map(mouseX, 0, width, 0, 1.0);
	var element = document.getElementById('img2');
	element.style.opacity = xx;
	element.style.filter  = 'alpha(opacity=90)'; // IE fallback
}
function mouseDragged()
{
	mousePressed();
}
/****************************************************************************************************/
window.onresize = function() {
  c = createCanvas(window.innerWidth, window.innerHeight, SVG);
};
/****************************************************************************************************/

/****************************************************************************************************/
