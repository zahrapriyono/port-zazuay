import { SplashScreen } from '@/components/sections/splashScreen';
import { Navbar } from '@/components/layout/navbar';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Experience } from '@/components/sections/experience';
import { Education } from '@/components/sections/education';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/layout/footer';
import { FloatingDots } from '@/components/ui/floatingDots';

export default function Home() {
  return (
    // isolate + relative: lets FloatingDots sit behind everything on the page
    <div className="relative isolate overflow-x-clip">
      <FloatingDots />
      <SplashScreen />
      <Navbar />
      <main>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
