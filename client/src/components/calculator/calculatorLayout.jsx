import './style.css'

import Display from '../display/display'
import Keypad from '../keypad/keypad'
import { useState } from 'react'

const CalculatorLayout = () => {
  const [input, setInput] = useState()

  const handleInput = () => {
    // make sure input is properly formatted
    // do request with input
    // set result to state and show on display

    setInput(1 + 1)
  }

  return (
    <div className='calculator'>
      <Display numbers='1 + 2' result='4' />
      <Keypad input={handleInput} />
    </div>
  )
}
export default CalculatorLayout
