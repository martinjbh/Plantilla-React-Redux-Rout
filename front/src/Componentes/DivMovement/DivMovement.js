import './DivMovement.css'
import React from 'react'

var qualities = ["Html", "Css", "JavaScript", "React Js", "Figma","React Native","Redux"]

const DivMovement = (props) => {
    return (
        <div className="movement">
            <div className="movement-container">
                {qualities.map((val,i) => {
                    return (
                        <div key={i}className="movement-html">{val}</div>)
                })}
            </div>
        </div>
    )
}
export default DivMovement;

