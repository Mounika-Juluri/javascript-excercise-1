var readline=require('readline-sync');
var num=readline.question('enter the number of array elements');
var arr=new Array();
for(i=0;i<num;i++){
    arr[i]=readline.question('enter the '+i+' array element');
}
console.log('ascending'+arr.sort());
console.log('descending'+arr.reverse());
