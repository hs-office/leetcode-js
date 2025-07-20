/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let total = 0, a = s.length-1, b = 0, c = 0
    while(b <= a){
        let current = roman[s[b]]
        let next = roman[s[b + 1]]

        if (next > current) {
            c += (next - current)
            b += 2 // skip next because we already used it
        } else {
            c += current
            b += 1
        }
    }
    console.log(c)
}

romanToInt('LVIII')         // 58
romanToInt('MCMXCIV')