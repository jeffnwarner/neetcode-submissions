class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const map = new Map();

        prerequisites.forEach(([courseA, courseB]) => {

            let neighbors = map.get(courseA) ?? [];
            neighbors.push(courseB);
            map.set(courseA, neighbors);
        });

        for (let i = 0; i < numCourses; i++) {
            const visited = new Set();

            function dfs(currCourse) {
                console.log({currCourse})
                if (visited.has(currCourse)) {
                    return false;
                }

                visited.add(currCourse);
                const prereqs = map.get(currCourse) ?? [];
                console.log({prereqs});

                for (let i = 0; i < prereqs.length; i++) {
                    if (!dfs(prereqs[i])) {
                        return false;
                    }
                }
                visited.delete(currCourse);
                return true;
            }
            
            if (!dfs(i)) {
                return false;
            }
        }

        return true;
    }
}
