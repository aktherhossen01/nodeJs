const fs = require("fs")

fs.writeFileSync("./output/temp.txt","this is a temp file")
console.log("temp is a created");

if(fs.existsSync("./output/temp.txt")){
    console.log('file exits!!!');

    fs.unlinkSync("./output/temp.txt");
    console.log('file deleted');
    
    
}
