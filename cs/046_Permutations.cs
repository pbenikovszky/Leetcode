using System;
namespace LeetCodeSolutions
{
    public static class Permutations
    {
        

        // https://leetcode.com/problems/permutations
        public static IList<IList<int>> Permute(int[] nums)
        {
            IList<IList<int>> results = new List<IList<int>>();

            IList<int> permutation = new List<int>();

            dfs(nums, permutation, results);

            return results;
        }

        public static void dfs(int[] nums, IList<int> permutation, IList<IList<int>> results)
        {
            if (permutation.Count == nums.Length)
            {
                results.Add(new List<int>(permutation));
                return;
            }

            for (int i = 0; i < nums.Length; i++)
            {
                if (permutation.Contains(nums[i]))
                    continue;

                permutation.Add(nums[i]);
                dfs(nums, permutation, results);
                permutation.RemoveAt(permutation.Count - 1);
            }
        }

    }
}

