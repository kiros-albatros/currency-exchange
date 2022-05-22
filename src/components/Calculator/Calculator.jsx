import "./Calculator.scss";
import { useState } from "react";

const Calculator = ({ rates, symbols }) => {
	const [result, setResult] = useState(0);
	function handleForm(e) {
		e.preventDefault();
		let result = 0;
		const inputNumber = document.querySelector(".calc__input").value;
		const selectValue = document.querySelector(".calc__select").value;
		result = (inputNumber / rates[selectValue]).toFixed(2);
		setResult(result);
	}

	return (
		<div className="calc">
			<h6 className="calc__title">Калькулятор валют</h6>
			<form className="calc__form" onChange={handleForm}>
				<input
					type="number"
					name=""
					id=""
					placeholder="Введите число"
					className="calc__input"
				/>
				<select name="" id="" className="calc__select">
					{symbols.map((symbol) => {
						return (
							<option key={symbol} value={symbol}>
								{symbol}
							</option>
						);
					})}
				</select>
				<br />
				<button className="calc__btn" onClick={handleForm}>
					Посчитать
				</button>
			</form>
			<p className="calc__result">Результат: {result} EUR</p>
		</div>
	);
};

export default Calculator;
