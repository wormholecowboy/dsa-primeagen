export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) return -1;
        const out = this.data[0];

        this.length--;
        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    heapifyDown(idx: number): void {
        const li = this.lchild(idx);
        const ri = this.rchild(idx);

        if (idx >= this.length || li >= this.length) return;

        const v = this.data[idx];
        const rv = this.data[ri];
        const lv = this.data[li];

        if (lv < v && lv < rv) {
            this.data[idx] = lv;
            this.data[li] = v;
            return this.heapifyDown(li);
        } else if (rv < v && rv < lv) {
            this.data[idx] = rv;
            this.data[ri] = v;
            return this.heapifyDown(ri);
        }
    }

    heapifyUp(idx: number): void {
        const pIndex = this.parent(idx);
        const pValue = this.data[pIndex];
        const val = this.data[idx];

        if (idx === 0) return;

        if (pValue > val) {
            this.data[pIndex] = val;
            this.data[idx] = pValue;
            return this.heapifyUp(pIndex);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private lchild(idx: number): number {
        return 2 * idx + 1;
    }

    private rchild(idx: number): number {
        return 2 * idx + 2;
    }
}

