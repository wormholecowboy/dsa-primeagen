export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q: (BinaryNode<number> | undefined)[] = [head];

    while (q.length) {
        const node = q.pop();

        if (!node) continue;
        if (needle === node.value) return true;
        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
    }
    return false;
}

