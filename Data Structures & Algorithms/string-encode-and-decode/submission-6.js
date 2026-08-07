class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = '';

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];

            result = `${result}${str.length}#${str}`;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str);
        const result = [];

        let letterCount = 0;
        let constructNum = '';
        let seenPound = false;
        let word = '';
        
        let i = 0; 
        while(i < str.length + 1) {
            if (str[i] === '#' && !seenPound) {
                seenPound = true;
                letterCount = parseInt(constructNum);
                i++;
            } else {
                if (!seenPound) {
                    constructNum = `${constructNum}${str[i]}`
                    i++;
                } else {
                    if (!letterCount) {
                        result.push(word);
                        word = '';
                        constructNum = '';
                        seenPound = false;
                        console.log({i, result});
                    } else {
                        word = `${word}${str[i]}`;
                        letterCount = letterCount > 0 ? letterCount - 1 : 0;
                        i++;
                    }
                }
            }
        }

        console.log(word);

        if (seenPound && !word) {
            result.push(word);
        }

        return result;
    }
}
