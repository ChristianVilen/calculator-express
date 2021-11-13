const calculator = require('../src/calculate')

const operators = ['+', '-', '*', '/']

test('test all operators', () => {
	for (let i = 0; i < operators.length; i++) {
		const operator = operators[i]
		const output = calculator({ left: 4, right: 2, operator })

		expect(output).toBe(checkOutput(output, operator))
	}
})

test('test', () => {
	const output = calculator({
			left: { left: 1, operator: '+', right: 2 },
			right: { left: 3, operator: '+', right: 4 },
			operator: '*',
		},
	)

	expect(output).toBe(21)
})

test('test recursion', () => {
	const output = calculator({
		left: { left: 2, right: 2, operator: '*' },
		right: { left: { left: 2, right: 2, operator: '+' }, right: 2, operator: '+' },
		operator: '+',
	})

	expect(output).toBe(10)
})

function checkOutput(output, operator) {
	switch (operator) {
		case '+':
			return 6
		case '-':
			return 2
		case '*':
			return 8
		case '/':
			return 2
	}
}
