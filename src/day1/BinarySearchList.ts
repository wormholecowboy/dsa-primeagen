export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    while (lo < hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        let v = haystack[mid];

        if (v === needle) {
            return true;
        }
        if (v < needle) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return false;
}
