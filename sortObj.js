const myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
let program = myObj.filter(function(obj) {
    if (obj.occupation == "Programmer")
  console.log(obj);
});
function sortByAge(x,y){
    if (x.age < y.age)
    return -1;
  if (x.age > y.age)
    return 1;
  return 0;
}
console.log(myObj.sort(sortByAge));

