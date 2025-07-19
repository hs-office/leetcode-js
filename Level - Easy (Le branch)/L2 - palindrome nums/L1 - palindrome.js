/*
Given an integer x, return true if x is a palindrome, and false otherwise.
Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left,
it becomes 121-. Therefore, it is not a palindrome.
 */


let pn = n => {
    let a = n.toString(), b = a.length - 1, c = ''
    while( b >= 0){
        c += a[b]
        b--
    }

    // check for palindrome
    if(c === a){
        return true
    }else{
        return false
    }
}

console.log(pn(121))
console.log(pn(-121))

