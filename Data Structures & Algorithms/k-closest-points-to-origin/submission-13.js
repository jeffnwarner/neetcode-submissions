class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const queue = [null];

        for (let i = 0; i < points.length; i++) {
            queue.push(points[i]);

            let index = queue.length - 1;
            let half = Math.floor(index / 2);

            if (half === 0) {
                continue; 
            }

            let indexDistance = Math.sqrt((queue[index][0] * queue[index][0]) + (queue[index][1] * queue[index][1]));
            let halfDistance = Math.sqrt((queue[half][0] * queue[half][0]) + (queue[half][1] * queue[half][1]));

            while (indexDistance > halfDistance) {
                const temp = queue[index];
                queue[index] = queue[half];
                queue[half] = temp;
                index = half;
                half = Math.floor(index / 2);
                if (half === 0) {
                    break;
                }
                indexDistance = Math.sqrt((queue[index][0] * queue[index][0]) + (queue[index][1] * queue[index][1]));
                halfDistance = Math.sqrt((queue[half][0] * queue[half][0]) + (queue[half][1] * queue[half][1]));
            }

            if (queue.length > k + 1) {
                // console.log({queue});
                queue[1] = queue[queue.length - 1];
                let index = 1;
                queue.pop();
                while (index * 2 < queue.length) {
                    const right = index * 2 + 1;
                    let rightDistance = -1;
                    if (right < queue.length) {
                        rightDistance = Math.sqrt((queue[right][0] * queue[right][0]) + (queue[right][1] * queue[right][1]));
                    }

                    const left = index * 2;
                    const leftDistance = Math.sqrt((queue[left][0] * queue[left][0]) + (queue[left][1] * queue[left][1]));
                    const indexDistance = Math.sqrt((queue[index][0] * queue[index][0]) + (queue[index][1] * queue[index][1]));
                    // console.log({indexDistance, leftDistance, rightDistance});
                    if (leftDistance > rightDistance && indexDistance < leftDistance) {
                        const temp = queue[index];
                        queue[index] = queue[left];
                        queue[left] = temp;
                        index = left;
                    } else if (right < queue.length && indexDistance < rightDistance) {
                        const temp = queue[index];
                        queue[index] = queue[right];
                        queue[right] = temp;
                        index = right;
                    } else {
                        break;
                    }
                }
            }
        }


        queue[0] = queue[queue.length - 1];
        queue.pop();

        return queue;
    }
}
