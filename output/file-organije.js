const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "output", "messy-files");
const organizeDir = path.join(__dirname, "output", "organized");

const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg", ".webp"],
  videos: [".mp4", ".mkv", ".mov", ".wmv", ".flv", ".avi", ".webm", ".mpeg"],
  audio: [".mp3", ".wav", ".aac", ".ogg", ".flac", ".m4a", ".wma"],
  code: [
    ".js",
    ".ts",
    ".jsx",
    ".tsx",
    ".html",
    ".css",
    ".scss",
    ".json",
    ".md",
  ],
  archives: [".zip", ".rar", ".7z", ".tar", ".gz", ".bz2"],
  spreadsheets: [".xls", ".xlsx", ".csv", ".ods"],
  documents: [".pdf", ".doc", ".docx", ".txt", ".rtf", ".ppt", ".pptx"],
  others: [".exe", ".apk", ".bin", ".iso"],
};

const testFile =[
    "vacation.jpg",
    "report.pdf",
    "presentation.pptx",
    "music.mp3",
    "video.mp4",
    "script",
    "backup.tar.gz",
    "random.xyz",
];
function initializeDirectories(){
    if(!fs.existsSync(sourceDir)){
        fs.mkdirSync(sourceDir, {recursive : true});

        testFile.forEach((file)=>{
            fs.writeFileSync(path.join(sourceDir, file),`content of ${file}`)
        });
    }
    console.log("messy directories files are created!!");
    
}
initializeDirectories()
