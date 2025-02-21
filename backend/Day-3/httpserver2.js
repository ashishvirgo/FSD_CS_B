const http=require("http");
const port=3002;
const server=http.createServer(async(req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.statusCode=200;
   const data=await fetch("http://dummyjson.com/recipes");
   const jsondata=await data.json();
   console.log(jsondata);
   const newjsondata=jsondata.recipes;
   console.log(newjsondata);
   const names= newjsondata.map((re)=>{
            return re.name;
   });
   res.end(JSON.stringify(names));
         
})

server.listen(port,(err)=>{
     try{
        if(err) throw err;
         console.log(`Server is running on port ${port}`);
     }
     catch(err){
        console.log("Server Error:",err.message);
     }
})