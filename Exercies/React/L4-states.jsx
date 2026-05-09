import { useState } from 'react'
// state functions

const App = () => {
  const [counter, setCounter] = useState(0)
  // useState assigns 0 to counter as a variable, setCounter, if used, sets couner at useState(x) and updates the page essentially

  // Its bad code to make new event handlers  on the JSX templates below so we make 
  // the event handlers before the JSX templates and call the handler
  const increaseByOne = () => setCounter(counter + 1)

  const setToZero = () => setCounter(0)


  // setCounter below updates the page by incrementing counter or on the button "zero" will make the counter go to 0
  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        plus
      </button>

      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}

export default App