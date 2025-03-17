const Stack = require('../stack');

test('uses a "show" method to return its "items" array', () => {
	const testStack = new Stack;
	expect(testStack.show()).toEqual(testStack['items'])
})

test('correctly adds one item to its array', () => {
	const testStack = new Stack;
	testStack.push('foo');
	expect(testStack['items']).toEqual(['foo']);
	expect(testStack.show()).toEqual(testStack['items'])
})

test('correctly removes one item from its array', () => {
	const testStack = new Stack;
	testStack.push('foo');
	testStack.pop();
	expect(testStack['items']).toEqual([])
	expect(testStack.show()).toEqual(testStack['items'])
})
