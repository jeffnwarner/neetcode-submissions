class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let arrA = nums1;
        let arrB = nums2;

        if (nums2.length < nums1.length) {
            arrA = nums2;
            arrB = nums1;
        }

        const totalLength = arrA.length + arrB.length;
        const halfLength = Math.floor((totalLength + 1) / 2);


        let start = 0;
        let end = arrA.length;
        while (start <= end) {
            let middleA = Math.floor((start + end) / 2);
            let middleB = halfLength - middleA;

            console.log({middleA, middleB});

            const leftA = arrA[middleA - 1] ?? -Infinity;
            const rightA = arrA[middleA] ?? Infinity;
            const leftB = arrB[middleB - 1] ?? -Infinity;
            const rightB = arrB[middleB] ?? Infinity;

            if (leftA <= rightB && leftB <= rightA) {
                if (totalLength % 2 === 1) {
                    console.log({leftA, leftB});
                    return Math.max(leftA, leftB);
                } else {
                    console.log({leftA, leftB, rightA, rightB});
                    return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2
                }
            } else {
            console.log('loop?', console.log({leftA, leftB, rightA, rightB}));
                if (leftA > rightB) {
                    end = middleA - 1;
                } else if (leftB > rightA) {
                    start = middleA + 1;
                    console.log({start, end});
                }
            }
        }

        // let A = nums1;
        // let B = nums2;
        // const total = A.length + B.length;
        // const half = Math.floor((total + 1) / 2);

        // if (B.length < A.length) {
        //     [A, B] = [B, A];
        // }

        // let l = 0;
        // let r = A.length;
        // while (l <= r) {
        //     const i = Math.floor((l + r) / 2);
        //     const j = half - i;

        //     const Aleft = i > 0 ? A[i - 1] : Number.MIN_SAFE_INTEGER;
        //     const Aright = i < A.length ? A[i] : Number.MAX_SAFE_INTEGER;
        //     const Bleft = j > 0 ? B[j - 1] : Number.MIN_SAFE_INTEGER;
        //     const Bright = j < B.length ? B[j] : Number.MAX_SAFE_INTEGER;

        //     if (Aleft <= Bright && Bleft <= Aright) {
        //         if (total % 2 !== 0) {
        //             console.log({Aleft, Bleft});
        //             return Math.max(Aleft, Bleft);
        //         }
        //         console.log({Aleft, Bleft, Aright, Bright});
        //         return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
        //     } else if (Aleft > Bright) {
        //         r = i - 1;
        //     } else {
        //         l = i + 1;
        //     }
        // }
        // return -1;
    }
}
