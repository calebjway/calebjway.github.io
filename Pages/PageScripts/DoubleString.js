function doubleChar(str) {
	var spl = str.split("");
	var dblstr ="";
	var x =0;
	while(x<spl.length){
		dblstr += (spl[x] +""+spl[x]);
		x++;
	}
	return dblstr;
}
