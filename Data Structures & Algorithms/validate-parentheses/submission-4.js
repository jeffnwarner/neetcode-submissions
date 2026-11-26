class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            const stackTop = stack[stack.length - 1];
            if (s[i] === '{' || s[i] === '(' || s[i] === '[') {
                stack.push(s[i]);
            } else if ((s[i] === '}' && stackTop === '{') 
                || s[i] === ')' && stackTop === '('
                || s[i] === ']' && stackTop === '[') {
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
