
"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Brain } from "lucide-react";

import { Button } from "@/components/ui/button";
import Logo from "@/components/common/Logo";

export function SplashScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/signup"); // Corrected path
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-4">
      <div className="absolute top-8 left-8 z-10">
        <Logo />
      </div>

      <div className="flex flex-col items-center text-center">
        <Brain 
          className="mb-8 h-32 w-32 text-white/90 drop-shadow-lg sm:h-40 sm:w-40" 
          data-ai-hint="brain icon" 
        />
        <h1 className="mb-12 animate-float text-5xl font-extrabold text-white drop-shadow-md sm:text-7xl">
          SkoolBrain
        </h1>
      </div>

      <Button
        onClick={handleGetStarted}
        size="lg"
        className="bg-white text-purple-600 hover:bg-white/90 shadow-xl transition-all duration-300 ease-in-out hover:scale-105 focus:ring-4 focus:ring-white/50"
        aria-label="Get started with SkoolBrain"
      >
        Get Started
      </Button>
    </div>
  );
}

