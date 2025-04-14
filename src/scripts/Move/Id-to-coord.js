export function idToCoord(id) {
    const row = Math.floor((id - 1) / 8);
    const col = (id - 1 ) % 8;
    return { row, col }
} 