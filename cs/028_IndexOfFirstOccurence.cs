using System;
namespace LeetCodeSolutions
{
    public static class RemoveDuplicatesFromSortedArraySolution
    {
        public static int RemoveDuplicates(int[] nums)
        {
            int counter = 1;
            for (int i = 1; i < nums.Length; i++)
            {
                if (nums[i] != nums[i - 1]) {
                    nums[counter++] = nums[i];
                }
            }
            return counter;
        }
    }
}

