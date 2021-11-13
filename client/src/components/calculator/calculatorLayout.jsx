import './style.css'

import Display from '../display/display'
import Keypad from '../keypad/keypad'
import { useState } from 'react'
import axios from 'axios'

const CalculatorLayout = () => {
	const [input, setInput] = useState()
	const [result, setResult] = useState()
	const [hasBeenPressed, setHasBeenPressed] = useState(false)

	const handleInput = (userInput) => {
		// extract every fourth operator
		const every4thOperator = extract4thOperators(userInput)
		// divide arr to chunks and for chunk do
		const chunks = getChunks(userInput)

		let itemToSend

		let haveBeenIn = 0

		chunks.forEach((chunk) => {
			if (itemToSend) {
				let newChunk = { left: chunk[0], operator: chunk[1], right: chunk[2] }
				let operator = every4thOperator[haveBeenIn][0]
				haveBeenIn += 1
				itemToSend = { left: itemToSend, right: newChunk, operator: operator.toString() }
				return
			}

			itemToSend = { left: chunk[0], operator: chunk[1], right: chunk[2] }
		})


		console.log('itemTosend', itemToSend)
		if (hasBeenPressed) {
			let res = axios.post('http://localhost:8000', itemToSend).then(r => r)
			console.log(res)
			setResult()
		}

		setInput(userInput)
	}

	function getChunks(arr) {
		const perChunk = 3

		return arr.reduce((resultArray, item, index) => {
			const chunkIndex = Math.floor(index / perChunk)

			if (!resultArray[chunkIndex]) {
				resultArray[chunkIndex] = [] // start a new chunk
			}

			resultArray[chunkIndex].push(item)

			return resultArray
		}, [])
	}

	function extract4thOperators(arr) {
		const every4thOperator = []
		let i = Math.floor(arr.length / 4)

		while (i--) {
			every4thOperator.push(arr.splice((i + 1) * 4 - 1, 1))
		}

		return every4thOperator
	}

	const handlePress = () => setHasBeenPressed(!hasBeenPressed)

	return (
		<div className='calculator'>
			<Display numbers={input} result={result} />
			<Keypad operation={handleInput} hasBeenPressed={handlePress} />
		</div>
	)
}
export default CalculatorLayout
