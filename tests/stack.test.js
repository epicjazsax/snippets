const Stack = require('../stack');

test('successfully creates an object with a class of Stack', () => {
	const testStack = new Stack;
	expect(testStack).toBeInstanceOf(Stack)
})

test('initializes a field called "items"', () => {
	const testStack = new Stack;
	expect(testStack).toHaveProperty('items')
})

test('initializes "items" as an empty array', () => {
	const testStack = new Stack;
	expect(testStack['items']).toEqual([])
})

test('uses a "show" method to return its "items" array', () => {
	const testStack = new Stack;
	expect(testStack.show()).toEqual(testStack['items'])
})

test('correctly adds one item to its array', () => {
	const testStack = new Stack;
	testStack.add('foo');
	expect(testStack['items']).toEqual(['foo']);
	expect(testStack.show()).toEqual(testStack['items'])
})

test('correctly removes one item from its array', () => {
	const testStack = new Stack;
	testStack.add('foo');
	testStack.remove();
	expect(testStack['items']).toEqual([])
	expect(testStack.show()).toEqual(testStack['items'])
})
