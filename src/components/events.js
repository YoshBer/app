import React,{useState} from "react"
import PropTypes from "prop-types"
import { Resistencia } from "../views/resistencia"
export const Event = (props) => {
    const [value, setValue] = useState("")
    const [value2, setValue2] = useState("")
    const handleChange = (event) => setValue(event.target.value);
    const handleChange2 = (event) => setValue2(event.target.value);
    const onKey = (event)=> {
        if(event.key === 'Enter'){
            props.onSubmit(value, value2);
        }
    };
    return (
    <>
        <div className="col-6"><p className="text-white">{props.txtValue1}</p><input className="form-control" type="float" onChange={handleChange} onKeyPress={onKey} value={value} placeholder="0"/></div>
        <div className="col-6"><p className="text-white">{props.txtValue2}</p><input className="form-control" type="float" onChange={handleChange2} onKeyPress={onKey} value={value2} placeholder="0"/></div>
    </>
    )
}
Resistencia.proptype={
    txtValue1: PropTypes.string,
    txtValue2: PropTypes.string,
    onSubmit: PropTypes.func
}