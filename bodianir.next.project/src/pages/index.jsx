import { Inter } from "next/font/google";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { About } from "../components/About";
import { Skill } from "../components/Skill";
import { Experience } from "../components/Experiences";
import { Work } from "../components/Work";

import { End } from "../components/End";

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
    </div>
  );
}
