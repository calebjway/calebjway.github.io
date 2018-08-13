let mathText ='';
let sum=0;
let mean=0;
let high=0;
let low=99999999;

function getStats(arr){
  var cur =0;
  for(var x =0;x<arr.length;x++){
    cur =Number(arr[x]);
    sum+=cur;
    if(cur > high)
    {
      high =cur;
    }
    if(cur < low){
      low =cur;
    }
  }
  mean = sum/arr.length;
}

function makeMessage(){
  mathText ="Numbers: "+arrUser+"<br>Sum: "+sum+"<br>Mean: "+mean+"<br>High: "+high+"<br>Low: "+low;
}

function mathStats(arr,hideBtn){
  document.getElementById(hideBtn).style.visibility="visible";
  document.getElementById("mathStatsDiv").style.visibility="visible";
  getStats(arr);
  makeMessage();
  document.getElementById("mathStatsDiv").innerHTML=mathText;
}

function hideStats(){
  document.getElementById("hideBtn").style.visibility = "hidden";
  document.getElementById("mathStatsDiv").style.visibility="hidden";
  document.getElementById("mathStatsDiv").innerHTML="";
  arrUser.length=0;
  arrCount=0;
}
