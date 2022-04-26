import './Carrusel.scss'
import ProyectoCard from '../ProyectoCard/ProyectoCard'
import view1 from './Component1.svg'
import view2 from './Component2.svg'
import view3 from './Component3.svg'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react'
const Carrusel = () => {
    const v1 = {
        "view": view1,
        "preview": "https://eight-discussion.surge.sh/",
        "git": "https://github.com/martinjbh/Movies-Proyect",
        "info": "App manteniendo el estado de redux, Tecnologias utilizadas: Redux, React.js, Axios, Express, React Roter ",
        "tipo":"Website"
    }
    const v2 = {
        "view": view2,
        "preview": "https://www.figma.com/proto/wrR8bVt1yc5TnEPYEaXb3I/Dividendo--Martin?node-id=4%3A3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=4%3A3&show-proto-sidebar=1",
        "git": "https://github.com/martinjbh/React-Native-Clean",
        "info": "App React Native, se utiliza para realizar divisiones a largo y corto plazo diseñado por Barreiro Martin y Barreiro Federico, Tecnologias utilizadas : Redux, React Native, Axios, Express, MongoDb, Mongoose.",
        "tipo":"App mobile"

    }
    const v3 = {
        "view": view3,
        "preview": "https://eight-discussion.surge.sh/",
        "git": "https://github.com/martinjbh/React-Native-Clean",
        "info": "Bot realizado con bootstrap, Front end de bot para exchange en funcionamiento realizado con biblioteca Bootstrap, Javascript, Axios. ",
        "tipo":"App web"
    }


    return (
        <div className='Carrusel'>
            <div className='Carrusel-contenedor-div-contenedor'>
                <h2>Mis Proyectos</h2>
            </div >
            <Carousel className='Carrusel-contenedor-principal'>
                <ProyectoCard obj={v1} />
                <ProyectoCard obj={v2} />
                <ProyectoCard obj={v3} />
            </Carousel>
        </div>



    )
}
export default Carrusel




 // <div className='Carrusel-container-principal'>
        //     <ProyectoCard url={view1} />
        //     <ProyectoCard  url={view2}/>
        // </div>