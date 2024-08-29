import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import Section from "./Section";
import Aside from "./Aside";
import Footer from "./Footer";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./pages/Product";

function App() {
  function printName(param) {
    return <div>{param}</div>;
  }
  return (
    <div>
      <div className="grid">
        <Header />
        <Navbar />
        <Article />
        <Section />
        <Aside />
        <Footer />
        <div className="Andy">Hello{printName("Andy")}</div>
      </div>
    </div>
  );
}

export default App;
/*  <div className="About">
<button className="A">
  <Link to="/about">Go to About Page</Link>
</button>

<button>
  <Link to="/home">Go to Home Page</Link>
</button>
<button>
  <Link to="/product">Go to Product Page</Link>
</button>
</div>*/
