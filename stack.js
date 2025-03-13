class Stack {
	constructor() {
		this.items = []
	}

	add(item) {
		this.items.unshift(item)
	}

	remove() {
		this.items.shift()
	}

	show() {
		return this.items
	}
};

module.exports = Stack