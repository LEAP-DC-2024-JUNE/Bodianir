import { useState, useEffect } from "react";
import { Trendingcontainer } from "./Trendingcontainer";
export const Trendingcard = () => {
  const [articles, setArticles] = useState([]);
  const fetchArticles = () => {
    fetch(`https://dev.to/api/articles?tag=trending&per_page=4`)
      .then((first) => first.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  console.log(articles);
  return (
    <div>
      <p className="font-black pl-44 mb-4 font-sans ">Trending</p>
      <div className="flex gap-8 justify-center">
        {articles.map((article) => {
          return (
            <Trendingcontainer
              key={article.id}
              imgSrc={article.social_image}
              tag={article.type_of}
              title={article.title}
            />
          );
        })}
      </div>
    </div>
  );
};
