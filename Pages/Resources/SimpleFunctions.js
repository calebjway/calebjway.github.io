function clearElement(clearName){
	document.getElementById(clearName).innerHTML ='';
}

function find_index(lst, str) {
	return lst.indexOf(str);
}

function countVowels(str) {
  var x = str.length;
  var vowelCount = 0;
  var curChar ='';
  while(x>0)
  {
    curChar = str.charAt(x);
    curChar.toLowerCase();
    if(curChar =='a' || curChar=='e' ||
        curChar=='i' || curChar=='o' || curChar=='u')
      {
        vowelCount++;
      }
    x--;
  }
  return vowelCount;
}

function removeVowels(str){
  var noVowel = str.replace('a','');
  noVowel = noVowel.replace('e','');
  noVowel = noVowel.replace('i','');
  noVowel = noVowel.replace('o','');
  noVowel = noVowel.replace('u','');
  noVowel = noVowel.replace('A','');
  noVowel = noVowel.replace('E','');
  noVowel = noVowel.replace('I','');
  noVowel = noVowel.replace('O','');
  noVowel = noVowel.replace('U','');
  return noVowel;
}

function addUp(num) {
	var x=0;
	var sum=0;
	while(x<=num){
		sum+=x;
		x++;
	}
	return sum;
}

function factorial(int) {
	var total = 1;
	for(var x= 1; x<=int;x++){
		total = total *x;
	}
	return total;
}

function repeat(item, times) {
	var arr = new Array();
	for(var x=0; x<times;x++){
		arr[x]=item;
	}
	return arr;
}
