import { AuthLayoutContent } from "@/components/auth/AuthLayoutContent";
import { SignupForm } from "@/components/auth/SignupForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up | SkoolBrain',
  description: 'Create your SkoolBrain account.',
};

export default function SignupPage() {
  return (
    <AuthLayoutContent 
      title="Join SkoolBrain!"
      description="Create an account to start your learning journey."
    >
      <SignupForm />
    </AuthLayoutContent>
  );
}
