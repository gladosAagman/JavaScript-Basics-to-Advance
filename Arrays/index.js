let arr=[2,5,7,3,5]
console.log(arr)
console.log(arr.length)
console.log(arr.toString())

arr.pop([2])

arr.push("Aagman")

console.log(arr.toString())
console.log(arr.join(" and "))



let numbers = [1, 2, 3, 4, 5] 
numbers.splice(1, 2)    
numbers.splice(1, 3)  
numbers.splice(1, 3, 222, 333) 
(4) [1, 222, 333, 5]