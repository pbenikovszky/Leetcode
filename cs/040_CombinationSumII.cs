using System;
namespace LeetCodeSolutions
{
    public static class CombinationSumII
    {

        static List<int> partialRes = new List<int>();
        static List<int> sortedCandidates = new List<int>();
        static IList<IList<int>> results = new List<IList<int>>();

        public static IList<IList<int>> CombinationSum2(int[] candidates, int target)
        {
            sortedCandidates = (candidates.OrderBy(t => t)).ToList();

            PrintList(candidates);

            //FindSolutions(candidates, target, 0, current, results);

            return results;
        }

        private static void BackTrack(int currentNumber, int target)
        {

        }

        private static void FindSolutions(int[] nums, int target, int currentImdex, IList<int> current, IList<IList<int>> results)
        {


            int sum = current.Sum();

            if (sum > target)
            {
                return;
            }

            if (sum == target)
            {
                results.Add(current);
                return;
            }

            if (currentImdex >= nums.Length)
            {
                return;
            }


            int currentNumber = nums[currentImdex];

            // Add current number
            IList<int> newList = new List<int>(current);
            newList.Add(currentNumber);
            FindSolutions(nums, target, currentImdex + 1, newList, results);

            // Don't add current number
            currentImdex++;
            while (currentImdex < nums.Length && nums[currentImdex] == currentNumber)
            {
                currentImdex++;
            }

            FindSolutions(nums, target, currentImdex, current, results);

        }


        public static void PrintList(int[] numbers)
        {
            foreach (int number in numbers)
            {
                Console.Write(number + " ");
            }
            Console.WriteLine();
        }
    }
}

