import { useState, useEffect } from "react";
import { Blogcard } from "./Blogcard";
export const Blogcardcontainer = ({ inputvalue }) => {
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

  const filteredcards = cards.filter((card) =>
    card.title.toLowerCase().includes(inputvalue.toLowerCase())
  );
  return (
    <div className="flex flex-wrap justify-center mt-40 px-10 gap-10">
      {filteredcards.map((card) => {
        return (
          <div>
            <button className="border-3 rounded-2xl w-[100px] bg-gray-300 text-blue-700">
              Technology
            </button>

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
