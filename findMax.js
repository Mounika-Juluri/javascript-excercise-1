
  var arr=new Array();
  var readline=require('readline-sync');
  for(i=0;i<5;i++){
    arr[i]=readline.question('enter '+i+'th number');
  }

  console.log(Math.max(...arr));