import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import DetalleProducto from "./pages/DetalleProducto";
import ItemCount from './components/ItemCount'
import "./App.css";

function App() {
  return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="productos" element={<Productos/>} />
            <Route path="productos/:productoId" element={<DetalleProducto/>}/>
          </Route>
          <Route path="*" element={<Error/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;