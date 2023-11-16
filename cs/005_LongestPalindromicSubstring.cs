using System;
namespace LeetCodeSolutions
{
    public static class LongestPalindromicSubstringSolution
    {
        public static string LongestPalindrome(string s)
        {
            int longestLength = 0;
            string longestPalindrome = string.Empty;
            for (int i = 0; i < s.Length; i++)
            {
                // check odd lenghts
                int currentLength = 1;
                int l = i - 1;
                int r = i + 1;

                while (l >= 0 && r < s.Length)
                {
                    if (s[l] != s[r])
                    {
                        break;
                    }
                    currentLength += 2;
                    l--;
                    r++;
                }
                if (currentLength > longestLength)
                {
                    longestLength = currentLength;
                    longestPalindrome = s.Substring(l + 1, r - l - 1);
                }

                // check even lengths
                currentLength = 0;
                l = i;
                r = i + 1;
                while (l >= 0 && r < s.Length)
                {
                    if (s[l] != s[r])
                    {
                        break;
                    }
                    currentLength += 2;
                    l--;
                    r++;
                }
                if (currentLength > longestLength)
                {
                    longestLength = currentLength;
                    longestPalindrome = s.Substring(l + 1, r - l - 1);
                }

            }
            Console.WriteLine("Result: " + longestPalindrome);
            return longestPalindrome;
        }
    }
}

