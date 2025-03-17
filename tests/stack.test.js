const Stack = require('../stack');

describe('Stack', () => {
	const stack = new Stack;

	test('contains a method to show its items', () => {
		expect(stack.show()).toBeDefined()
	})
	
	test('pushes an item to the stack', () => {
		const pushSpy = jest.spyOn(stack, 'push');
		stack.push('foo');

		expect(pushSpy).toHaveBeenCalledWith('foo');

		pushSpy.mockClear();
	})

	test('pops one item from the stack', () => {
		const popSpy = jest.spyOn(stack, 'pop');
		stack.push('bar');
		const poppedValue = stack.pop();

		expect(poppedValue).toEqual('bar');
		expect(popSpy).toHaveBeenCalled();

		popSpy.mockClear();
	})
})
