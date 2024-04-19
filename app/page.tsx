import TransitionPage from "@/components/transition-page";
import CoverParticles from "../components/cover-particles";
import Introduccion from "@/components/introduccion";


export default function Home() {
  return (
   <main>
    <TransitionPage/>
    <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
      <CoverParticles/>
      <Introduccion/>
    </div>
   </main>
  );
}
