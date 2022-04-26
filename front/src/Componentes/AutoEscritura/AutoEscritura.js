import './AutoEscritura.css'
import { useSelector } from 'react-redux'
const AutoEscritura = () => {
    const state = useSelector(state => state.data)
    return (
        <div className='AutoEscritura-contenedor-principal'>
            {/* <div >
                {console.log(state[0])}
                <h1 className='contenedor'>
                    <div className='viole1'>De</div>
                    <div className='color1'>sa</div>
                    <div className='comunes1'>rr</div>
                    <div className='viole1'>oll</div>
                    <div className='turq1'>ador f</div>
                    <div className='comunes1'>ull S</div>
                    <div className='color1'>tack.</div>
                    <span className={state[0]}>&#160;</span></h1>
            </div> */}
            <div >
                <h1 className='contenedor2'>
                    <div className=''>Fu</div>
                    <div className='color1'>ll R</div>
                    <div className='comunes1'>e</div>
                    <div className='viole1'>a</div>
                    <div className='turq1'>c</div>
                    <div className='comunes1'>t</div>
                    <div className='viole1'>. #</div>
                    
                    <span className={state[0]}>&#160;</span></h1>
            </div>
        </div>

    )
}
export default AutoEscritura


