class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const queue = [null];

        const push = (element) => {
            queue.push(element);
            let index = queue.length - 1;
            let half = Math.ceil(index / 2);
            // let count = 0;
            while (queue[index] > queue[half]) {
                // console.log({count}, push);
                const temp = queue[index];
                queue[index] = queue[half];
                queue[half] = temp;
                index = half;
                half = Math.ceil(index / 2);
                // count++;
            }
            // console.log('end push');
        }

        const pop = () => {
            if (queue.length === 1) {
                return 0;
            }

            const result = queue[1];
            queue[1] = queue[queue.length - 1];
            queue.pop();

            let index = 1;
            // let count = 0;
            while (index * 2 < queue.length) {
                // console.log({queue}, 'pop');
                // console.log({count}, 'pop');
                let right = -1;
                if (index * 2 + 1 < queue.length) {
                    right = queue[index * 2 + 1];
                }

                let left = queue[index * 2];

                if (left > right && queue[index] < left) {
                    queue[index * 2] = queue[index];
                    queue[index] = left;    
                    index = index * 2;
                } else if (right > 0 && queue[index] < right) {
                    queue[index * 2 + 1] = queue[index];
                    queue[index] = right;
                    index = index * 2 + 1;
                } else {
                    // console.log({index: queue[index], left, right});
                    break;
                }
                // count++;
            }
            // console.log('end pop');

            return result;
        }

        for (let i = 0; i < stones.length; i++) {
            push(stones[i]);
        }

        // let count = 0;
        // console.log({queue});
        while(queue.length > 2) {
            // console.log({count}, 'smash stones')
            const stone1 = pop();
            // console.log({queue});
            const stone2 = pop();
            // console.log({stone1, stone2, queue})

            const newStone = Math.abs(stone1 - stone2);
            // console.log({newStone})
            if (newStone > 0) {
                push(newStone);
                // console.log({queue}, 'push');
            }
            // count++;
        }
        // console.log('end smash');

        if (queue.length > 1) {
            return pop();
        }

        return 0;
    }
}
