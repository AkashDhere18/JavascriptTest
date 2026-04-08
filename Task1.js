const inputstr = "This is a input string"

function reverse(){
    let strArray = inputstr.split(" ")
    // console.log(strArray)
    let newArr =[]
    for(i=0; i<strArray.length; i++){
        let word = strArray[i];
        let newWord =''
        // console.log(word)
        for(j=word.length-1; j>=0; j--){
            newWord += word.charAt(j);
        }
        newArr.push(newWord)
    }
    console.log("Original String :" , inputstr )
    console.log("New String :" , newArr.join(" ") )
    // return newArr.join(" ")
}
reverse()