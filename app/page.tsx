"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";

// Lazy load Beams component (Three.js est lourd)
// Chargement différé pour améliorer TBT
const Beams = dynamic(() => import("./components/Beams"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900 animate-pulse" />,
});

export default function Home() {
  return (
    <main>
      <ThemeProvider>
        {/* Section avec Beams en fond - 100vh */}
        <div className="relative h-screen">
          {/* Beams en arrière-plan */}
          <Suspense fallback={<div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900" />}></Suspense>
          <div className="absolute inset-0 w-full h-full -z-10">
            <Beams
              beamWidth={3}
              beamHeight={30}
              beamNumber={20}
              speed={2}
              noiseIntensity={2}
              scale={0.2}
              rotation={30}
            />
          </div>
          
          <Navbar />
          
          {/* Contenu de la première section */}
          <div className="flex h-full flex-col items-center justify-center p-24" role="main" aria-label="Contenu principal">
            <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
              Work In Progress
            </h1>
          </div>
        </div>
      </ThemeProvider>
    </main>
  );
}