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

    private heapifyDown(idx: number) {
        const leftIdx = this.getLChild(idx);
        const rightIdx = this.getRChild(idx);

        if (idx >= this.length || leftIdx >= this.length) return;

        const lV = this.data[leftIdx];
        const rV = this.data[rightIdx];
        const v = this.data[idx];

        if (lV > rV && v > rV) {
            this.data[idx] = rV;
            this.data[rightIdx] = v;
            this.heapifyDown(rightIdx);
        } else if (v > lV && lV < rV) {
            this.data[idx] = lV;
            this.data[leftIdx] = v;
            this.heapifyDown(leftIdx);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) return;

        const p = this.getParent(idx);
        const pV = this.data[p];
        const v = this.data[idx];

        if (pV > v) {
            this.data[idx] = pV;
            this.data[p] = v;
            return this.heapifyUp(p);
        }
    }

    private getParent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private getLChild(idx: number): number {
        return 2 * idx + 1;
    }

    private getRChild(idx: number): number {
        return 2 * idx + 2;
    }
}
