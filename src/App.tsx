import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Certificaciones from './pages/Certificaciones';
import Proyectos from './pages/Proyectos';
import TablaExperiencias from './pages/TablaExperiencias';
import Contacto from './pages/Contacto';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/certificaciones" element={<Certificaciones />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/proyectos/experiencias" element={<TablaExperiencias />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
