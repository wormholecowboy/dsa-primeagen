type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.tail = undefined;
    }

    push(item: T): void {
        this.length++;
        const newNode: Node<T> = { value: item };
        if (!this.tail) this.tail = newNode;

        newNode.prev = this.tail;
        this.tail = newNode;
    }

    pop(): T | undefined {
        if (!this.tail) return;
        this.length--;

        const out = this.tail;
        this.tail = this.tail.prev;

        if (this.length === 0) this.tail = undefined;

        return out.value;
    }

    peek(): T | undefined {
        return this.tail?.value;
    }
}

