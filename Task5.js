
let inputStr = "This is input steing1! with special $char %"
let specialChar = "!@#$%^&*()_"
function toURL(){

    let StrArray = inputStr.split(" ")

    for(let i=0; i<StrArray.length; i++){
        let wordd = StrArray[i];
        for(let j=0; j<wordd.length; j++){
            // console.log(wordd.charAt(j))
            if(specialChar.includes(wordd.charAt(j))){
                wordd.charAt(j).replace('')
            }
        }
    }

    console.log(StrArray)
    
}

toURL()