/**
 * Represents a student's score in the leaderboard.
 */
export interface LeaderboardEntry {
  /**
   * The student's ID.
   */
  studentId: string;
  /**
   * The student's name.
   */
  studentName: string;
  /**
   * The student's XP.
   */
  xp: number;
  /**
   * The student's rank.
   */
  rank: number;
  /**
   * The subject of the leaderboard entry.
   */
  subject: string;
  /**
   * The grade of the student.
   */
  grade: string;
  /**
   * The region of the student.
   */
  region: string;
}

/**
 * Asynchronously retrieves the leaderboard data.
 *
 * @param subject The subject to filter the leaderboard by.
 * @param grade The grade to filter the leaderboard by.
 * @param region The region to filter the leaderboard by.
 * @returns A promise that resolves to an array of LeaderboardEntry objects.
 */
export async function getLeaderboard(
  subject?: string,
  grade?: string,
  region?: string
): Promise<LeaderboardEntry[]> {
  // TODO: Implement this by calling an API.

  return [
    {
      studentId: '1',
      studentName: 'John Doe',
      xp: 1000,
      rank: 1,
      subject: 'Math',
      grade: '10',
      region: 'USA',
    },
    {
      studentId: '2',
      studentName: 'Jane Smith',
      xp: 900,
      rank: 2,
      subject: 'Math',
      grade: '10',
      region: 'USA',
    },
  ];
}
