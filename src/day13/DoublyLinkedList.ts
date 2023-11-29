type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        //
    }
    append(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; i < this.length && curr; i++) {
            if (curr.value === item) break;
            curr = curr.next;
        }

        if (!curr) return undefined;

        return this.removeNode(curr);
    }

    private removeNode(curr: Node<T>): T {
        this.length--;
        if (this.length === 0) {
            const out = curr.value;
            this.head = this.tail = undefined;
            return out;
        }

        const node = curr;
        if (curr.next) curr.next.prev = curr.prev;
        if (curr.prev) curr.prev.next = curr.next;
        curr.next = curr.prev = undefined;

        return node.value;
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }

    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head;
        let i = 0;

        while (i < idx && curr) {
            curr = curr.next;
        }
        return curr;
    }

    removeAt(idx: number): T | undefined {
        //
    }
}

