//remove duplicates from sorted array

function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0

  let slow = 0

  for (let fast = 1; fast < nums.length; fast++) {

    // found a new unique number
    if (nums[fast] !== nums[slow]) {
      slow++
      nums[slow] = nums[fast]
    }

  }

  return slow + 1
}

console.log(removeDuplicates([1, 1, 2])) // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])) // 5
//complexity O(n) time and O(1) space

//maximumm water container

function maxArea(height: number[]): number {

  let left = 0
  let right = height.length - 1
  let maxArea = 0

  while (left < right) {

    const width = right - left
    const h = Math.min(height[left], height[right])
    const area = width * h

    maxArea = Math.max(maxArea, area)

    // move the smaller wall
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }

  }

  return maxArea
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) // 49
console.log(maxArea([1, 1])) // 1
//complexity O(n) time and O(1) space   


