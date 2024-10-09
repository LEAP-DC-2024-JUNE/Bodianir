import { Blogcardcontainer } from "@/components/Blogcardcontainer";
import { Header } from "@/components/Header";
import { Footer } from "../components/Footer";
import React, { useEffect, useState } from "react";
import { Carouselcard, Trendingcard } from "@/components";
import Leftarrow from "../icons/Leftarrow";
import Rightarrow from "@/icons/RIghtarrow";
import { Mycontext } from "@/Utilities/context";
import { useContext } from "react";

export default function Home() {
  const [inputvalue, setinputvalue] = useState("");
  const { articles, index, setIndex } = useContext(Mycontext);
  const HandlePlus = () => {
    setIndex((prevState) =>
      prevState == articles.length - 1 ? 0 : prevState + 1
    );
  };
  console.log(articles);
  console.log(index);
  const HandleMin = () => {
    setIndex((prevState) =>
      prevState == 0 ? articles.length - 1 : prevState - 1
    );
  };
  return (
    <div className="bg-white text-black flex flex-col">
      <Header setinputvalue={setinputvalue} className="mt-48" />
      <Carouselcard article={articles[index]} />
      <div className="flex justify-end pr-44">
        <button onClick={() => HandlePlus()}>
          <Rightarrow />
        </button>
        <button onClick={() => HandleMin()}>
          <Leftarrow />
        </button>
      </div>
      <Trendingcard />
      <Blogcardcontainer inputvalue={inputvalue} />
      <Footer />
    </div>
  );
}
