//  Filter Odd Numbers
//    Create an array of 10 numbers. Write a program to filter out only the odd numbers and print them.

const array = [10, 20, 30, 40, 50, 60, 70, 80,1,3];

// let oddNumbers = array.filter((num) => num % 2 !== 0);
// console.log(oddNumbers)

let oddNumbers= array.filter((el)=>{
    if (el% 2==1){
        return el
    }
})
console.log(oddNumbers)
