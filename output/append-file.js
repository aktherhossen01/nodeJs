const fs = require("fs")
fs.writeFileSync("./output/app.log","application Started \n")
console.log("file create");

const logEntry1 =`${new Date().toISOString()} user logged in \n`
fs.appendFileSync("./output/app.log",logEntry1)
