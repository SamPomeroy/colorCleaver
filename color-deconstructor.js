/******************
 * YOUR CODE HERE *
 ******************/
// | input | outputs |
// | --- | --- |
// | purple | red + blue |
// | orange | red + yellow |
// | green | blue + yellow |
// | anything else | error |
function colorDeconstructor(color){
  if (color === "purple"){
    return "red and blue"
  }if (color === "orange"){
    return "red and yellow"
  }if (color === "green"){
    return "blue and yellow"
  } else {
    return "error"
  }
}

// Our setup code here. Don't touch!
if(typeof colorDeconstructor === 'undefined') {
  colorDeconstructor = undefined;
}


module.exports = colorDeconstructor;
