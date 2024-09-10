var isValid = function (str) {
    debugger;
    if (str.length % 2 == 1) return false;
    const map = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    let stack = [];
    let valid = true;
    let index = 0;

    while (valid && index < str.length) {
        debugger;
        let bracket = str[index];
        let closingBracket = map[bracket];

        if (closingBracket) {
            let currentTop = stack[stack.length - 1];

            if (closingBracket == currentTop) {
                stack.pop();
            } else {
                valid = false;
            }
        } else {
            stack.push(bracket);
        }
        index++;
    }

    return valid ? (stack.length > 0 ? false : true) : false;
};

// isValid("()[]{}");
isValid("]]");
