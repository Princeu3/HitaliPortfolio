import Navbar from "./components/Navbar";
import Beams from "./components/Beams";
import { ThemeProvider } from "./components/theme-provider";

export default function Home() {
  return (
    <main>
      <ThemeProvider>
        {/* Section avec Beams en fond - 100vh */}
        <div className="relative h-screen">
          {/* Beams en arrière-plan */}
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
          <div className="flex h-full flex-col items-center justify-center p-24">
            <h1 className="text-4xl font-bold text-center">Work In Progress</h1>
          </div>
        </div>
      </ThemeProvider>
    </main>
  );
}