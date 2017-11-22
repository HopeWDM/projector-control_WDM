function projectorsON () {
	pitronBox(wcMainHL, panasonicPJLink, power_on);
	pitronBox(wcMainHR, panasonicPJLink, power_on);
	pitronBox(wcFoldbackHL, sanyoPLC, power_on);
	pitronBox(wcFoldbackHR, sanyoPLC, power_on);
	pitronBox(wcCatwalk02, sanyoPLC, power_on);
}
function projectorsOFF () {
	pitronBox(wcMainHL, panasonicPJLink, power_off);
	pitronBox(wcMainHR, panasonicPJLink, power_off);
	pitronBox(wcFoldbackHL, sanyoPLC, power_off);
	pitronBox(wcFoldbackHR, sanyoPLC, power_off);
	pitronBox(wcCatwalk02, sanyoPLC, power_off);
}
