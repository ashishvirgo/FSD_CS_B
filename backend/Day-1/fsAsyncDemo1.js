const fspromises=require("fs/promises");
// const cb=(err,data)=>{
// if(err)
//     throw err;
// else
// console.log(data);
// }
const myReadFile=()=>{
     return fspromises.readFile('dummy.txt','utf-8');
}
module.exports={myReadFile};