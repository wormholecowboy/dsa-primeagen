export default function linear_search(haystack: number[], needle: number): boolean {
    for (let i = 0; i < haystack.length; i++) {
        const val = haystack[i];
        if (val === needle) {
            return true;
        }
    }
    return false
}
