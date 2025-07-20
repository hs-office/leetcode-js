const points = {
    'A': 1,
    'B': 2,
    'C': 3,
    'D': 4
}
// if B must skip!
let a = 'ABCD', b = a.length-1, c = 0, d = 0
while (c <= b) {
    if (a[c] !== 'B'){
        d += points[a[c]]
        c++
    }else{
        c++
    }

}
console.log(d)