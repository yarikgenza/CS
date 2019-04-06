/*

Write a method to replace all spaces in string with '%20'

fn (string)

Example: 

Input: "Mr John Smith      "

Output: "Mr%20John%20Smith"

*/

const URLify = str => str.split(" ").join("%20");

console.log(URLify("Mr John Smith      "));
