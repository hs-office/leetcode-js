/*
 Problem:
 Given an array of integers nums and an integer target,
 return indices of the two numbers such that they add up to target.
 You may assume that each input would have exactly one solution, and
 you may not use the same element twice.
 Example 1:
 Input: nums = [2,7,11,15], target = 9
 Output: [0,1]
 Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

 Example 2:
 Input: nums = [3,2,4], target = 6
 Output: [1,2]

 */
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
