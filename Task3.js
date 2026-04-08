let inputArray = [{name:"oggy" , age:22 },{name:"bob" , age:17 },{name:"jack" , age:19 }]

function arrayObj(){
    newArray = inputArray.filter((obj) => obj.age >= 18)
    console.log(newArray)
}
arrayObj()