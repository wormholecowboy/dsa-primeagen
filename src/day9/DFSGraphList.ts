export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const path: number[] = [];

    walk(graph, source, needle, seen, path);

    if (path.length === 0) return null;

    return path;
}

function walk(
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    seen: boolean[],
    path: number[],
): boolean {
    if (seen[curr]) return false;
    seen[curr] = true;

    const list = graph[curr];

    path.push(curr);
    if (needle === curr) return true;

    for (let i = 0; i < list.length; i++) {
        const el = list[i];

        if (walk(graph, el.to, needle, seen, path)) return true;
    }

    path.pop();
    return false;
}

