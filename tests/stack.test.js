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
		const pushedValue = 'Pop Bar';
		stack.push(pushedValue);

		const poppedValue = stack.pop();

		expect(poppedValue).toEqual(pushedValue);
	})

	test('peeks at latest pushed item from the stack', () => {
		const pushedValue = 'Peek Me';
		stack.push(pushedValue);

		const peekedValue = stack.peek();

		expect(peekedValue).toEqual(pushedValue);
	})

	test('clears the stack', () => {
		stack.push('Making sure stack is not empty yet');
		const stackHeightBeforeClearing = stack.show().length;

		stack.clear();
		const stackHeightAfterClearing = stack.show().length;

		expect(stackHeightBeforeClearing).toBeGreaterThan(0);
		expect(stackHeightAfterClearing).toBe(0);
	})

	test('verifies that an empty stack is empty', () => {
		stack.clear();
		const isEmptyStackEmpty = stack.isEmpty();

		expect(isEmptyStackEmpty).toBe(true)
	})

	test('verifies that a non-empty stack is not empty', () => {
		stack.push('Now stack is definitely not empty');
		const isOccupiedStackEmpty = stack.isEmpty();

		expect(isOccupiedStackEmpty).toBe(false);
	})
})
