export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    while (lo < hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if (needle === haystack[mid]) return true;
        if (needle > haystack[mid]) lo = mid + 1;
        if (needle < haystack[mid]) hi = mid;
    }
    return false;
}

