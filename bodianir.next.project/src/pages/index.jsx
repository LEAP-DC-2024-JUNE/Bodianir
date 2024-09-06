import { Inter } from "next/font/google";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { GG, Mx } from "../components/09.03";
import { About } from "../components/About";
import { Skill } from "../components/Skill";
import { Experience } from "../components/Experience";
import { Work } from "../components/Work";
import { Mentor } from "../components/Workcard";
import { Itoim } from "../components/Itoim";
import { End } from "../components/End";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Skill />
      <Experience />
      <Work />
      <End />
    </div>
  );
}
