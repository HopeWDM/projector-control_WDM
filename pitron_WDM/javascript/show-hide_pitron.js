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


// main left:
var display = 'display';
var display_tc = 'display_tc';
var display_mc = 'display_mc';
var display_fz = 'display_fz';
var display_ks = 'display_ks';
var display_ls = 'display_ls';




function showDisplay(id) {
	hideDisplay(id);
	document.getElementById(id).style.display = 'block';
}




/*
	end of "main" segments;
	start of "individual" segments;
*/







// start of "Display"
function hideDisplay(id) {
	hideStuff(display);
	hideStuff(display_tc);
	hideStuff(display_mc);
	hideStuff(display_fz);
	hideStuff(display_ks);
	hideStuff(display_ls);
	
}
// end of "Display"



// done - at least for now...;
