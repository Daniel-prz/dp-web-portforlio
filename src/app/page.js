import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <>
      <main className=" flex flex-col justify-between relative h-full min-h-[100vh] gap-8">
        <div>
          <Header />
          <AboutMe />
          <Projects />
        </div>
        <Footer />
      </main>
    </>
  );
}
