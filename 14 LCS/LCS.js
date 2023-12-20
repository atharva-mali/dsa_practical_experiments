function lcs(X, Y) {
    const m = X.length;
    const n = Y.length;

    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
            } else if (X[i - 1] === Y[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    let index = dp[m][n];
    const lcs = new Array(index);

    let i = m, j = n;
    while (i > 0 && j > 0) {
        if (X[i - 1] === Y[j - 1]) {
            lcs[--index] = X[i - 1];
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    const length = dp[m][n];

    return { lcs: lcs.join(''), length };
}

const str1 = "ABCBDAB";
const str2 = "BDCABA";
const result = lcs(str1, str2);
console.log("LCS: " + result.lcs);
console.log("Length of LCS: " + result.length);
