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

        this.length--;
        const out = this.data[0];

        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    private heapifyDown(idx: number): void {
        const lIdx = this.lChild(idx);
        const rIdx = this.rChild(idx);

        if (idx >= this.length || lIdx >= this.length) return;

        const lV = this.data[lIdx];
        const rV = this.data[rIdx];
        const v = this.data[idx];

        if (lV < v && lV < rV) {
            this.data[idx] = lV;
            this.data[lIdx] = v;
            this.heapifyDown(lIdx);
        } else if (rV < v && rV < lV) {
            this.data[idx] = rV;
            this.data[rIdx] = v;
            this.heapifyDown(rIdx);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) return;

        const p = this.parent(idx);
        const pV = this.data[p];
        const v = this.data[idx];

        if (pV > v) {
            this.data[p] = v;
            this.data[idx] = pV;
            this.heapifyUp(p);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private lChild(idx: number): number {
        return 2 * idx + 1;
    }

    private rChild(idx: number): number {
        return 2 * idx + 2;
    }
}
