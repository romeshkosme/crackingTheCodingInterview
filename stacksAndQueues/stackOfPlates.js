class Stack {
	#limit;
	#stack;
	#top;
	constructor(n) {
		this.#limit = n;
		this.#stack = new Array(n);
		this.#top = -1;
	}
	push(value) {
		return new Promise(async (resolve, reject) => {
			try {
				if (this.#limit - 1 === this.#top) {
					throw "Stack is full.";
				}
				this.#top++;
				this.#stack[this.#top] = value;
				resolve({ success: true });
			} catch (error) {
				console.log(error);
				reject(false);
			}
		});
	}
	pop() {
		return new Promise(async (resolve, reject) => {
			try {
				if (this.#top > -1) {
					this.#stack[this.#top--] = null;
					resolve(true);
					return;
				} else {
					resolve(true);
					return;
				}
			} catch (error) {
				console.log(error);
				reject(false);
			}
		});
	}
	isEmpty() {
		return new Promise((resolve, reject) => {
			try {
				if (this.#top < 0) {
					resolve(true);
					return;
				} else {
					resolve(false);
					return;
				}
			} catch (error) {
				console.log(error);
				reject(false);
			}
		});
	}
	isFull() {
		return new Promise((resolve, reject) => {
			try {
				if (this.#limit - 1 === this.#top) {
					resolve(true);
					return;
				} else {
					resolve(false);
					return;
				}
			} catch (error) {
				console.log(error);
				reject(false);
			}
		});
	}
	print() {
		let current = this.#top;
		while (current > -1) {
			console.log(this.#stack[current--]);
		}
	}
}
class SetOfStacks {
	#stack;
	#setOfStacks;
	#top;
	#limit;
	constructor(n) {
		this.#setOfStacks = [];
		this.#top = -1;
		this.#stack = new Stack(n);
		this.#limit = n;
	}
	push(value) {
		return new Promise(async (resolve, reject) => {
			try {
				const isEmpty = await this._isStackEmpty();
				const isFull = await this._isStackFull();
				if (isEmpty || isFull) this.#top++;
				if (isFull) this._getNewStack();
				this.#stack.push(value);
				this._updateSetOfStack();
				resolve(true);
			} catch (error) {
				console.log("push - ", error);
				reject(false);
			}
		});
	}
	pop() {
		return new Promise(async (resolve, reject) => {
			try {
				let pop = await this.#stack.pop();
				const isEmpty = await this._isStackEmpty();
				if (isEmpty) {
					this.#setOfStacks.splice(this.#top--);
					this.#stack = this.#setOfStacks[this.#top];
				}
				resolve(true);
			} catch (error) {
				console.log(error);
				reject(false);
			}
		});
	}
	_getNewStack() {
		try {
			this.#stack = new Stack(this.#limit);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
	async _isStackFull() {
		try {
			const full = await this.#stack.isFull();
			return full ? true : false;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
	async _isStackEmpty() {
		try {
			const empty = await this.#stack.isEmpty();
			return empty ? true : false;
		} catch (error) {
			console.log(first);
			return false;
		}
	}
	_updateSetOfStack() {
		try {
			this.#setOfStacks[this.#top] = this.#stack;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
	display() {
		let current = this.#top;
		while (current > -1) {
			this.#setOfStacks[current--].print();
		}
	}
}
(async () => {
	const setOfStacks = new SetOfStacks(3);
	let push, pop;
	push = await setOfStacks.push(1);
	push = await setOfStacks.push(2);
	push = await setOfStacks.push(3);
	push = await setOfStacks.push(4);
	push = await setOfStacks.push(5);
	push = await setOfStacks.push(6);
	push = await setOfStacks.push(7);
	pop = await setOfStacks.pop();
	push = await setOfStacks.push(8);
	setOfStacks.display();
})();
// (async () => {
// 	const stack = new Stack(4);
// 	let push, pop;
// 	push = await stack.push(1);
// 	push = await stack.push(2);
// 	push = await stack.push(3);
// 	push = await stack.push(4);
// 	// stack.print();
// 	// push = await stack.push(5);
// 	pop = await stack.pop();
// 	stack.print();
// })();
