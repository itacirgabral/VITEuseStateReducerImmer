import { useReducer } from 'react'
import { produce } from "immer"

interface AppState {
  count: number;
  valueToAdd: number;
}

type AppActionIncrement = {
  type: 'increment';

}
type AppActionDecrement = {
  type: 'decrement';
}
type AppActionAdd = {
  type: 'addValue';
}
type AppActionSetAddValue = {
  type: 'setValue',
  payload: number;
}
type AppAction = AppActionIncrement | AppActionDecrement | AppActionAdd | AppActionSetAddValue

const reducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case 'increment': {
      state.count++
      return
    }
    case 'decrement': {
      state.count--

      return
    }
    case 'addValue': {
      state.count += state.valueToAdd
      state.valueToAdd = 0
      return
    }
    case 'setValue': {
      state.valueToAdd = action.payload
      return

    }
  }
  return state
}

function App() {

  const [state, dispatch] = useReducer(produce(reducer), {
    count: 0,
    valueToAdd: 0
  })


  const handleIncrease = () => {
    dispatch({
      type: 'increment'
    })
  }
  const handleDecrease = () => {
      dispatch({
      type: 'decrement'
    })
  }
  const handleStepChange = (ev:React.ChangeEvent<HTMLInputElement>) => {
    const newStep = Number.parseInt(ev.target.value)
    if (Number.isNaN(newStep)) {
      dispatch({
        type: 'setValue',
        payload: 0
      })
    } else {
      dispatch({
        type: 'setValue',
        payload: newStep
      })
    }
  }
  const handleAddALot = () => {
    dispatch({
      type: 'addValue'
    })
    dispatch({
      type: 'setValue',
      payload: 0
    })
  }

  return <>
    <p>current count: {state.count}</p>
    <p>
      <button onClick={handleIncrease}>increment</button>
      <button onClick={handleDecrease}>decrement</button>
    </p>
    <p>add a lot</p>
    <input type="number" value={state.valueToAdd || ''} onChange={handleStepChange}/><br />
    <button onClick={handleAddALot}>add it</button>
  </>
}

export default App
