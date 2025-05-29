import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const usuario = "Damian Matanowski";
  const tipo = "Admin";
  const navItems = ["Inicio", "Galería", "Contacto"];
  const imagenes = [
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3",
  ];
  // traigo la data de la API


    const[productos,setProductos]=useState([]);
    const[loading,setLoading]=useState(true);

    useEffect(()=>
    {
      // hacer el pedido de la api
      fetch('https://fakestoreapi.com/products/')
      .then(res=>res.json())
      .then(data=>{
          setProductos(data);
          setLoading(false);
          console.log("Productos cargados:",data);
      })
      .catch(err=>{
        console.error("Error de carga de API",err);
        setLoading(false);
      });
    },[]);





  const [seccion, setSeccion] = useState("Inicio");

  const renderContenido = () => 
    {
    switch (seccion) {
      case "Inicio":
        return <Home />;
      case "Galería":
        return <Gallery productos={productos} />;
      case "Contacto":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header tipo={tipo} usuario={usuario} />
      <Nav items={navItems} onSeleccion={setSeccion} />
      <main className="flex-grow-1 p-3">
        {renderContenido()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;