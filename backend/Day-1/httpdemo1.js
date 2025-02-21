const http=require('http');
 const server=http.createServer((req,res)=>{
    const url=req.url;
    res.write("Url=",url);
 });
 server.listen(3000,()=>{
    console.log(`server is running on port 3000`);
 })
