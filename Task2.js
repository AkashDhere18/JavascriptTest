const inputStr = "This is input string with diffrent length of words";


function new1(){
    let strArray = inputStr.toLowerCase().split(" ");
    // console.log(strArray)
    let objWords = {}
    
    for(i=0; i<strArray.length; i++){
        let word = strArray[i]
        let wordLen = strArray[i].length
        objWords[word] = wordLen
    }
    console.log(objWords)
    
}

new1()
