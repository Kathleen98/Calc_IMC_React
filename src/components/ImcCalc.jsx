import "./ImcCalc.css";
import Button from "./Button/Button";

const ImcCalc = () => {
  return (<div className="calc_container">
    <h2>Calculadora IMC</h2>
    <form id="imc_form">
        <div className="form_inputs">
            <div className="form_control">
                <label htmlFor="height">Altura</label>
                <input type="text" name="height" id="height" placeholder="1.75" />
            </div>
            <div className="form_control">
                <label htmlFor="weight">Altura</label>
                <input type="text" name="weight" id="weight" placeholder="1.75" />
            </div>
        </div>
        <div className="action_control">
            <Button id="calc-btn" text="Calcular"/>
            <Button id="clear-btn" text="Limpar"/>
        </div>
    </form>
  </div>
  )
}

export default ImcCalc