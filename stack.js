class Stack {
	constructor() {
		this.items = []
	}

	push(item) {
		this.items.push(item)
	}

	pop() {
		this.items.pop()
	}

	show() {
		return this.items
	}
};

module.exports = Stack