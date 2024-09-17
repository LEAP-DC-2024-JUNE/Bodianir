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
import { Bodlogo } from "../components/Bodlogo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const array = [];
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Skill />
      <Experience />
      <Work />
      <End />
      {/* <Bodlogo data={array} /> */}
    </div>
  );
}
