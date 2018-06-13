function FindHighLow(arr){
  var minmaxArr =[];
  minmaxArr.push(Math.min(...arr));
  minmaxArr.push(Math.max(...arr));
  document.write(minmaxArr);
}
