import {MyToolkit} from './mytoolkit.js';


// Implement a MyToolkit Button
var btn = new MyToolkit.Button;
var text= "Start";
btn.push(text);
btn.move(24,100);
btn.onclick(function(e){
	console.log(e);
});

var cb = new MyToolkit.CheckBox;
var text = "Apple";
cb.push(text);
cb.move(24,55);
cb.onclick(function(e){
	console.log(e);
});

var rb1= new MyToolkit.RadioButton;
let options_arr = [];
options_arr.push("Option 1", false);
options_arr.push("Option 2", true);
options_arr.push("Option 3", false);
options_arr.push("Option 4", false);
rb1.options(options_arr);
rb1.move(24,0);
rb1.onclick(function(e){
	console.log(e);
});

var tb= new MyToolkit.TextBox;
// Click on the text box to view the inputted text on the console
tb.onclick(function(e){
	console.log(e);
});



var sb= new MyToolkit.Scrollbar;
var y=150; 
sb.height(y);
var thumb_position = sb.getPos(); //returns the position of the thumb/ knob

sb.onclick(function(e){
	console.log(e);
	console.log("Position is (x,y):" + thumb_position);
});

var pb = new MyToolkit.ProgressBar;
var width = 100;
var incr = 50;
pb.move(width, incr);

// Click on the Progress bar to get the inputted text on the console
pb.onclick(function(e){
	console.log(e);
});


var rank = new MyToolkit.Ranking;
var r_txt1 = "Netflix";
var r_txt2 = "Amazon Prime";
var r_txt3 = "YouTube"
rank.setOptions(r_txt1, r_txt2 , r_txt3);
rank.onclick(function(e){
	console.log(e);
});
