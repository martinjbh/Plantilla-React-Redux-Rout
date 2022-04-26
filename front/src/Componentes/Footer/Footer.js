import React from "react";
import './Footer.css'
import { useState } from "react";


const Footer = () => {

    return (
        <div className="footer">
            {/* <ul className="list">
                <a className="list-email const-list" href="mailto:barreiromartinj@gmail.com"></a>
                <a className="list-guithub const-list" href="https://github.com/martinjbh?tab=repositories"></a>
                <a className="list-linkedin const-list" href="https://www.linkedin.com/in/mart%C3%ADn-barreiro-130025224/"></a>
            </ul> */}
            <div className="formu">
                <form >
                    <input className="footer-input" type="text" placeholder="    name" name="user_name"></input>
                    <input className="footer-input" type="text" placeholder="    subjet" name="user-subjet"></input>
                    <input className="footer-input" type="email" placeholder="    email" name="user-email"></input>
                    <textarea className="footer-textarea" rows="7" type="text" placeholder="mensaage" name="message"></textarea>
                    <button className="footer-button" type="submit" >Enviar</button>
                </form>
            </div>
            {false && (
                <div className="popUp animate__animated animate__bounce ">
                    <button className="popUp-button " >
                    </button>
                    Su mensaje ha sido enviado correctamente
                </div>
            )}
        </div>
    )
}
export default Footer;