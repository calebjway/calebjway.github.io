function Default(){
  var today = new Date();
  document.write(today.toDateString());
}
function timer(){
    try{
      makeColor();
    }
    catch(err){

    }
    finally{
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById("clockArea").innerHTML = "Current Time: "+
      h + ":" + m + ":" + s;
      var t = setTimeout(timer, 200);
    }
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function Rave(){
  if(raveClicked == 0){
    raveClicked=1
  }
  else{
    document.getElementById("clockArea").style.backgroundColor="DarkGrey";
    raveClicked =0;
  }
}
function makeColor(){
  if(raveClicked==1){
    var frequency = .3;
    var i= counter;
    if(counter<=32 && invert==0){
      counter++;
    }
    else if(counter>32 || invert==1){
      invert=1;
      counter--;
      i=counter;
      if(counter==0)
      {
        invert=0;
      }
    }
    var test =0;
    colorVar.red   = Math.round(Math.sin(frequency*i + 0) * 127 + 128);
    colorVar.green = Math.round(Math.sin(frequency*i + 2) * 127 + 128);
    colorVar.blue  = Math.round(Math.sin(frequency*i + 4) * 127 + 128);
    document.getElementById("clockArea").style.backgroundColor=colorVar.toHexString();
  }
  //alert(colorVar.red);
}
