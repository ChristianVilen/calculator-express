import './style.css'
import { IoBackspaceOutline } from 'react-icons/io5'
import { useEffect, useState } from 'react'

const Keypad = ({ operation, hasBeenPressed }) => {
	const [valueToBeAdded, setValueToBeAdded] = useState('')
	const [operation1, setOperation1] = useState([])
	//
	// useEffect(() => {
	// 	operation(operation1)
	// }, [operation, operation1])

	const addValueToState = (value) => setValueToBeAdded(valueToBeAdded + value)

	function setStateToOperator(operator) {
		if (operator !== '=') {
			setOperation1([...operation1, valueToBeAdded, operator])
		} else {
			setOperation1([...operation1, valueToBeAdded])
			hasBeenPressed()
		}

		setValueToBeAdded('')
	}

	function removeLastItemAdded() {
		operation1.splice(-1)
		setOperation1(operation1)
	}

	return (
		<div className='buttons'>
			<button value={'backspace'} onClick={() => removeLastItemAdded()}><IoBackspaceOutline /></button>

			<button value={'C'} onClick={() => setOperation1([])}> C</button>

			<button value={'%'} onClick={() => {
			}}> %
			</button>

			<button value={'/'} onClick={() => setStateToOperator('/')} className='operator'>/</button>

			<button value={'1'} onClick={() => addValueToState(1)}>1
			</button>
			<button value={'2'} onClick={() => addValueToState(2)}>2
			</button>
			<button value={'3'} onClick={() => addValueToState(3)}>3
			</button>
			<button value={'*'} onClick={() => setStateToOperator('*')} className='operator'>*</button>

			<button value={'4'} onClick={() => addValueToState(4)}>4</button>

			<button value={'5'} onClick={() => addValueToState(5)}>5</button>

			<button value={'6'} onClick={() => addValueToState(6)}>6</button>

			<button value={'-'} onClick={() => setStateToOperator('-')} className='operator'>-</button>

			<button value={'7'} onClick={() => addValueToState(7)}>7</button>

			<button value={'8'} onClick={() => addValueToState(8)}>8</button>

			<button value={'9'} onClick={() => addValueToState(9)}>9</button>

			<button value={'+'} onClick={() => setStateToOperator('+')} className='operator'>+</button>

			<button value={'.'} onClick={() => addValueToState('.')}>.</button>

			<button value={'0'} onClick={() => addValueToState(0)}>0</button>

			<button value={'='} onClick={() => {
				// setStateToOperator('=')
				// todo state is one step Behind
				setOperation1([...operation1, valueToBeAdded])
				console.log(operation1)
				operation(operation1)
			}} className='operator'>=</button>
		</div>
	)
}

export default Keypad
