let n = [1, 5, 3, 3], t = 6
let a = n.length, b = 0, c = 0
console.log(`info`)
console.log(`nums\t: ${n}`)
console.log(`target\t: ${t}\n`)

// print all n
console.log('step 1: print all nums')
while (b !== a) {
    console.log(`n : ${n[b]}`)
    b++
}
console.log('--------------------')
b = 0 // reset b to 0

// print n and its index
console.log('step 2: print all nums and their indexes')
while(b !== a){
    console.log(`n : ${n[b]}\t| i : ${b}`)
    b++
}
console.log('--------------------')
b = 0 // reset b to 0

// print the pair n with other n
console.log('step 3: pair')
while(b !== a){
    c = b + 1
    while(c !== a){
        console.log(`n : ${n[b]} | n : ${n[c]}`)
        c++
    }
    b++
}
console.log('--------------------')
b = 0 // reset b to 0

// apply conditions
console.log('step 4: apply condition')
while(b !== a){
    c = b + 1
    while(c !== a){
        //console.log(`n : ${n[b]} | n : ${n[c]}`)
        let sum = 0
        sum = n[b] + n[c]
        if (sum === t){
            console.log(`n\t: \t${n}\t| t : ${t}`)
            console.log(`index\t: \t${b} \t| n : ${c}`)
            console.log(`nums\t: \t${n[b]} \t| n : ${n[c]}\n`)
        }
        c++
    }
    b++
}
