var names = ["rakib", "sakib", "rahim",  "kabir"]

console.log(names)
console.log(names.length)
console.log(names.reverse()) //reversse the array
console.log(names.shift()) //remove the first element
console.log(names)
console.log(names.unshift("rahim2")) // add any new element at first position
console.log(names)
console.log(names.pop()) // remove last element from array
console.log(names)
console.log(names.push("salam")) // add new element at the end of the list
console.log(names)

var names2 = names.slice() // copy the whole array and store it in a new array
console.log(names2)

var index = names.indexOf("sakib") // find any element's index
console.log(index)

console.log(names.join(" | ")) // join all the elements of an array
