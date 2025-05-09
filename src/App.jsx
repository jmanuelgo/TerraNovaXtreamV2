import { BrowserRouter,Route,Routes } from 'react-router';
import Navbar from './componets/Navbar';
import Hoome from './pages/Hoome';
import Destinos from './pages/Destinos';
import RedesSociales from './pages/RedesSociales';
import Ubicacion from './pages/Ubicacion';
import Reserva from './pages/Reserva';

function App() {
  return (
    <div className='flex flex-col'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hoome />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/redes-sociales" element={<RedesSociales />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/reserva" element={<Reserva />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;