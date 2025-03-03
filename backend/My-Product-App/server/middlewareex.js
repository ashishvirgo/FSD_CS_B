const express=require("express");
const cors=require("cors")
const app=express();
const port=3001;
app.use(cors({
    origin: "http://localhost:5173"
}))
const users=[{
  id: 101,
  name: "Ashish Bajpai",
  email: "ab@gmail.com"
},
{
    id: 102,
    name: "Aatif Jamshed",
    email: "aj@gmail.com"
  }]
const m1=(req,res,next)=>{
    const age=req.query.age;
    if(!age){
        return res.status(400).send("send age in query string") 
    }
    else{
    if(age<18)
        return res.status(403).send("user not authorized")
     next();
}
}
const m2=(req,res,next)=>{
    console.log(`request recived from ${req.ip} on ${new Date()}`);
     next();
}
// app.use(m1);
app.use(m2);
app.use(express.json())
app.get("/users",(req,res)=>{
    res.status(200).json(users);
})
app.get("/user/:id",m1,(req,res)=>{
    const uid=req.params.id;
    const index=users.findIndex(ind=>ind.id==uid);
    if(index==-1){
        res.status(400).json({status: "fail",message: "user not found"});   
    }
    else{
        res.status(200).json({status: "success",message: "user found",data: users[index]});
    }
})
app.post("/createuser",m2,(req,res)=>{
    const {name,email}=req.body;
    if(!name || !email){
        res.status(400).json({status: "fail",message: " All fields required except id"})
    }
    else{
        const newid=Date.now();
        const newUser={
            id: newid,name,email
        }
        users.push(newUser);
        res.status(201).json({status: "success",message: " user created successfully",data: newUser})  
    }
})
app.use((err,req,res,next)=>{
    res.status(500).json({message: "server error"})
})
app.listen(port,(err)=>{
  try{
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
  }
  catch(err){
    console.log("Server Error: ",err.message)
  }
})