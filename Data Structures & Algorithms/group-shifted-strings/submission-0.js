class Solution {
    /**
     * @param {string[]} strings
     * @return {string[][]}
     */
    groupStrings(strings) {
        strings.sort((a, b) => a.length - b.length);
        const result = [];
        const map = new Map();
        const charCodeA = ('a').charCodeAt(0);
        for (let i = 0; i < strings.length; i++) {
            let key = '';
            const diff = strings[i].charCodeAt(0) - charCodeA;
            for (let j = 0; j < strings[i].length; j++) {
                let nextLetterCode = strings[i].charCodeAt(j) - diff;
                if (nextLetterCode < charCodeA) {
                    const leftOver = charCodeA - nextLetterCode;
                    nextLetterCode = ('z').charCodeAt(0) - leftOver + 1;
                }

                key = `${key}${String.fromCharCode(nextLetterCode)}`;
            }

            const values = map.get(key) ?? [];
            values.push(strings[i]);
            map.set(key, values);
            // console.log({key});
        }

        map.forEach((value, key) => {
            result.push(value);
        })

        return result;
    }
}
