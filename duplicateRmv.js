var readline=require('readline-sync');
var num=readline.question('enter the number of array elements');
var arr=new Array();
for(i=0;i<num;i++){
    arr[i]=readline.question('enter the '+i+' array element');
}
for (i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            
            for(k=j;k<arr.length;k++){
                arr[k]=arr[k+1];
            }
        }
    }
}
num=arr.indexOf('undefined')
arr.splice( num-1,arr.length );
console.log(arr);