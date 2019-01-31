var x=[1, [2], [3, [[4]]],[5,6]];


 function flatten(arr){
    var flatarr=[];
    arr.forEach(element =>function(value)
    {
        if(Array.isArray(value)){
            flatarr=flatarr.concat(flatten(value));
        }
        else{
            flatarr.push(value);
        }
    }
    );
    return flatarr;
}
//console.log(flatarr);

 //var result=flatten(x)
console.log(flatten(x));
