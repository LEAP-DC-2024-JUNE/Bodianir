import { Blogcardcontainer } from "@/components/Blogcardcontainer";
import { Header } from "@/components/Header";
import { Footer } from "../components/Footer";
import React, { useEffect, useState } from "react";
import { Carouselcard, Trendingcard } from "@/components";
import Leftarrow from "../icons/Leftarrow";
import Rightarrow from "@/icons/RIghtarrow";

export default function Home() {
  const [inputvalue, setinputvalue] = useState("");
  const [articles, setArticle] = useState([]);
  const [index, setIndex] = useState(0);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=6&state=fresh`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
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
