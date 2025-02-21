const fs=require("node:fs");
function myReadFile(){
const res=fs.readFileSync('dummy.txt','utf-8');
console.log(res);
}
function myWriteFile(data){
    // const data="Hello how are you?"
    fs.writeFileSync("dummy.txt",data);

}
function myAppendFile(data){
fs.appendFileSync('dummy.txt',data);
}
function myDeleteFile(){
    fs.unlinkSync('dummy.txt')
}
module.exports={
    myReadFile,
    myWriteFile,
    myAppendFile,
    myDeleteFile,
}