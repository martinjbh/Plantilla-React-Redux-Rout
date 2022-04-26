import './FrontMid.css'
import React from 'react'
import { useState } from "react";
const FrontMid = (props) => {
    return (
        <div className="FrontMid-container-Principal">

            <div className='container-imagenes'>
                <div className="back-img"></div>
                <div className="in-img"></div>
            </div>

            <div>
                {true && <div className="about-me">
                    <h2>Sobre mi</h2>
                    <p>Programador full stack estudiante de tiempo completo, estoy en la busqueda de nuevos conocimientos y siempre
                        motivado! .
                        Poseo grandes habilidades en tanto en grupo como de forma individual, tengo gran autosuficiencia cumpliendo
                        objetivos, tengo conocimientos en tecnologias como:<br></br>
                        Html || Css || Sass || Bootstrap || JavaScript || React Router || React Native || React.js || Express.js || Node.js ||
                        Mongodb || Mongoose || Git || Redux.
                    </p>
                </div>}
                {props.ingles && <div className="about-me">
                    <h2>About me</h2>
                    <p>
                        Full-stack programmer, full-time student, I am in search of new knowledge and always
                        motivated! .
                        I have great skills both in a group and individually, I have great self-sufficiency fulfilling
                        objectives, I have knowledge in technologies such as:<br></br>
                        Html || Css || Sass || Bootstrap || JavaScript || React Router || React Native || React.js || Express.js || Node.js ||
                        Mongodb || Mongoose || Git || Redux.
                    </p>
                </div>}
            </div>

            <div className='container-imagenes'>
                <div className="back-img2"></div>
                <div className="in-img2"></div>
            </div>
<div>
</div>
            <div>
                {props.ingles && <div className="about-me2">
                    <h2>My Objectives</h2>
                    <p>
                        My goals are to develop myself as a programmer.
                    </p>
                </div>}
                {true && <div className="about-me2">
                    <h2>Mis Objetivos</h2>
                    <p>
                        Mi objetivo es adquirir nuevos conocimientos y compartirlos.
                    </p>
                </div>}
            </div>
            
        </div>
    )
}
export default FrontMid;