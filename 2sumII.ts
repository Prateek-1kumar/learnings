function twoSums(numbers: number[], target: number): number[] {

  let left = 0
  let right = numbers.length - 1

  while (left < right) {

    const sum = numbers[left] + numbers[right]

    if (sum === target) {
      return [left + 1, right + 1] // 1-indexed
    }

    if (sum < target) {
      left++
    } else {
      right--
    }
  }

  return []
}

console.log(twoSums([2, 7, 11, 15], 9)) // [1, 2]
console.log(twoSums([2, 3, 4], 6)) // [1, 3]