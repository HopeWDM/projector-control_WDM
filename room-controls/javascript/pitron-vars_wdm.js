
// initilize location/address variables with meaningless content,
// so that they equal themselves. (This is needed for a
// switch/case block later on.)

var atriumHL = 'atriumHL';
var atriumHR = 'atriumHR';
var wcMainHL = 'wcMainHL';
var wcMainHR = 'wcMainHR';
var wcFoldbackHL = 'wcFoldbackHL';
var wcFoldbackHR = 'wcFoldbackHR';
var wcFootballTV = 'wcFootballTV';
var wcCatwalk01 = 'wcCatwalk01';
var wcCatwalk02 = 'wcCatwalk02';
var wcCatwalk03 = 'wcCatwalk03';
var wcCatwalk04 = 'wcCatwalk04';
var wcCatwalk05 = 'wcCatwalk05';
var wcMons = 'wcMons';
var wcMon01 = 'wcMon01';
var wcMon02 = 'wcMon02';
var wcMon03 = 'wcMon03';
var wcMon04 = 'wcMon04';
var wcMon05 = 'wcMon05';
var wcMon06 = 'wcMon06';
var wcMon07 = 'wcMon07';
var wcMon08 = 'wcMon08';
var wcMon09 = 'wcMon09';
var wcMon10 = 'wcMon10';
var wcMon11 = 'wcMon11';
var wcMon12 = 'wcMon12';
var wcMon13 = 'wcMon13';
var wcMon14 = 'wcMon14';
var wcMon15 = 'wcMon15';
var wcMon16 = 'wcMon16';


// these functions have code pulled from the
// extronBox() function, such that all
// "generic" code is in one file, and
// all the "specific" code resides in
// other files (or at least one other)

function populateVars (address) {
	/*
		This switch block is the code that sets up
		our variables for the different projectors.
		
		It knows, per room, what ports correspond to
		what projector - so you don't have to remember.
	*/
	switch (address) {
		case 'atriumHL':
			mainCenter = '01';
			address = 'http://10.40.30.85/cgi-bin/cgi.pl';
			break;
		case 'atriumHR':
			mainCenter = '01';
			address = 'http://10.40.30.86/cgi-bin/cgi.pl';
			break;
		case 'wcMainHL':
			address = 'http://10.40.30.81/cgi-bin/cgi.pl';
			break;
		case 'wcMainHR':
			address = 'http://10.40.30.82/cgi-bin/cgi.pl';
			break;
		case 'wcFoldbackHL':
			address = 'http://10.40.30.83/cgi-bin/cgi.pl';
			break;
		case 'wcFoldbackHR':
			address = 'http://10.40.30.84/cgi-bin/cgi.pl';
			break;
		case 'wcFootballTV':
			address = 'http://10.40.30.###/cgi-bin/cgi.pl';
			break;
		case 'wcCatwalk01':
			address = 'http://10.40.30.###/cgi-bin/cgi.pl';
			break;
		case 'wcCatwalk02':
			address = 'http://10.40.30.95/cgi-bin/cgi.pl';
			break;
		case 'wcCatwalk03':
			address = 'http://10.40.30.###/cgi-bin/cgi.pl';
			break;
		case 'wcCatwalk04':
			address = 'http://10.40.30.###/cgi-bin/cgi.pl';
			break;
		case 'wcCatwalk05':
			address = 'http://10.40.30.###/cgi-bin/cgi.pl';
			break;
		case 'wcMons':
			address = 'http://10.40.30.94/cgi-bin/cgi.pl';
			id = '00';
			break;
		case 'wcMon01':
			address = 'http://10.40.30.94/cgi-bin/cgi.pl';
			id = '01';
			break;
		case 'wcMon02':
			address = 'http://10.40.30.94/cgi-bin/cgi.pl';
			id = '02';
			break;
		case 'wcMon03':
			address = 'http://10.40.30.94/cgi-bin/cgi.pl';
			id = '03';
			break;
		case 'wcMon04':
			address = 'http://10.40.30.94/cgi-bin/cgi.pl';
			id = '04';
			break;
		case 'wcMon05':
			address = 'http://10.40.30.94/cgi-bin/cgi.pl';
			id = '05';
			break;
		case 'wcMon06':
			address = 'http://10.40.30.94/cgi-bin/cgi.pl';
			id = '06';
			break;
		case 'wcMon07':
			address = 'http://10.40.30.94/cgi-bin/cgi.pl';
			id = '07';
			break;
		case 'wcMon08':
			address = 'http://10.40.30.94/cgi-bin/cgi.pl';
			id = '08';
			break;
		case 'wcMon09':
			address = 'http://10.40.30.94/cgi-bin/cgi.pl';
			id = '09';
			break;
		case 'wcMon10':
			address = 'http://10.40.30.94/cgi-bin/cgi.pl';
			id = '0A';
			break;
	}
	misc = id;
	return address;
}
