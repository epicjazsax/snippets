class Stack {
	constructor() {
		this.items = []
	}

	push(item) {
		return this.items.push(item)
	}

	pop() {
		return this.items.pop()
	}

	show() {
		return this.items
	}
};

module.exports = Stack