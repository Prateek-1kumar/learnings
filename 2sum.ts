function twoSumBrute(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return []
}

//hash maps solution fastest O(n) time complexity and O(n) space complexity
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>() // value -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]

        // check if complement already exists
        if (map.has(complement)) {
            return [map.get(complement)!, i]
        }

        // store current number with its index
        map.set(nums[i], i)
    }

    return []
}

console.log(twoSum([2, 7, 11, 15], 26)) // [2, 3]
console.log(twoSumBrute([3, 2, 4], 6)) // [1, 2]
