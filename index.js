// const score = true
// const attendance = false
// console.log(result);
// if (!!score && !attendance){
//     console.log("lulus");
// }else if( !!score || !!attendance) {
//     console.log("lulus bersyarat");
// } else () {
//     console.log("tidak lulus");
// }


// const number = 11
// if(number % 3 == 0 && number % 5){
//     console.log("fizz buzz");
// } else if (number % 3 == 0){
//     console.log("fizz");
// } else if (number % 5 == 0){
//     console.log("buzz");
// } else {
//     console.log(number);
// }


// const job = "prog"
// const age = 21
// switch (job){
//     case "tc":
//         console.log("teach");
//         break;
//     case "dr":
//         console.log("cure");
//         break;
//     case "prog":
//         console.log("code");
//         break;
//     default:
//         console.log("jobless");
// }



// const score = 80
// const result = score >= 80 ? "lulus" : "tidak lulus"
// // ? fungsi tarnary operator
// // console.log(result);
// let hasil = ""
// if (score >= 80){
//     hasil = "lulus"
// } else {
//     hasil = "tidak lulus"
// }
// console.log(hasil);


// function logger(name, age){
//     console.log(name, age);
// }
// logger("dimas", 31);
// logger("nana", 21)
// logger("dani", 32)
// function logger(name, age){
//     const result = `namanya adalah ${name} usianya ${age}`;
//     return result;
// }
// const dimas = logger("dimas", 21)
// const dani = logger("dani", 31)
// console.log(dimas);


// function fizzbuzz(number){
//     let result
//     if(number % 3 == 0 && number % 5){
//         result = "fizz buzz"
//     } else if (number % 3 == 0){
//         result = "fizz"
//     } else if (number % 5 == 0){
//         result = "buzz"
//     } else {
//         result = number
//     }
//     return result
// }
// console.log(fizzbuzz(15));
// console.log(fizzbuzz(3));
// console.log(fizzbuzz(5));
// console.log(fizzbuzz(2));

// const dimas = logger("dimas", 21)
// console.log(dimas);

// function logger(name, age){
//     const result = `namanya adalah ${name} usianya ${age}`;
//     return result;
// }

// const logger = function (name, age){
//     const result = `namanya adalah ${name} usianya ${age}`;
//     return result;
// }

const checkAge = function (born){
    const time = new Date()
    const year = time.getFullYear()
    const age = year - born
    const result = `lahir ${born} umurnya ${age}`;
    return result
}
const dimas = checkAge(1995)
console.log(dimas);