const Stack = require('../stack');

describe('show', () => {
	const stack = new Stack;

	test('shows its items as an object', () => {
		const shownList = stack.show();

		expect(typeof(shownList)).toBe('object')
	})
})

describe('push', () => {
	const stack = new Stack;

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
})

describe('pop', () => {
	const stack = new Stack;

	test('pops latest pushed item from the stack', () => {
		const pushedValue = 'Pop Bar';
		stack.push(pushedValue);

		const poppedValue = stack.pop();

		expect(poppedValue).toEqual(pushedValue);
	})

	test('throws error when there is nothing to pop', () => {
		stack.clear();

		expect(() => {
			stack.pop()
		}).toThrow();
	})
})

describe('peek', () => {
	const stack = new Stack;

	test('peeks at latest pushed item from the stack', () => {
		const pushedValue = 'Peek Me';
		stack.push(pushedValue);

		const peekedValue = stack.peek();

		expect(peekedValue).toEqual(pushedValue);
	})

	test('throws error when there is nothing to peek', () => {
		stack.clear();

		expect(() => {
			stack.peek()
		}).toThrow();
	})
})

describe('clear', () => {
	const stack = new Stack;

	test('clears the stack', () => {
		stack.push('Making sure stack is not empty yet');
		const stackHeightBeforeClearing = stack.show().length;

		stack.clear();
		const stackHeightAfterClearing = stack.show().length;

		expect(stackHeightBeforeClearing).toBeGreaterThan(0);
		expect(stackHeightAfterClearing).toBe(0);
	})
})

describe('isEmpty', () => {
	const stack = new Stack;

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
