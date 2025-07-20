const roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

// system
let rn = s =>{
    let a = s.length - 1, b = 0, c = 0
    while (b <= a) {

        let now = roman[s[b]], later = roman[s[b + 1]]
        if (now > later) {
            c += (now-later)
            b+=2
        }else{
            c += now
            b+=1
        }
    }
    //return c
    console.log(c)
}

rn('IX')
rn('XI')
rn('LVIII')
rn('MCMXCIV')