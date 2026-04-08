let inputArray = [{name:"keyboard", price:499},{name:"morniter", price:8999},{name:"mouse", price:299}]

function prdArray(){
    for(i=0; i<inputArray.length; i++){
        obj = inputArray[i]
        for(j=i+1; j<inputArray.length; j++){
            tempObj = obj

            if(inputArray[i].price > inputArray[j].price){
                inputArray[i] = inputArray[j]
                inputArray[j] = tempObj
            }
        }
    }

    console.log(inputArray)
}

prdArray()