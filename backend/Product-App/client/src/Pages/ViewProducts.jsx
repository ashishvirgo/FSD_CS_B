import { useEffect, useState } from "react";

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  let count=0;
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3001/products"); 
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        setProducts(data); 
        console.log("Products fetched:", data);
      } catch (err) {
        console.error("Error:", err.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <table border="1" width="100%">
        <tr>
            <th>Sr. No.</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
        </tr>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{++count}</td>
            <td>{product.title}</td>
            <td>{product.price}&#8377;</td>
            <td>{product.quantity}</td>
            <td><button>Edit</button>
                <button>Delete</button></td>
            </tr>
        ))}
        
      </table>
    </div>
  );
};

export default ViewProducts;