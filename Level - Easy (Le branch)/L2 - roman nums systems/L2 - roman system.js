// lookup object
const roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}
// test lookup object
console.log(roman['D'])         // 500
console.log(roman['X'])         // 10

let s = 'XII', a = s.length - 1, b = 0, c = 0
while (b <= a) {
    let current = roman[s[b]]
    let next = roman[s[b + 1]]

    if (next > current) {
        c += (next - current);
        b += 2 // skip next because we already used it
    } else {
        c += current
        b += 1
    }
}
console.log(c)

