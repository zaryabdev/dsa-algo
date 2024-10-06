/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    debugger;
    let stack = [];
    let operators = { "+": "ADD", "-": "SUB", "*": "MUL", "/": "DIV" };

    tokens.forEach(token => {
        debugger;
        let isOperator = operators[token];
        if (isOperator) {
            let prev = stack.pop();
            let prevPrev = stack.pop();

            switch (isOperator) {
                case "ADD":
                    stack.push(prev + prevPrev);
                    break;
                case "SUB":
                    stack.push(prevPrev - prev);
                    break;
                case "DIV":
                    stack.push(parseInt(prevPrev / prev));
                    break;
                case "MUL":
                    stack.push(prev * prevPrev);
                    break;
            }


        } else {
            stack.push(parseInt(token));
        }
    });
    return parseInt(stack[0]);

};


console.log(evalRPN(["2", "1", "+", "3", "*"])); // ((2 + 1) * 3) = 9
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
/*
      ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
    = ((10 * (6 / (12 * -11))) + 17) + 5
    = ((10 * (6 / -132)) + 17) + 5
    = ((10 * 0) + 17) + 5
    = (0 + 17) + 5
    = 17 + 5
    = 22
*/
console.log(evalRPN(["4", "13", "5", "/", "+"])); // (4 + (13 / 5)) = 6
