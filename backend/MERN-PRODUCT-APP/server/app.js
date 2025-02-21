const express=require("express");
const app=express();
const port=3004;
const users=[{
    id: 1001,
    name: "Ashish Bajpai",
    email: "ab@gmail.com"
}];
app.use(express.json())
app.get("/users",(req,res)=>{
    res.json(users);
})
app.get("/user/:id",(req,res)=>{
    const uid=req.params.id;
    const index=users.findIndex(ind=>ind.id==uid)
    if(index==-1){
        res.status(400);
        res.json({message: "user not found"});
    }
    else{
        res.status(200);
        res.json({message: "data found",data:users[index]});
    }
    
})
app.post("/user",(req,res)=>{
    const {name,email}=req.body;
    const newId=users.length>0 ? (users[users.length-1].id+1):1001;
    const newUser={
        id: newId,name,email
    }
    users.push(newUser);
    res.json({message: "user created Successfully",newUser })
})
app.patch("/user/:id",(req,res)=>{
    const uid=req.params.id
    res.send(`user id ${uid} data edited successfully`)
    
})
app.delete("/user/:id",(req,res)=>{
    const uid=req.params.id
    const index=users.findIndex(ind=>ind.id==uid);
    if(index!=-1){
        users.splice(index,1);
        res.status(200).json({message:"user deleted successfully"})
    }
    else{
        res.status(400).json({message:"user not found"})  
    }
})
app.listen(port,(err)=>{
  try{
    if(err) throw err;
    console.log(`Server is Running on Port ${port}`)

  }
  catch(err){
    console.log("Server Error:",err.message);
  }
})