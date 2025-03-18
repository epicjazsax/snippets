const Stack = require('../stack');

describe('Stack', () => {
	const stack = new Stack;

	test('shows its items as an object', () => {
		const shownList = stack.show();

		expect(typeof(shownList)).toBe('object')
	})
	
	test('pushes one item and shows it in the stack', () => {
		const pushedValue = 'Push Foo';

		stack.push(pushedValue);
		const stackAfterPushing = stack.show();

		expect(stackAfterPushing).toContain(pushedValue);
	})

	test('pushes an array of two items and shows them in the stack', () => {
		const valueOne = 'hello';
		const valueTwo = 'world';
		const pushedArray = [valueOne, valueTwo];

		stack.push(pushedArray);
		const stackAfterPushingArray = stack.show();
		
		expect(stackAfterPushingArray).toContain(valueOne)
		expect(stackAfterPushingArray).toContain(valueTwo)
	})

	test('throws error when no argument is given to push', () => {
		expect(() => {
			stack.push()
		}).toThrow();
	})

	test('pops latest pushed item from the stack', () => {
		const initialValue = 'Pop Bar';
		stack.push(initialValue);

		const poppedValue = stack.pop();

		expect(poppedValue).toEqual(initialValue);
	})
})
