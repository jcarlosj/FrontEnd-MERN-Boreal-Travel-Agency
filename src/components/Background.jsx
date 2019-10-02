import React from 'react'
import "../public/styles/backgroundImageStyle.css"
import "../public/styles/gridStandard.css"
function Background() {
    return (
        <div className="background-header-img mainGrid">
            <img src={require("../public/imagenes/imagen-header-borrador.png")}  width="100%" alt="Boreal main photo"/> 
        </div>
    )
}

export default Background
