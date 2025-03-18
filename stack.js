class Stack {
	constructor() {
		this.items = []
	}

	push(values) {
		if (typeof values == 'object') {
			values.forEach((value) => {
				this.items.push(value)
			})
			return
		}
		return this.items.push(values)
	}

	pop() {
		return this.items.pop()
	}

	show() {
		return this.items
	}
};

module.exports = Stack