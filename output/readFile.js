// const fs = require("fs")
// console.log("Start Reading ...");
// const data = fs.readFileSync("../data/entries/diary.txt","utf-8")
// console.log(data);



const fs = require("fs");
const path = require("path");

console.log("Start Reading ...");

const filePath = path.join(__dirname, "../data/entries/diary.txt");

const data = fs.readFileSync(filePath, "utf-8");

console.log(data);
