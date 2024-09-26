import { Blogcardcontainer } from "@/components/Blogcardcontainer";
import { Header } from "@/components/Header";
import React, { useState } from "react";
import { Footer } from "@/components";

export default function Home() {
  const [inputvalue, setinputvalue] = useState("");
  return (
    <div className="bg-white text-black flex flex-col">
      <Header setinputvalue={setinputvalue} />
      <Blogcardcontainer inputvalue={inputvalue} />
      <Footer />
    </div>
  );
}
