import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Home from './pages/home/Home.jsx';
import SobreMi from './pages/sobre-mi/Sobremi.jsx';
import Servicios from './pages/servicios/Servicios.jsx';
import Titeres from './pages/titeres/titeres.jsx';
import Obras from './pages/obras/Obras.jsx';
import Seminarios from './pages/seminarios/Seminarios.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* El Layout envuelve a las demás rutas */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* "index" es la ruta por defecto (/) */}
          <Route path="sobre-mi" element={<SobreMi />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="titeres" element={<Titeres />} />
          <Route path="obras" element={<Obras />} />
          <Route path="seminarios" element={<Seminarios />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;