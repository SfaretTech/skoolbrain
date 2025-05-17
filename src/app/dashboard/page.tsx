
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpenCheck, Users, BarChart3, Brain, Trophy, Star, ShieldCheck, Swords, Target, Zap, Calculator, FlaskConical } from "lucide-react";
import type { Metadata } from 'next';
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: 'Dashboard | SkoolBrain',
  description: 'Your SkoolBrain gamified learning dashboard.',
};

// Placeholder data simulating a "SkoolBrain Junior" student
const userData = {
  name: "Alex Junior",
  level: "SkoolBrain Junior", // From Table 1 (example)
  xp: 1250,
  rankTitle: "Contender", // From Table 3 (example)
  badgesEarned: 3,
  dailyStreak: 5,
  featuredChallenge: {
    title: "Algebra Speed Round",
    subject: "Mathematics",
    reward: "50 XP",
    icon: <Calculator className="h-5 w-5 mr-1" />
  },
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto space-y-8 py-8">
      {/* Header Section */}
      <section className="text-center md:text-left">
        <h1 className="mb-2 text-4xl font-bold text-primary">
          Welcome back, {userData.name}!
        </h1>
        <p className="text-xl text-muted-foreground">
          You are a <span className="font-semibold text-secondary">{userData.level}</span>. Keep conquering those quizzes!
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <StatCard title="Experience Points (XP)" value={userData.xp.toLocaleString()} icon={<Star className="h-8 w-8" />} color="text-gold" />
        <StatCard title="Current Rank" value={userData.rankTitle} icon={<Trophy className="h-8 w-8" />} color="text-primary" />
        <StatCard title="Badges Earned" value={userData.badgesEarned.toString()} icon={<ShieldCheck className="h-8 w-8" />} color="text-accent" />
      </section>

      {/* Core Actions Section */}
      <section>
        <h2 className="mb-6 text-3xl font-semibold text-primary">Your Learning Hub</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ActionCard
            title="Quiz Arena"
            description="Test your skills, challenge friends, or join tournaments."
            icon={<Swords className="h-10 w-10 text-primary" />}
            buttonText="Enter Arena"
            link="/dashboard/quiz-arena"
            badgeText="New Modes!"
          />
          <ActionCard
            title="Leaderboards"
            description="See your rank: Self-Paced, Competition, Battle of K-Kings."
            icon={<BarChart3 className="h-10 w-10 text-primary" />}
            buttonText="View Leaderboards"
            link="/dashboard/leaderboard"
          />
          <ActionCard
            title="My Subjects"
            description="Explore challenges in English, Math, Science, and more for your level."
            icon={<BookOpenCheck className="h-10 w-10 text-primary" />}
            buttonText="Browse Subjects"
            link="/dashboard/subjects" // Placeholder
          />
          <ActionCard
            title="Achievements"
            description={`You've earned ${userData.badgesEarned} badges. View your glorious collection!`}
            icon={<ShieldCheck className="h-10 w-10 text-primary" />}
            buttonText="My Badges"
            link="/dashboard/achievements" // Placeholder
          />
          <ActionCard
            title="Study Plan"
            description="Get AI-powered recommendations to boost your learning path."
            icon={<Brain className="h-10 w-10 text-primary" />}
            buttonText="View My Plan"
            link="/dashboard/study-plan"
          />
          <ActionCard
            title="Profile"
            description="Manage your account, avatar, and learning preferences."
            icon={<Users className="h-10 w-10 text-primary" />}
            buttonText="My Profile"
            link="/dashboard/profile"
          />
        </div>
      </section>

      {/* Engagement Section */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="shadow-lg transform transition-all hover:scale-105">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-primary">
              <Target className="h-6 w-6" />
              Featured Challenge
            </CardTitle>
            <CardDescription>A special challenge to test your mettle!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-2">
                {userData.featuredChallenge.icon}
                <h3 className="text-lg font-semibold">{userData.featuredChallenge.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">Subject: {userData.featuredChallenge.subject}</p>
            <p className="mt-2 font-semibold text-gold">Reward: {userData.featuredChallenge.reward}</p>
            <Button className="mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90">
              Attempt Challenge
            </Button>
          </CardContent>
        </Card>
        <Card className="shadow-lg transform transition-all hover:scale-105">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-primary">
              <Zap className="h-6 w-6" />
              Daily Streak
            </CardTitle>
            <CardDescription>Keep your learning streak alive for bonus rewards!</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-6xl font-bold text-gold">{userData.dailyStreak}</p>
            <p className="text-lg text-muted-foreground">Days Streak</p>
            <p className="mt-2 text-sm">Complete a quiz today to maintain your streak!</p>
            <div className="mt-4 h-2 w-full rounded-full bg-muted">
                <div className="h-2 rounded-full bg-gold" style={{width: `${(userData.dailyStreak % 7 / 7) * 100}%`}}></div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Next reward at 7 days!</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

// Helper component for stats
interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color?: string;
}

function StatCard({ title, value, icon, color = "text-primary" }: StatCardProps) {
  return (
    <Card className="shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
      <CardContent className="flex items-center gap-4 p-6">
        <div className={`rounded-full bg-opacity-10 p-3 ${color.startsWith('text-gold') ? 'bg-gold' : 'bg-primary'}`}>
          <div className={color}>
            {icon}
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className={`text-3xl font-bold ${color}`}>{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}

// Re-using or adapting DashboardActionCard
interface ActionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  link: string;
  badgeText?: string;
}

function ActionCard({ title, description, icon, buttonText, link, badgeText }: ActionCardProps) {
  return (
    <Card className="flex flex-col justify-between shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="items-center text-center">
        {icon}
        <CardTitle className="mt-4 text-xl font-semibold text-primary">{title}</CardTitle>
        {badgeText && <Badge variant="default" className="mt-1 bg-gold text-primary-foreground hover:bg-gold/90">{badgeText}</Badge>}
      </CardHeader>
      <CardContent className="flex-grow text-center">
        <p className="text-sm text-muted-foreground min-h-[40px]">{description}</p>
      </CardContent>
      <div className="p-6 pt-0">
        <Link href={link} passHref>
          <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            {buttonText}
          </Button>
        </Link>
      </div>
    </Card>
  );
}
