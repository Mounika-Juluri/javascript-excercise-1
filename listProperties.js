function listProperties(obj) 
 {
    return Object.keys(obj);    
}
console.log(listProperties({propOne: "one", propTwo: "two", propThree: "three"}));
