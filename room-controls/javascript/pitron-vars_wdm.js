
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
var wcPlasma01 = 'wcPlasma01';
var wcPlasma02 = 'wcPlasma02';
var wcPlasma03 = 'wcPlasma03';
var wcPlasma04 = 'wcPlasma04';
var wcPlasma05 = 'wcPlasma05';
var wcPlasma06 = 'wcPlasma06';


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
	switch (address)
	{
		case 'atriumHL':
			mainCenter = '01';
			atriumHL = 'http://10.40.30.85/cgi-bin/cgi.pl';
			break;
		case 'atriumHR':
			mainCenter = '01';
			atriumHR = 'http://10.40.30.86/cgi-bin/cgi.pl';
			break;
		case 'wcMainHL':
			wcMainHL = 'http://10.40.30.###/cgi-bin/cgi.pl';
			break;
		case 'wcMainHR':
			wcMainHR = 'http://10.40.30.###/cgi-bin/cgi.pl';
			break;
		case 'wcFoldbackHL':
			wcFoldbackHL = 'http://10.40.30.###/cgi-bin/cgi.pl';
			break;
		case 'wcFoldbackHR':
			wcFoldbackHR = 'http://10.40.30.###/cgi-bin/cgi.pl';
			break;
		case 'wcFootballTV':
			wcFootballTV = 'http://10.40.30.###/cgi-bin/cgi.pl';
			break;
		case 'wcCatwalk01':
			wcCatwalk01 = 'http://10.40.30.###/cgi-bin/cgi.pl';
			break;
		case 'wcCatwalk02':
			wcCatwalk02 = 'http://10.40.30.###/cgi-bin/cgi.pl';
			break;
		case 'wcCatwalk03':
			wcCatwalk03 = 'http://10.40.30.###/cgi-bin/cgi.pl';
			break;
		case 'wcCatwalk04':
			wcCatwalk04 = 'http://10.40.30.###/cgi-bin/cgi.pl';
			break;
		case 'wcCatwalk05':
			wcCatwalk05 = 'http://10.40.30.###/cgi-bin/cgi.pl';
			break;
		case 'wcPlasma01':
			wcPlasma01 = 'http://10.40.30.###/cgi-bin/cgi.pl';
			break;
		case 'wcPlasma02':
			wcPlasma02 = 'http://10.40.30.###/cgi-bin/cgi.pl';
			break;
		case 'wcPlasma03':
			wcPlasma03 = 'http://10.40.30.###/cgi-bin/cgi.pl';
			break;
		case 'wcPlasma04':
			wcPlasma04 = 'http://10.40.30.###/cgi-bin/cgi.pl';
			break;
		case 'wcPlasma05':
			wcPlasma05 = 'http://10.40.30.###/cgi-bin/cgi.pl';
			break;
		case 'wcPlasma06':
			wcPlasma06 = 'http://10.40.30.###/cgi-bin/cgi.pl';
			break;
	}
}
