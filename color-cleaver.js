const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!
let color1 = getInput(1)
let color2 = getInput(2)


// if (color1 === undefined && color2 === undefined){
//     console.log("please enter valid color")
// } else if (isValidSecondary(color1) === true && isValidSecondary(color2) === false){
//     console.log("please enter valid colors")
// } else if (isValidSecondary(color1) === true){
//     console.log("Your color is made of " + colorDeconstructor(color1) + ".")
// } else if (isValidPrimary(color1) === true 
// && isValidPrimary(color2) === true 
// && color1 !== color2
// && color2 !== color1){
//     console.log("The colors you entered make "+ colorCombinator(color1, color2) + "!")
// } else if (isValidPrimary(color1)=== false){
//     console.log("please enter valid color")
// } else if (isValidSecondary(color1) === false || isValidSecondary(color2) === false){
//     console.log("Please enter valid colors")
// }

//check if both are undefined and send message
if (color1 === undefined && color2 === undefined){
    console.log("submit valid color")
}
//if only one coloe, validate, then feed to color deconstructor, returning message with whats returned
if(color2 === undefined){
    if(isValidSecondary(color1)){
       let results = colorDeconstructor(color1)
       console.log(color1 + " deconstructs into " + results + ".")
    }else{
    console.log("Please submit a valid secondary color")
}
}
//if two colors, validate, make sure they arent the same, feed to color combinaor, returning message

else{ //if user inputs multiple values}
    if(isValidPrimary(color1) && isValidPrimary(color2)){
        if (color1 !== color2){
        let results = colorCombinator(color1, color2)
        console.log(color1 + " and " + color2 + " combined makes " + results)
        }else{
            console.log("Please enter two DIFFERENT primary colors")
        }
    }else{
        console.log("Please enter two valid primary colors")
    }
}