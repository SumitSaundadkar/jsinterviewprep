import "./styles.css";
// Question1: Palindrome Checker
// Write a function that takes a string as input and returns true if it is a palindrome (reads the same forwards and backwards), and false otherwise.

// const palindrom=(str)=>{
// let str1=str.split("").reverse(" ").join("");
// let str2=str1.split("").reverse(" ").join("");
//    let res=str1===str2?true:false;
//    return res
// }
// console.log(palindrom("racecar"));

// const palindrome=(str)=>{
// let revStr="";
// for(let i=str.length-1;i>=0;i--){
//   revStr+=str[i]
// }
// if(str===revStr){
//   return true
// }else{
//   return false
// }

// }
// console.log(palindrome("raceca"))

// Question: Sum of Two Numbers
// Write a function that takes an array of numbers and a target sum. The function should find and return the indices of two numbers in the array that add up to the target sum. If no such pair exists, return null

// const getSum = (arr, sum) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === sum) {
//         return [i, j];
//       }
//     }
//   }
//   return null
// };
// console.log(getSum([1, 2, 3, 4, 5], 5));

// Question: Fibonacci Series
// Write a function to generate the Fibonacci series up to a given number 'n'. The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones. 0,1,1,2,3,5,8,13

// const fibonacciNum=(n)=>{
//   let fibNum=[0,1];

// for(let i=2;i<=n;i++){
//   const fibSum=fibNum[i-1]+fibNum[i-2];
//    fibNum.push(fibSum)
// }
//  return fibNum
// }
// console.log(fibonacciNum(5))

// Question: Reverse a String
// Write a function that takes a string as input and returns a new string with the characters in reverse order.

// const revStr=(str)=>{
//   return str.split("").reverse("").join("")
// }
// console.log(revStr("sumit"))

// const revStr=(str)=>{
//  let finalStr="";
//  for(let i=str.length-1;i>=0;i--){
//    finalStr+=str[i]
//  }
//  return finalStr

// }
// console.log(revStr("sumit"))

// Question: Longest Word
// Write a function that takes a sentence as input and returns the longest word in the sentence.

// const longestWord = (word) => {
//   const strSplit = word.split(" ");
//   const len = strSplit.length;
//   let lword = "";

//   for (let i = 0; i < len; i++) {
//     if (strSplit[i].length > lword.length) {
//       lword = strSplit[i];
//     }
//   }
//   return lword;
// };

// console.log(longestWord("hey brother how are yourelf."));

