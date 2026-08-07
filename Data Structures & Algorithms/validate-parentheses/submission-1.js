class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            if (s[i] === '[' || s[i] === '{' || s[i] === '(') {
                stack.push(s[i]);
            } else if (s[i] === ']' && stack[stack.length - 1] === '[') {
                stack.pop();
            } else if (s[i] === '}' && stack[stack.length - 1] === '{') {
                stack.pop();
            } else if (s[i] === ')' && stack[stack.length - 1] === '(') {
                stack.pop();
            } else {
                return false;
            }
        }

        if (stack.length > 0) {
            return false;
        }

        return true;
    }
}
