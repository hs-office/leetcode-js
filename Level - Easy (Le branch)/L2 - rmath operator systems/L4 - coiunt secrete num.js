/*
The Rules:
Go through the string one by one, and calculate the total score:
If the next letter is higher in value than the current one,
➤ Subtract the current from the total.
Otherwise,
➤ Add the current to the total.
 */
const points = {
    'A': 1,
    'B': 2,
    'C': 3,
    'D': 4
}

let p = 'ABD', a = p.length-1, b = 0, c= 0
while (b <= a) {

    let now = points[p[b]], later = points[p[b+1]]
    if(now < later) {
        c += (later - now)
        b+=2
    }else{
        c += now
        b+=1
    }
}console.log(c)