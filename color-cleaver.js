const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!
let color1 = getInput(1)
let color2 = getInput(2)


if (color1 === undefined && color2 === undefined){
    console.log("please enter valid color")
} else if (isValidSecondary(color1) === true && isValidSecondary(color2) === false){
    console.log("please enter valid colors")
} else if (isValidSecondary(color1) === true){
    console.log("Your color is made of " + colorDeconstructor(color1) + ".")
} else if (isValidPrimary(color1) === true 
&& isValidPrimary(color2) === true 
&& color1 !== color2
&& color2 !== color1){
    console.log("The colors you entered make "+ colorCombinator(color1, color2) + "!")
} else if (isValidPrimary(color1)=== false){
    console.log("please enter valid color")
} else if (isValidSecondary(color1) === false || isValidSecondary(color2) === false){
    console.log("Please enter valid colors")
}


