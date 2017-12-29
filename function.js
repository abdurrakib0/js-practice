// it's an anonymous function, so it dosen't has any function
// for calling the function you have to call the variable where you store the function
var big = function(a,b) {
  var result
  a > b ? result = ["big value a: ", a] : result = ["big value b: ", b] // ternary operator
  return result
}

console.log(big(5,6))
