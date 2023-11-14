type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        this.length++;
        const node: Node<T> = { value: item };
        if (!this.head) {
            this.head = node;
            return;
        }

        node.next = this.head;
        this.head = node;
    }
    pop(): T | undefined {
        if (!this.head) return;
        this.length--;

        const out = this.head.value;

        this.head = this.head.next;

        return out;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}

