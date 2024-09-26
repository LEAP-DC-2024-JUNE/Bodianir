import { useState, useEffect } from "react";
import { Blogcard } from "./Blogcard";
export const Blogcardcontainer = () => {
  const [cards, setCards] = useState([]);
  const fetchArticles = () => {
    fetch("https://dev.to/api/articles")
      .then((first) => first.json())
      .then((data) => setCards(data));
  };
  console.log(cards);

  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <div>
      {cards.map((card) => {
        return (
          <div>
            <Blogcard
              imgSrc={card.social_image}
              username={card.user.username}
              title={card.title}
            />
          </div>
        );
      })}
    </div>
  );
};
