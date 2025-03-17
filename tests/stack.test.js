const Stack = require('../stack');

describe('Stack', () => {
	const stack = new Stack;

	test('contains a method to show its items', () => {
		const showSpy =  jest.spyOn(stack, 'show');
		const shownList = stack.show();
		const internalList = stack.items;

		expect(showSpy).toHaveBeenCalled();
		expect(shownList).toEqual(internalList);

		showSpy.mockClear();
	})
	
	test('pushes an item to the stack', () => {
		const pushSpy = jest.spyOn(stack, 'push');
		const pushedValue = 'Push Foo';
		stack.push(pushedValue);

		expect(pushSpy).toHaveBeenCalledWith(pushedValue);
		expect(stack.items).toContain(pushedValue);

		pushSpy.mockClear();
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
})
