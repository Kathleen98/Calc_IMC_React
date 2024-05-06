import {useState} from "react";

import "./ImcCalc.css";
import Button from "./Button/Button";

const ImcCalc = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const clearForm = (e) =>{
        e.preventDefault();
        setHeight("");
        setWeight("");
    }

    const validDigits = text =>{
        return text.replace(/[^0-9,]/g, "")
    }

    const handleHeightChange = (e) =>{
        const updatedValue = validDigits(e.target.value);
        setHeight(updatedValue)
    }

    const handleWeightChange = (e) =>{
        const updatedValue = validDigits(e.target.value);
        setWeight(updatedValue)
    }

  return (<div className="calc_container">
    <h2>Calculadora IMC</h2>
    <form id="imc_form">
        <div className="form_inputs">
            <div className="form_control">
                <label htmlFor="height">Altura</label>
                <input type="text" name="height" id="height" placeholder="1.75" 
                onChange= {(e) => handleHeightChange(e)} 
                value={height}
                />
            </div>
            <div className="form_control">
                <label htmlFor="weight">Altura</label>
                <input type="text" name="weight" id="weight" placeholder="1.75" 
                onChange={(e) => handleWeightChange(e)} 
                value={weight}
                />
            </div>
        </div>
        <div className="action_control">
            <Button id="calc-btn" text="Calcular"/>
            <Button id="clear-btn" text="Limpar" action={clearForm}/>
        </div>
    </form>
  </div>
  )
}

export default ImcCalc