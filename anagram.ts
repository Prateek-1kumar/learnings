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


//palidrome solution O(n) time and O(1) space
function isPalindrome(s: string): boolean {

  let left = 0
  let right = s.length - 1

  while (left < right) {

    // skip non-alphanumeric from left
    while (left < right && !isAlphaNumeric(s[left])) {
      left++
    }

    // skip non-alphanumeric from right
    while (left < right && !isAlphaNumeric(s[right])) {
      right--
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false
    }

    left++
    right--
  }

  return true
}

function isAlphaNumeric(char: string): boolean {
  const code = char.charCodeAt(0)

  return (
    (code >= 48 && code <= 57) ||   // 0-9
    (code >= 65 && code <= 90) ||   // A-Z
    (code >= 97 && code <= 122)     // a-z
  )
}
console.log(isPalindrome("A man, a plan, a canal: Panama")) // true
console.log(isPalindrome("race a car")) // false