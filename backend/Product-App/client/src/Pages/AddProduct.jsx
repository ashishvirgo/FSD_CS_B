const AddProduct = () => {
    const handleSubmit=async(e)=>{
       e.preventDefault();
       const title=e.target.title.value;
       const price=e.target.price.value;
       const quantity=e.target.quantity.value;
       const product={title,price,quantity};
       try{
       const res=await fetch("http://localhost:3001/product",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
       })
       if(!res.ok){
        throw new Error("Failed to add product");
       }
       const data = await res.json();
       alert("Product Added",data)
       console.log("Product added:", data);
    }
    catch(err){
        console.log("Error",err.message)
    }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
  <label >Title:</label>
  <input type="text" id="title" name="title" required />

  <label >Price:</label>
  <input type="number" id="price" name="price" required />

  <label >Quantity:</label>
  <input type="number" id="quantity" name="quantity" required />
  

  <button>Submit</button>
</form>
    </div>
  )
}

export default AddProduct
