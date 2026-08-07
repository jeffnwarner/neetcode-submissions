class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = [];
        const fleets = [];
        for (let i = 0; i < position.length; i++) {
            fleets.push([position[i], speed[i]]);
        }
        fleets.sort((a, b) => a[0] - b[0]);
        stack.push(fleets.pop());
        while (fleets.length) {
            const [pos, spd] = fleets.pop();
            const numSpaces = target - pos;
            const numTurns = numSpaces / spd;
            
            const [stackPos, stackSpd] = stack[stack.length - 1];
            const stackSpaces = target - stackPos;
            const stackTurns = stackSpaces / stackSpd;

            if (numTurns > stackTurns) {
                stack.push([pos, spd]);
            }
        }

        return stack.length;
    }
}
