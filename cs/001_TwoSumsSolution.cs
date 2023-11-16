using System;
namespace LeetCodeSolutions
{
    public static class TwoSumSolution
    {
        public static int[] TwoSum(int[] nums, int target)
        {
            var pairs = new Dictionary<int, int>();
            for (int i = 0; i < nums.Length; i++)
            {
                if (pairs.ContainsKey(target - nums[i])) {
                    return new int[2] { pairs[target - nums[i]], i };
                }
                pairs.TryAdd(nums[i], i);
            }
            return new int[2] { -1, -1 };
        }

        private static void PrintArray(int[] nums)
        {
            for (int i = 0; i < nums.Length; i++)
            {
                Console.Write(nums[i] + " ");

            }
            Console.WriteLine();

        }


    }
}

