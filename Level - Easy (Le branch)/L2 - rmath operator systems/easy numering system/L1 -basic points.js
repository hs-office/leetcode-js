/*
 rules:
 Go through each letter
 Add its point to total
 example:
 If input is 'ABC' →
 A = 1, B = 2, C = 3
 Total = 1 + 2 + 3 = 6
 */
const points = {
    'A': 1,
    'B': 2,
    'C': 3,
    'D': 4
}

let a = 'ABC', b = a.length-1, c = 0, d = 0
while (c <= b) {
    d += points[a[c]]
    c++
}
console.log(d)