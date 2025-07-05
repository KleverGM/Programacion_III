import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import FormularioBasico from './formulario/FormularioBasico';
import FormularioRHF from './formulario/FormularioRHF';
import FormularioZod from './formulario/FormularioZod';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/FormularioBasico" element={<FormularioBasico />} />
      <Route path="/FormularioRHF" element={<FormularioRHF />} />
      <Route path="/FormularioZod" element={<FormularioZod />} />
        {/* Puedes agregar más rutas aquí */}
    </Routes>
  );
}