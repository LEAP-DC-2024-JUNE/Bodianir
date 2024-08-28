import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import Section from "./Section";
import Aside from "./Aside";
import Footer from "./Footer";

function App() {
  function printName(param) {
    return <div>{param}</div>;
  }
  return (
    <div>
      <div class="grid">
        <Header />
        <Nav />
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
