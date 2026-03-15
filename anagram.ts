//hash map
function isAnagram(s: string, t: string): boolean {

  if (s.length !== t.length) return false

  const map = new Map<string, number>()

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  for (let char of t) {

    if (!map.has(char)) return false

    map.set(char, map.get(char)! - 1)

    if (map.get(char)! < 0) return false
  }

  return true
}
console.log(isAnagram("anagram", "nagaram")) // true
console.log(isAnagram("rat", "car")) // false
//complexity O(n) time and O(n) space

//sorting solution O(n log n) time and O(1) space
function isAnagramSorting(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const sortedS = s.split('').sort().join('')
  const sortedT = t.split('').sort().join('')

  return sortedS === sortedT
}
console.log(isAnagramSorting("anagram", "nagaram")) // true
console.log(isAnagramSorting("rat", "car")) // false
