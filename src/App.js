import { useEffect, useState } from "react";
import CurrencyRow from "./components/CurrencyRow";
import './App.css'

const BASE_URL = `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.REACT_APP_API_KEY}`;

function App() {
const [ currencyOptions, setCurrencyOptions] = useState([])
const [fromCurrency, setFromCurrency] =useState()
const [toCurrency, setToCurrency] =useState()
const[ exchangeRate, setExchangeRate] = useState()
const [amount, setAmount] = useState(1)
const [amountInFromCurrency,setAmountInFromCurrency] =useState(true)
  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const firstCurrency = Object.keys(data.rates)[0]
      setCurrencyOptions(Object.keys(data.rates))
      setFromCurrency(data.base)
      setToCurrency(firstCurrency)
      setExchangeRate(data.rates[firstCurrency])
      console.log(currencyOptions)
    })
  },[])
  return (
    <>
    <h1>Currency Convert</h1>
    <CurrencyRow 
     currencyOptions={currencyOptions}
     selectedCurrency={fromCurrency} 
     onChangeCurrency = { (e) => setFromCurrency(e.target.value)}/>
    <div className='equal'> = </div>
    <CurrencyRow 
     currencyOptions={currencyOptions}
     selectedCurrency={toCurrency}
     onChangeCurrency = { (e) => setToCurrency(e.target.value)} />
    </>
  );
}

export default App;
