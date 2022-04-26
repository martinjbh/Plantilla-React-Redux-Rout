import React from "react";
import './DarkLight.css';
import Sun from "../DarkLight/img/sun.png";
import moon from "../DarkLight/img/moon.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { agregarDark } from "../Actions/Actions";

const DarkLight = (props) => {
    const dispatch=useDispatch()
    const [clase, setClase] = useState("dark")
    const claseCambio = () => {
        if (clase == "dark") {
            document.body.classList.add("light-mode")
            return (
                setClase("light"),
                dispatch(agregarDark("blanco"))
            )
        }
        else {
            document.body.classList.remove("light-mode")
            setClase("dark")
            dispatch(agregarDark("negro"))
        }
    }
  
    return (
        <div className="t">
            <img src={Sun} className="t-icon " />
            <img src={moon} className="t-icon" />
            <button className={`grey-cirlce ${clase}`} onClick={claseCambio} ></button>
        </div>
    )
}
export default DarkLight;
