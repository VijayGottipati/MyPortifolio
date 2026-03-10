import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Tools from './components/Tools';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Volunteer from './components/Volunteer';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* 3D Computer Science Background */}
      <Background3D />

      <Navbar />

      <main>
        <section id="introduction">
          <Hero />
        </section>

        <section id="education" className="section-padding">
          <div className="container-max section-bg p-8">
            <Education />
          </div>
        </section>

        <section id="skills" className="section-padding">
          <div className="container-max section-bg p-8">
            <Tools />
          </div>
        </section>

        <section id="experience" className="section-padding">
          <div className="container-max section-bg p-8">
            <Experience />
          </div>
        </section>

        <section id="projects" className="section-padding">
          <div className="container-max section-bg p-8">
            <Projects />
          </div>
        </section>

        <section id="hackathons" className="section-padding">
          <div className="container-max section-bg p-8">
            <Hackathons />
          </div>
        </section>

        <section id="volunteer" className="section-padding">
          <div className="container-max section-bg p-8">
            <Volunteer />
          </div>
        </section>

        <section id="certifications" className="section-padding">
          <div className="container-max section-bg p-8">
            <Certifications />
          </div>
        </section>

        <section id="contact" className="section-padding">
          <div className="container-max section-bg p-8">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}

export default App; 