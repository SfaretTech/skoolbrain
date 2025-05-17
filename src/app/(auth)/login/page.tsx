import { AuthLayoutContent } from "@/components/auth/AuthLayoutContent";
import { LoginForm } from "@/components/auth/LoginForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | SkoolBrain',
  description: 'Log in to your SkoolBrain account.',
};

export default function LoginPage() {
  return (
    <AuthLayoutContent 
      title="Welcome Back!"
      description="Sign in to continue your learning adventure."
    >
      <LoginForm />
    </AuthLayoutContent>
  );
}
