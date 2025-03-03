const express=require("express");
const fs=require("fs/promises");
const app=express();
const port=3005;
const products=[];
app.use(express.json())
app.get("/products",async(req,res)=>{
    const data=await fs.readFile("./product.json","utf-8")
 res.status(200).json({data:JSON.parse(data)});
})
app.get("/product/:id",async(req,res)=>{
    const pid=req.params.id;
    const prdata=await fs.readFile("./product.json","utf-8");
    const jsondata=JSON.parse(prdata);
    const index=jsondata.findIndex(ind=>ind.id==pid)
    if(index==-1){
        res.status(400).json({status: "fail",message: "product not found"});     
    }
    else{
        res.status(200).json({status: "success",message: "product found",data:jsondata[index]});   
    }
})
app.post("/createproduct",async(req,res)=>{
    const {title,price,quantity}=req.body;
    if(!title || !price || !quantity){
        res.status(400).json({status: "fail",message: "All fields required"}); 
    }
    else{
        const newId=Date.now();
        console.log("Id",newId);
        const newProduct={
            id: newId,
            title,price,quantity
        }
        products.push(newProduct);
        await fs.writeFile("./product.json",JSON.stringify(products))
        res.status(201).json({status: "success",message: "product created successfully",data: newProduct}); 
    }
})
app.patch("/editproduct/:id",(req,res)=>{
 const pid=req.params.id;
 const {price: newPrice,quantity: newQuantity}=req.body;
 if(!newPrice|| !newQuantity){
    res.status(400).json({status: "fail",message: "All fields required"});    
 } 
 else{
    const index=products.findIndex(ind=>ind.id==pid);
    if(index==-1){
        res.status(400).json({status: "fail",message: "product not found"});       
    }
    else{
        products[index].price=newPrice;
        products[index].quantity=newQuantity;
        res.status(200).json({status: "Success",message: "product updated successfully",data: products[index]}); 
    }
 }  
})
app.delete("/deleteproduct/:id",(req,res)=>{
    const pid=req.params.id;
    const index=products.findIndex(ind=>ind.id==pid);
    if(index==-1){
        res.status(400).json({status: "fail",message: "product not found"});  
    }
    else{
        const deldata=products.splice(index,1);
        res.status(200).json({status: "success",message: "product deleted successfully",data:deldata});  
    }
})

app.listen(port,(err)=>{
try{
    if(err) throw err;
    console.log(`server is running on port ${port}`)
}
catch(err){
    console.log("Server Error:".err.message)
}
})