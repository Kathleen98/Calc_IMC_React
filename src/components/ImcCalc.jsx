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

  return (<div className="calc_container">
    <h2>Calculadora IMC</h2>
    <form id="imc_form">
        <div className="form_inputs">
            <div className="form_control">
                <label htmlFor="height">Altura</label>
                <input type="text" name="height" id="height" placeholder="1.75" 
                onChange= {(e) => setHeight(e.target.value)} 
                value={height}
                />
            </div>
            <div className="form_control">
                <label htmlFor="weight">Altura</label>
                <input type="text" name="weight" id="weight" placeholder="1.75" 
                onChange={(e) => setWeight(e.target.value)} 
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