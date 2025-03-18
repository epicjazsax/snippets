class Stack {
	#items = [];

	push(values) {
		if (!values) {
			throw new Error('must give a value to push')
		}

		if (typeof values == 'object') {
			values.forEach((value) => {
				this.#items.push(value)
			})
			return
		}

		return this.#items.push(values)
	}

	pop() {
		return this.#items.pop()
	}

	show() {
		return this.#items
	}

	peek() {
		const heightOfStack = this.#items.length;
		const topOfStack = this.#items[heightOfStack-1];

		return topOfStack 
	}

	clear() {
		this.#items = []

		return
	}

	isEmpty() {
		if (this.#items.length) {
			return false
		}

		return true
	}
};

module.exports = Stack