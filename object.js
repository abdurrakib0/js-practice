// object model, that's an power of a OOP language
function Details(name, institution, roll, home, semester) { // in the bracket put all the argument you need in a object model
  this.name = name
  this.institution = institution
  this.roll = roll
  this.home = home
  this.semester = semester
  this.UpdateSemester = function(){ // this anonymousfuunction will update semester time to time
    return ++this.semester
  }
}

var student1 = new Details("rakib", "NSU", 1721330, "jessore", "1st")

console.log(student1) // full details
console.log("Name:",student1.name) //read single property
console.log("Home:",student1.home) //read single property
console.log("Institution:",student1.institution) //read single property
console.log("Roll:",student1.roll) //read single property
console.log("semester:", student1.semester) //read single property
