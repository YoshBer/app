import React, { useState} from "react";
import {Event} from "../components/events"

export const Resistencia = props => {
    const [resistenciaVal, setResistenciaVal] = useState({result: ""});
    const [potenVal, setPotenVal] = useState({result: ""});
    const handleSubmit = (a,b) => {
        setResistenciaVal({result: `Resistencia: ${parseFloat(a/b).toFixed(4)}Ω`});
        setPotenVal({result: `Potencia: ${parseFloat(a*b).toFixed(4)}W`})
    }
    return (
        <>
           <div className="container py-4">
                <div className="card border-warning">
                    <div className="card-header text-center text-white py-5 border-warning bodySvg">
                        <h2>Resistencia - Potencia</h2>
                    </div>
                    <div className="card-body py-5 bodySvg">
                            <form className="row" onSubmit={(event)=>event.preventDefault()}>
                                <Event onSubmit={handleSubmit} txtValue1="Voltage" txtValue2="Intensidad"/>
                            </form>
                            <div className="mt-3">
                                <p className="text-light">{resistenciaVal.result}</p>
                                <p className="text-light">{potenVal.result}</p>
                            </div>
                    </div>
                </div>
           </div>
        </>
    )
}
