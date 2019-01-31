var readline=require('readline-sync');
var str=''+(readline.question('enter the number'));
var finalstr;
for(i=0;i<str.length;i++){
    if(parseInt(str[i])%2==0 && parseInt(str[i+1])%2==0){
        finalstr=finalstr+str[i]+'-';
    }else{
        finalstr=finalstr+str[i];
    }
    
}
console.log(finalstr);
  