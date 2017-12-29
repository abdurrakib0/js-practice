var a = 5
var b = 6

// this is an invoke function, we can use it immediately in our script
// but you have to declear the argument of the function before calling the invoke function
var big = (function(a,b) {
  var result
  a > b ? result = ["bigger value a: ",a] : result = ["bigger value b: ",b]
  return result
}) (a, b)

console.log(big)
