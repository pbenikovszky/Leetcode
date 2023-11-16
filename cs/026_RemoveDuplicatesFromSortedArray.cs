using System;
namespace LeetCodeSolutions
{
    public static class IndexOfFirstOccurenceSolution
    {
        public static int StrStr(string haystack, string needle)
        {

            if (haystack.Length < needle.Length)
            {
                return -1;
            }

            int startIndex = -1;
            int needleIndex = 0;
            int i = 0;
            while (i < haystack.Length)
            {
                Console.WriteLine(i);
                if (haystack[i] == needle[needleIndex])
                {
                    if (needleIndex == 0)
                    {
                        startIndex = i;
                    }
                    Console.WriteLine("Found " + haystack.Substring(startIndex, needleIndex+1));
                    needleIndex++;
                    i++;
                    if (needleIndex == needle.Length)
                    {
                        return startIndex;
                    }
                }
                else
                {
                    needleIndex = 0;
                    i = startIndex != -1 ? startIndex + 1 : i + 1;
                    startIndex = -1;
                }
            }
            return -1;
        }
    }
}

