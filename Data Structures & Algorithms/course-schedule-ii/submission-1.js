class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const map = new Map();
        for (let i = 0; i < prerequisites.length; i++) {
            const [courseA, courseB] = prerequisites[i];
            const neighbors = map.get(courseA) ?? [];
            neighbors.push(courseB);
            map.set(courseA, neighbors);
        }

        const visited = new Set();
        const result = [];
        function dfs(course) {
            const prereqs = map.get(course) ?? [];
            if (visited.has(course)) {
                return prereqs.length === 0;
            }
            visited.add(course);

            for (let i = 0; i < prereqs.length; i++) {
                if (!dfs(prereqs[i])) {
                    return false;
                }
            }

            map.set(course, []);
            result.push(course);
            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) {
                return [];
            }
        }

        return result;
    }
}
