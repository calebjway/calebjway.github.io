function Default(){
  var today = new Date();
  document.write(today.toDateString());
}
function timer(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("clockArea").innerHTML = "Current Time: "+
    h + ":" + m + ":" + s;
    var t = setTimeout(timer, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
