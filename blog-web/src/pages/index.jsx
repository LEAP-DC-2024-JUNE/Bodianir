import { Blogcardcontainer } from "@/components/Blogcardcontainer";
import { Header } from "@/components/Header";
import { Footer } from "../components/Footer";
import React, { useState } from "react";
import { Carouselcard, Trendingcart } from "@/components";

export default function Home() {
  const [inputvalue, setinputvalue] = useState("");
  return (
    <div className="bg-white text-black flex flex-col">
      <Header setinputvalue={setinputvalue} />
      <Carouselcard />
      <Trendingcart />
      <Blogcardcontainer inputvalue={inputvalue} />
      <Footer />
    </div>
  );
}
