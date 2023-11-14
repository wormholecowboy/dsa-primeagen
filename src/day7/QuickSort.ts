export default function quick_sort(arr: number[]): void {
    return qs(arr, 0, arr.length - 1);
}

function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) return;

    const pivotIndex = partition(arr, lo, hi);

    qs(arr, lo, pivotIndex - 1);
    qs(arr, pivotIndex + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];
    let pIdx = lo - 1;

    for (let i = lo; i < hi; i++) {
        if (arr[i] < pivot) {
            pIdx++;

            const temp = arr[i];
            arr[i] = arr[pIdx];
            arr[pIdx] = temp;
        }
    }
    pIdx++;

    arr[hi] = arr[pIdx];
    arr[pIdx] = pivot;

    return pIdx;
}

