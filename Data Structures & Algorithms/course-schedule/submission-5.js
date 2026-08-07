class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const map = new Map();

        for (let i = 0; i < prerequisites.length; i++) {
            const [courseA, courseB] = prerequisites[i];

            let neighbors = map.get(courseA) ?? [];
            neighbors.push(courseB);
            map.set(courseA, neighbors);
        }

        for (let i = 0; i < prerequisites.length; i++) {
            const [courseA, courseB] = prerequisites[i];
            const visited = new Set();

            function dfs(currCourse) {
                console.log({currCourse})
                if (visited.has(currCourse)) {
                    return false;
                }

                visited.add(currCourse);
                const prereqs = map.get(currCourse) ?? null;
                console.log({prereqs});
                if (!prereqs) {
                    visited.delete(currCourse);
                    return true;
                }

                for (let i = 0; i < prereqs.length; i++) {
                    if (!dfs(prereqs[i])) {
                        return false;
                    }
                }
                visited.delete(currCourse);
                return true;
            }
            
            if (!dfs(courseA)) {
                return false;
            }
        }

        return true;
    }
}
