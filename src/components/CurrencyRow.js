import React from 'react'

export default function CurrencyRow(props) {
    const { currencyOptions, selectedCurrency, onChangeCurrency} = props
    return (
        <div>
            <input type ='number' className = "input"></input>
            <select value ={selectedCurrency} onChange ={onChangeCurrency}>
                { currencyOptions.map( opt => (
                    <option key ={opt} value = {opt}>{opt}</option>
                ))}
                
            </select>
        </div>
    )
}
