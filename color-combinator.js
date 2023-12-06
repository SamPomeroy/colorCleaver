/******************
 * YOUR CODE HERE *
 ******************/
// | inputs | output |
// | --- | --- |
// | red + blue | purple |
// | red + yellow | orange |
// | blue + yellow | green |
// | anything else | "error" |
function colorCombinator(color1, color2){
  if (color1 === "red" && color2 === "blue"){
    return "purple"
  } if (color1 === "blue" && color2 === "red"){
return "purple"
} if (color1 === "red" && color2 === "yellow"){
  return "orange"
} if (color1 === "yellow" && color2 === "red"){
  return "orange"
} if (color1 === "blue" && color2 === "yellow"){
  return "green"
} if (color1 === "yellow" && color2 === "blue"){
  return "green"
}else{
  return "error"
}
}


// Our setup code here. Don't touch!
if(typeof colorCombinator === 'undefined') {
  colorCombinator = undefined;
}

module.exports = colorCombinator;
