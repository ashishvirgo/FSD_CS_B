const http=require("http");
const port=3005;
const server=http.createServer((req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.statusCode=200;
    const users=[{
        "id": 1,
        "name": "Ashish Bajpai",
        "email": "ab@gmail.com"
    },{
        "id": 2,
        "name": "Amit Singh",
        "email": "as@gmail.com"
    }]
      const url=req.url;
      if(url=="/users" && req.method=="GET"){
        res.write(JSON.stringify(users));
      }
      if(url=="/users" && req.method=="POST"){
        const {id,name,email}=JSON.parse(req.body);
        console.log(req.body);
        const jsondata={id,name,email};
        console.log(jsondata);
        users.push(jsondata);
        res.write(jsondata);
      }
      res.end();
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