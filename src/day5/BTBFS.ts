export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q: (BinaryNode<number> | undefined)[] = [head];

    while (q.length) {
        const curr: BinaryNode<number> | undefined = q.shift();

        if (!curr) continue;
        if (curr.value === needle) return true;
        if (curr.left) q.push(curr.left);
        if (curr.right) q.push(curr.right);
    }

    return false;
}

