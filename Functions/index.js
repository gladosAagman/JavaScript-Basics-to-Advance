function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is good too!")
}

function sum(a, b, c = 3) {
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c
}




result1 = sum(3, 2)
result2 = sum(7, 5)
result3 = sum(3, 13, 1)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)


const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(34);
func1(66);
func1(84);

let funct2 = (g)=>{
    console.log("This is the second function", g)
}
funct2(2)
funct2("Aagman")

function multiply(x,y,z){
    console.log(x*y*z)
    return  x * y * z;
}
result = multiply(3,8,1)


// It defines a function nice that takes a parameter name and logs a series of messages to the console, each containing the name and a different compliment.
// It defines a function sum that takes three parameters a, b, and c (with c having a default value of 3). It logs the values of a, b, and c to the console, and then returns the sum of a, b, and c.
// It calls the sum function three times with different arguments and assigns the results to variables result1, result2, and result3. It then logs the values of these variables to the console.
// It defines an arrow function func1 that takes a parameter x and logs a message to the console. It then calls func1 three times with different arguments.
// It defines another function funct2 that takes a parameter g and logs a message to the console. It then calls funct2 twice with different arguments.
// It defines a function multiply that takes three parameters x, y, and z and logs their product to the console. It then calls multiply with arguments 3, 8, and 1 and assigns the result to a variable result.