/*
 expected output:
 n :	[	2	7	11	15	]
 i :	[	0	1	 2	 3	]
 */

let n = [2, 7, 11, 15]
let a = n.length, b = 0

// setup
let on = 'n :\t['
let oi = 'i :\t['

while (b !== a) {
    on += `\t${n[b]}`
    oi += `\t${b}`
    b++
}

on += '\t]'
oi += '\t]'

console.log(on)
console.log(oi)