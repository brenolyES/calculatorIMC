import './App.css'
import React from 'react'
import { useState } from 'react';

function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura]= useState('');
  const [mensagem, setMensagem] = useState('');

  const calcimc = () => {
    const alt = altura/100;
    const imc = peso / (alt * alt);
    
    if(imc < 18.6){
      setMensagem(`Voce está abaixo do peso! Seu IMC: ${imc.toFixed(2)}`)
    } else if (imc >= 18.6 && imc < 24.9){
      setMensagem(`Voce está no peso ideal! Seu IMC: ${imc.toFixed(2)}`)
    }else if (imc >= 24.9 && imc < 34.9){
      setMensagem(`Voce está levemente acima do peso! Seu IMC: ${imc.toFixed(2)}`)
    }else if(imc > 34.9){
      setMensagem(`Cuidado Obesidade! Seu IMC: ${imc.toFixed(2)}`)
    }
  }

  return (
    <div className='app'>
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc?</span>
      <div className='area-input'>
        <input value={peso} onChange={e => setPeso(e.target.value)} type="text" placeholder='Peso em (kg) Ex: 90' />
        <input value={altura} onChange={e => setAltura(e.target.value)} type="text" placeholder='Altura em (cm) Ex: 180' />
        <button onClick={calcimc}>Calcular</button>
      </div>
      <h2>{mensagem}</h2>
    </div>
  )
}

export default App;
