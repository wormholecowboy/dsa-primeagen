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
    let pivotIndex = lo - 1;

    for (let i = lo; i < hi; i++) {
        const el = arr[i];

        if (el < pivot) {
            pivotIndex++;

            arr[i] = arr[pivotIndex];
            arr[pivotIndex] = el;
        }
    }

    pivotIndex++;

    arr[hi] = arr[pivotIndex];
    arr[pivotIndex] = pivot;

    return pivotIndex;
}

