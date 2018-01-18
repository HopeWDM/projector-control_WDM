function hideStuff(id) {
	document.getElementById(id).style.display = 'none';
}
// that's a universal hiding function - sweet!

/*

main menu (per room) is "mainTop";

Naming conventions:
_tc = toggle controls
_mc = menu controls
_fz = focus/zoom
_ks = keystone
_ls = lens shift

*/


// initialize vars so we don't
// have to use quotes:

var display = 'display';

// mons:
var display_mon1 = 'display_mon1';
var display_mon2 = 'display_mon2';
var display_mon3 = 'display_mon3';
var display_mon4 = 'display_mon4';
var display_mon5 = 'display_mon5';
var display_mon6 = 'display_mon6';
var display_mon7 = 'display_mon7';
var display_mon8 = 'display_mon8';
var display_mon9 = 'display_mon9';
var display_mon10 = 'display_mon10';
var display_mon11 = 'display_mon11';
var display_mon12 = 'display_mon12';
var display_mon13 = 'display_mon13';
var display_mon14 = 'display_mon14';
var display_mon15 = 'display_mon15';
var display_mon16 = 'display_mon16';
var display_mon17 = 'display_mon17';
var display_mon18 = 'display_mon18';
var display_mon19 = 'display_mon19';
var display_mon20 = 'display_mon20';


function showDisplay(id) {
	hideDisplay(id);
	document.getElementById(id).style.display = 'block';
}



// start of "Display"

function hideDisplay(id) {
	hideStuff(display);
	hideStuff(display_mon1);
	hideStuff(display_mon2);
	hideStuff(display_mon3);
}
// end of "Display"
