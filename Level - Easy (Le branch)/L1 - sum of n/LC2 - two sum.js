let twoSum = function(nums, target) {
    let a = nums.length, b = 0, c = 0
    while(b !== a){
        c = b + 1
        while(c !== a){
            let sum = 0
            sum = nums[b] + nums[c]
            if(sum === target){
                return [b, c]
            }
            c++
        }
        b++

    }return []
}
let nums = [3,2,4], target = 6
console.log(twoSum(nums, target))