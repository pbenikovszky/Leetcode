using System;
namespace LeetCodeSolutions
{
    public static class FirstMissingPositiveSolution
    {
        // https://leetcode.com/problems/first-missing-positive/
        public static int FirstMissingPositive(int[] nums)
        {

            for (int i = 0; i < nums.Length; i++)
            {
                if (nums[i] < 0) nums[i] = 0;

            }

            for (int i = 0; i < nums.Length; i++)
            {
                if (nums[i] != 0 && Math.Abs(nums[i]) <= nums.Length)
                {
                    if (nums[Math.Abs(nums[i]) - 1] > 0)
                    {
                        nums[Math.Abs(nums[i]) - 1] = -1 * nums[Math.Abs(nums[i]) - 1];
                    }

                    if (nums[Math.Abs(nums[i]) - 1] == 0)
                    {
                        nums[Math.Abs(nums[i]) - 1] = -1 * nums.Length - 1;
                    }
                }
            }

            for (int i = 0; i < nums.Length; i++)
            {
                if (nums[i] >= 0) return i + 1;
            }

            return nums.Length + 1;
        }

    }
}

