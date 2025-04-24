export function addMatrices(a: number[][], b: number[][]): number[][] {
    return a.map((row, i) =>
        row.map((val, j) => val + b[i][j])
    );
}

export function multiplyMatrices(a: number[][], b: number[][]): number[][] {
    const result: number[][] = Array(a.length).fill(null).map(() => Array(b[0].length).fill(0));
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b[0].length; j++) {
            for (let k = 0; k < a[0].length; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return result;
}

console.log("Matrix Addition:", addMatrices([[1, 2], [3, 4]], [[5, 6], [7, 8]]));
console.log("Matrix Multiplication:", multiplyMatrices([[1, 2]], [[3], [4]]));
