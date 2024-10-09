import "@/styles/globals.css";
import { Mycontext } from "../Utilities/context";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [count, setCount] = useState(0);

  const [cards, setCards] = useState([]);
  const [load, setLoad] = useState(9);
  const [filter, setFilter] = useState("");

  const fetchArticles = () => {
    fetch(`https://dev.to/api/articles?per_page=${load}&tag=${filter}`)
      .then((first) => first.json())
      .then((data) => setCards(data));
  };
  const FetchDataUse = () => {
    fetchArticles();
  };
  useEffect(FetchDataUse, [load, filter]);
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

  return (
    <>
      <Mycontext.Provider
        value={{
          count,
          setCount,
          setLoad,
          setFilter,
          cards,
          setCards,
          filter,
          load,
          articles,
          index,
          setIndex,
        }}
      >
        <Component {...pageProps} />;
      </Mycontext.Provider>
    </>
  );
}
