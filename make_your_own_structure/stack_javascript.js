class Stack {
    constructor() {
        this.queue = [];
    };
    push(x) {
        this.queue.push(x);
        for (let i = 0; i < this.queue.length; i++) {
            this.queue.push(this.queue.shift());
        };
    };
    pop() {
        return this.queue.shift();
    };
    head() {
        return this.queue[0];
    };
    empty() {
        return this.queue.length === 0;
    };
};