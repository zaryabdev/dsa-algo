/**
 * https://leetcode.com/problems/generate-parentheses/description/
 * @param {number} n
 * @return {string[]}
 */

/*
    only add open parenthesis if open < n
    only add closing paranthesis if closed < open
    valid IIF open == clonses && == n
*/

// My Solution
function generateParenthesis(n) {
    const res = [];

    function backtrack(n, openN, closedN, current, res) {
        debugger;
        if (openN === closedN && openN === n) {
            res.push(current);
            return;
        }

        if (openN < n) {
            let addOpeningBracket = current + '(';
            backtrack(n, openN + 1, closedN, addOpeningBracket, res);
        }
        if (closedN < openN) {
            let addClosingBracket = current + ')';
            backtrack(n, openN, closedN + 1, addClosingBracket, res);
        }
    }

    backtrack(n, 0, 0, '', res);

    return res;
}


// Neetcode
function generateParenthesis(n) {
    const res = [];

    function backtrack(n, openN, closedN, current, res) {
        if (openN === closedN && openN === n) {
            res.push(current);
            return;
        }

        if (openN < n) {
            backtrack(n, openN + 1, closedN, current + '(', res);
        }
        if (closedN < openN) {
            backtrack(n, openN, closedN + 1, current + ')', res);
        }
    }

    backtrack(n, 0, 0, '', res);

    return res;
}



// Greg Hogg
var generateParenthesis = function (n) {
    const res = [];

    function dfs(openP, closeP, s) {
        if (openP === closeP && openP + closeP === n * 2) {
            res.push(s);
            return;
        }

        if (openP < n) {
            dfs(openP + 1, closeP, s + "(");
        }

        if (closeP < openP) {
            dfs(openP, closeP + 1, s + ")");
        }
    }

    dfs(0, 0, "");

    return res;
};

console.log(generateParenthesis(3)); //  ["((()))","(()())","(())()","()(())","()()()"]
