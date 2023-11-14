type Node<T> = {
    value: T;
    next?: Node<T>;
};
export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        this.length++;

        const newItem: Node<T> = { value: item };

        if (!this.tail) {
            this.tail = this.head = newItem;
            return;
        }

        this.tail.next = newItem;
        this.tail = newItem;
    }

    deque(): T | undefined {
        if (!this.head) return;

        this.length--;
        if (this.length === 0) {
            let out = this.head;
            this.head = this.tail = undefined;
            return out.value;
        }
        let out = this.head;
        this.head = this.head.next;
        return out.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

