const { myReadFile } = require('./fsAsyncDemo1.js')

require('./fsAsyncDemo1.js')
// myReadFile().then((data)=>{
//     console.log(data)

// })
// .catch((err)=>{
//     console.log("Error",err);
// })

async function display(){
    try{
        const data=await myReadFile();
        console.log(data);
    }
    catch(err){
        console.log("Error ",err);
    }
   
}
display();