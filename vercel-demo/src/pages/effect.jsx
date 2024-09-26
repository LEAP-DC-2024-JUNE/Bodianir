import { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(10);
  const [articles, setArticles] = useState([]);
  const fetchdata = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      {articles.map((articles) => {
        return (
          <div>
            <p>{articles.title}</p>
          </div>
        );
      })}
    </div>
  );
}
