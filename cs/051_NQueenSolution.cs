using System;
namespace LeetCodeSolutions
{
    public static class NQueenSolution
    {
        private static ISet<int> cols = new HashSet<int>();
        private static ISet<int> mainDiagonals = new HashSet<int>();
        private static ISet<int> secondaryDiagonals = new HashSet<int>();

        // https://leetcode.com/problems/n-queens/
        public static IList<IList<string>> SolveNQueens(int n)
        {
            char[,] board = new char[n,n];

            IList<IList<string>> results = new List<IList<string>>();

            InitializeBoard(board);

            FindSolutions(0, board, results);

            return results;

        }

        private static void InitializeBoard(char[,] board)
        {
            int n = board.GetLength(0);

            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    board[i, j] = '.';
                }
            }
        }

        private static void PrintBoard(char[,] board)
        {
            int n = board.GetLength(0);

            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    Console.Write(board[i, j] + " ");
                }
                Console.WriteLine();
            }
        }

        private static void FindSolutions(int row, char[,] board, IList<IList<string>> results)
        {
            int n = board.GetLength(0);
            if (row == n)
            {
                results.Add(ConvertBoardMatrixToList(board));
                return;
            }

            for (int col = 0; col < n; col++)
            {
                if (cols.Contains(col) || mainDiagonals.Contains(row - col) || secondaryDiagonals.Contains(row + col))
                    continue;

                cols.Add(col);
                mainDiagonals.Add(row - col);
                secondaryDiagonals.Add(row + col);
                board[row, col] = 'Q';

                FindSolutions(row + 1, board, results);

                cols.Remove(col);
                mainDiagonals.Remove(row - col);
                secondaryDiagonals.Remove(row + col);
                board[row, col] = '.';

            }

            return;

        }

        private static IList<string> ConvertBoardMatrixToList(char[,] board)
        {
            int n = board.GetLength(0);
            IList<string> list = new List<string>();

            for (int i = 0; i < n; i++)
            {
                string row = string.Empty;
                for (int j = 0; j < n; j++)
                {
                    row += board[i, j];
                }
                list.Add(row);
            }

            return list;
        }

    }
}

