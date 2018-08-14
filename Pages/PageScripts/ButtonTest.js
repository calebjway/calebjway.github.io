let mathText ='';
let overText ='';
let sum=0;
let mean=0;
let high=0;
let low=99999999;
let overallLow=999999999;
let overallHigh=0;
let overallSum =0;
let overallMean=0;
let totalArr=[];

function getStats(arr){
  sum=0;
  mean=0;
  high=0;
  low=999999999;
  var cur =0;
  for(var x =0;x<arr.length;x++){
    cur =Number(arr[x]);
    totalArr.push(cur);
    sum+=cur;
    overallSum+=cur;
    if(cur > high)
    {
      high =cur;
    }
    if(cur > overallHigh)
    {
      overallHigh =cur;
    }
    if(cur < low){
      low =cur;
    }
    if(cur < overallLow){
      overallLow =cur;
    }
  }
  mean = sum/arr.length;
  overallMean = overallSum/totalArr.length;
}

function makeMessage(){
  mathText ="Sum: "+sum+"<br>Mean: "+mean+"<br>High: "+high+"<br>Low: "+low+"<br>";
  overText ="All Numbers: "+totalArr+"<br>Overall Sum: "+overallSum+"<br>Overall Mean: "+overallMean+"<br>Overall High: "+
  overallHigh+"<br>Overall Low: "+overallLow;
}

function mathStats(arr,hideBtn){
  document.getElementById(hideBtn).style.visibility="visible";
  document.getElementById("mathStatsDiv").style.visibility="visible";
  document.getElementById("overallStatsDiv").style.visibility="visible";
  getStats(arr);
  makeMessage();
  document.getElementById("mathStatsDiv").innerHTML=mathText;
  document.getElementById("overallStatsDiv").innerHTML=overText;
  document.getElementById("addButton").disabled=true;
}

function hideStats(){
  document.getElementById("hideBtn").style.visibility = "hidden";
  document.getElementById("mathStatsDiv").style.visibility="hidden";
  document.getElementById("mathStatsDiv").innerHTML="";
  document.getElementById("addButton").disabled=false;
  arrUser.length=0;
  arrCount=0;
}
