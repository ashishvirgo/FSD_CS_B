const mypromise=new Promise(
    (resolve,reject)=>{
        console.log("executed promise");
        reject("Network error");
    }
);

mypromise.then((msg)=>console.log(msg))
        .catch((err)=>console.log("Error: ",err));