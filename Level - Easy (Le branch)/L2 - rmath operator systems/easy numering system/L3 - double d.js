const points = {
    'A': 1,
    'B': 2,
    'C': 3,
    'D': 4
}
// if D must double
let a = 'ACD', b = a.length, c = 0, d = 0
while (c < b) {

    if(a[c] === 'D'){
        // points[a[c]] = Number(points[a[c]]) * 2 this 1 will change the D value 4ver
        d += points[a[c]]*2
        c++
    }else{
        d += points[a[c]]
        c++
    }
}console.log(d)