const Stack = require('../stack');

describe('Stack', () => {
	const stack = new Stack;

	test('shows its items as an object', () => {
		const shownList = stack.show();

		expect(typeof(shownList)).toBe('object')
	})
	
	test('pushes one item to the stack', () => {
		const pushSpy = jest.spyOn(stack, 'push');
		const pushedValue = 'Push Foo';
		stack.push(pushedValue);

		expect(pushSpy).toHaveBeenCalledWith(pushedValue);
		expect(stack.items).toContain(pushedValue);

		pushSpy.mockClear();
	})

	test('pushes an array of two items to the stack', () => {
		const valueOne = 'hello';
		const valueTwo = 'world';
		const pushedArray = [valueOne, valueTwo];

		stack.push(pushedArray);
		
		expect(stack.items).toContain(valueOne)
		expect(stack.items).toContain(valueTwo)
	})

	test('throws error when no argument is given to push', () => {
		expect(() => {
			stack.push()
		}).toThrow();
	})

	test('pops one item from the stack', () => {
		const popSpy = jest.spyOn(stack, 'pop');
		const initialValue = 'Pop Bar';
		stack.push(initialValue);
		const poppedValue = stack.pop();

		expect(popSpy).toHaveBeenCalled();
		expect(poppedValue).toEqual(initialValue);

		popSpy.mockClear();
	})

	test('peeks at one item', () => {

	})
})
