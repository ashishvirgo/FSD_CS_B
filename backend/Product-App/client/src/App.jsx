import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import AddProduct from './Pages/AddProduct';
import ViewProducts from './Pages/ViewProducts';
const Home = () => <h2>Home Page</h2>;
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/addproduct">Add Product</Link> | <Link to="/viewproduct">View Products</Link>
        | <Link to="/viewproduct">Search Product</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/viewproduct" element={<ViewProducts/>}/>
        <Route path="*" element={<h1>Error Page</h1>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
