import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Date from "./components/Date/Date.jsx";
import Table from "./components/Table/Table.jsx";
import Calculator from "./components/Calculator/Calculator.jsx";

function App() {
	const apiKey = "63fb360c1b05aed37286266543494d57";
	//	const base = "&base=RUB"; в бесплатном тарифе только евро как база
	const symbols = ["USD", "RUB", "UAH"];
	const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}&symbols=${symbols}`;

	const [apiData, setApiData] = useState({});
	const [todayDate, setTodayDate] = useState("");
	const [rates, setRates] = useState({});

	const getRate = (url) => {
		(async function () {
			let data = await fetch(url).then((result) => result.json());
			console.log(data);
			setApiData(data);
			setTodayDate(data.date);
			setRates(data.rates);
		})();
	};

	useEffect(() => getRate(url), [url]);

	return (
		<div className="App">
			<main className="container">
				<Date date={todayDate} />
				<div className="tables">
					{Object.keys(rates).map((ratesName) => (
						<Table
							key={ratesName}
							title={ratesName}
							count={rates[ratesName]}
						/>
					))}
				</div>
				<Calculator rates={rates} symbols={symbols} />
			</main>
		</div>
	);
}

export default App;
