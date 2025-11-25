const fs = require("fs")

const content1 = " This is a content \n node js is awesome!!";

try{
    fs.writeFileSync("./output/test-sync.txt", content1);
    console.log("file written sync");
    
}catch(err){
    console.error(err.message);
    
}