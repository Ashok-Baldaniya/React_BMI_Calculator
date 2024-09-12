import React, { useMemo, useState } from 'react'
import './App.css';
const App = () => {

  const [weight, setWeight] = useState(40);
  const [height, setHeight] = useState(140);

  function onWeightChange(event) {
    setWeight(event.target.value);
  }

  function onHeightChange(event) {
    setHeight(event.target.value);
  }

  const output = useMemo(() => {
    const h = height / 100;
    return (weight / (h * h)).toFixed(1);
  }, [weight, height])

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight: {weight} Kg</p>
        <input className='input-slider' type='range' step={1} min={40} max={120} onChange={onWeightChange}></input>
        <p className='slider-output'>Height: {height} cms</p>
        <input className='input-slider' type='range' min={140} max={200} onChange={onHeightChange} ></input>
      </div>
      <div className='output-section'>
        <p>Your BMI is</p>
        <p className='output'>{output}</p>
      </div>
    </main>
  )
}

export default App
