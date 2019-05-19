const per = (n)=>{
  var arr = n.toString().split('');
  var sum, ans = 0;
  while(arr.length > 1){
    sum = 1
    arr.forEach((num)=>{
      sum *= num;
    });
    arr = sum.toString().split('');
    ans++;
  }
  return ans;
}

//console.log(per(277777788888899)) > 11
