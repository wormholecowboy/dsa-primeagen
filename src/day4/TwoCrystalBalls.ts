export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = 0;

    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i] === true) {
            break;
        }
    }

    i -= jmpAmount;

    for (let j = 0; i < breaks.length && j < jmpAmount; j++, i++) {
        if (breaks[i]) return i;
    }

    return -1;
}

