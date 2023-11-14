type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        this.length++;
        const node: Node<T> = { value: item };

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }
    deque(): T | undefined {
        if (!this.head) return;

        this.length--;

        const out = this.head.value;
        this.head = this.head.next;

        if (this.length === 0) this.tail = undefined;

        return out;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}

