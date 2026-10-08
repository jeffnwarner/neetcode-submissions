class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            const letter = s.charAt(i);

            if (letter === '[' || letter === '{' || letter === "(") {
                stack.push(letter);
            }

            if (letter === '}') {
                if (stack[stack.length - 1] === '{') {
                    stack.pop();
                } else {
                    return false;
                }
            }

            if (letter === ']') {
                if (stack[stack.length - 1] === '[') {
                    stack.pop();
                } else {
                    return false;
                }
            }

            if (letter === ')') {
                if (stack[stack.length - 1] === '(') {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        if (stack.length > 0) {
            return false;
        }

        return true;
    }
}
