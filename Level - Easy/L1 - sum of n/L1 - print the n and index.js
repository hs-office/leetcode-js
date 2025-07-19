let n = [3, 2, 4], i = 0, j = n.length, k = 0, t = 6
console.log(`Array\t: ${n}`)
console.log(`Target\t: ${t}`)
while( i !== j){
    k = i + 1
    while(k !== j){
        // console.log(`n :${n[i]} | ${n[k]}`)
        if (n[i] + n[k] === t){
            console.log(`index\t: ${i} , ${k}`)
            console.log(`n\t: ${n[i]} , ${n[k]} `)
        }
        k++
    }
    i++
}
