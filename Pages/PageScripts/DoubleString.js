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

function doubleStrAdd(inputElement,textElement){
	var str = document.getElementById(inputElement).value;
	if(str==''){
		return;
	}
	var curString = document.getElementById(textElement).innerHTML;
	document.getElementById(textElement).innerHTML = doubleChar(str) +"</br>" +curString;
}
