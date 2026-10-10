class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position.map((p, index) => [p, speed[index]]);
        cars.sort((a, b) => a[0] - b[0]);

        const stack = [];
        let lastTime = Math.max();

        while (cars.length > 0) {
            const car = cars.pop();
            const [carPosition, carSpeed] = car;
            const time = (target - carPosition) / carSpeed;

            // console.log({car, time, lastTime})
            if (time > lastTime) {
                stack.push(car);
                lastTime = time;
            } 

        }

        return stack.length;
    }
}
