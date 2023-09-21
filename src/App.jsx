import './App.css'
import Campañas from './Components/Campañas/Campañas'
import Carrusel from './Components/Carrusel/Carrusel'
import Estamos from './Components/Estamos/Estamos'
import Footer2 from './Components/Footer2/Footer2'
import Navbar2 from './Components/Navbar2/Navbar2'
import Portada from './Components/Portada/Portada'
import Servicios from './Components/Servicios/Servicios'
import Somos from './Components/Somos/Somos'

function App() {

  return (
    <div>
      <Navbar2/>
      <Portada/>
      <Somos/>
      <Carrusel/>
      <Campañas/>
      <Estamos/>
      <Servicios/>
      <Footer2/>
    </div>
  )
}

export default App
