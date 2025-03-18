class Stack {
	#items = [];

	push(values) {
		if (values) {
			if (typeof values == 'object') {
				values.forEach((value) => {
					this.#items.push(value)
				})
				return
			}
			return this.#items.push(values)
		}
		throw new Error('must give a value to push')
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
};

module.exports = Stack