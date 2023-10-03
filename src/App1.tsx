import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [valueToAdd, setvalueToAdd] = useState(0)
  const handleIncrease = () => {
    setCount(el => el + 1)
  }
  const handleDecrease = () => {
    setCount(el => el + 1)
  }
  const handleStepChange = (ev:React.ChangeEvent<HTMLInputElement>) => {
    const newStep = Number.parseInt(ev.target.value)
    if (Number.isNaN(newStep)) {
      setvalueToAdd(0)
    } else {
      setvalueToAdd(newStep)
    }
  }
  const handleAddALot = () => {
    setCount(el => el + valueToAdd)
    setvalueToAdd(0)
  }

  return <>
    <p>current count: {count}</p>
    <p>
      <button onClick={handleIncrease}>increment</button>
      <button onClick={handleDecrease}>decrement</button>
    </p>
    <p>add a lot</p>
    <input type="number" value={valueToAdd || ''} onChange={handleStepChange}/><br />
    <button onClick={handleAddALot}>add it</button>
  </>
}

export default App
