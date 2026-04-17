import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Home from './pages/home/Home.jsx';
import SobreMi from './pages/sobre-mi/Sobremi.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* El Layout envuelve a las demás rutas */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* "index" es la ruta por defecto (/) */}
          <Route path="sobre-mi" element={<SobreMi />} />
          <Route path="servicios" element={<div>Página de Servicios</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;