import './Home.scss'
import Footer from '../Footer/Footer'
import DivMovement from '../DivMovement/DivMovement'
import DarkLight from '../DarkLight/DarkLight'
import FrontMid from '../FrontMid/FrontMid'
import Carrusel from '../Carrusel/Carrusel'
import AutoEscritura from '../AutoEscritura/AutoEscritura'
const Home = () => {
    return (
        <div className='home-container-principal' >
            <DarkLight/>
         <AutoEscritura/>
        <div className="color-back2"></div>
        <div className="color-back"></div>
        <div className="color-back3"></div>
        <div className="color-back4"></div>
        <div className='home-container-titulo-nombre'>
            <div className='container-minombre-colores'>
            <p className='verde'>Hol</p>
            <p className='comunes'>a, .</p>
            <p className='turq'>m</p>
            <p className='verde'>i n</p>
            <p className='comunes'>o</p>
            <p className='turq'>mb</p>
            <p className='verde'>re e</p>
            <p className='comunes'>s..</p>
            </div>
            <div className='container-letrasColores'>
            <p className='comunes'>M</p>
            <p className='verde'>ar</p>
            <p className='comunes'>ti</p>
            <p className='verde'>n B</p>
            <p className='turq'>a</p>
            <p className='verde'>r</p>
            <p className='comunes'>re</p>
            <p className='verde'>i</p>
            <p className='turq'>ro</p>
            </div>
        </div> 
            <DivMovement />
            <FrontMid/>
            <Carrusel/>
        </div>

    )
}
export default Home



