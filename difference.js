difference();
function difference(){
var readline=require('readline-sync');
var num=readline.question('enter the array length');
var arr=new Array();
var arrOne=new Array();
var arrTwo=new Array();
for(i=0;i<num;i++){
    arrOne[i]=readline.question('enter the '+i+' arrayOne element');
}
for(i=0;i<num;i++){
    arrTwo[i]=readline.question('enter the '+i+' arrayTwo element');
}
for(i=0;i<num;i++){
   if (arrOne[i]-arrTwo[i]>0){
       arr[i]=arrOne[i]-arrTwo[i];
   }
   else{
   arr[i]=arrTwo[i]-arrOne[i];
   }
}
console.log(arr);

} 
