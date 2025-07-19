function twoSum(nums, target) {
    let i = 0;

    while (i < nums.length) {
        let j = i + 1;

        while (j < nums.length) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
            j++;
        }
        i++;
    }
}

let result = twoSum([3, 2, 4], 6);
console.log(result); // [1, 2]
