import './ProyectoCard.scss'


const ProyectoCard = ({ obj }) => {
    return (
        <div className='ProyectoCard-contenedor-principar'>
          <p className='website'>{obj.tipo}</p>
            <div className='ProyectoCard-contenedor-img'>
                <img src={obj.view}></img>
            </div>

            <div className='contenedor-botones'>

                <div >
                    <a href={obj.preview}>
                        <button className='boton'>Preview</button>
                    </a>
                </div>
                <div>
                    <a href={obj.git}>
                        <button className='boton boton2'>Git Hub</button>
                    </a>
                </div>
                <div className='info'>
                    <h5 className='h4'>
                        Resumen:
                    </h5>
                    <p>
                        {obj.info}
                    </p>
                </div>

            </div>


        </div >
    )
}

export default ProyectoCard