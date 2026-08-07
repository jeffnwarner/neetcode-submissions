class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (let i = 0; i < tokens.length; i++) {
            if (isNaN(parseInt(tokens[i]))) {
                let secondNum = stack.pop();
                let firstNum = stack.pop();
                if (tokens[i] === '+') {
                    firstNum += secondNum;
                } else if (tokens[i] === '-') {
                    firstNum -= secondNum;
                } else if (tokens[i] === '*') {
                    firstNum *= secondNum;
                } else if (tokens[i] === '/') {
                    firstNum = Math.trunc(firstNum / secondNum);
                }
                stack.push(firstNum);
            } else {
                stack.push(parseInt(tokens[i]));
            }
            console.log(stack);
        }

        return stack.pop();
    }
}
