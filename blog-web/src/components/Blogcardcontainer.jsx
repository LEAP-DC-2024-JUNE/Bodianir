import { useState, useEffect } from "react";
import { Blogcard } from "./Blogcard";
export const Blogcardcontainer = ({ inputvalue }) => {
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

  const filteredcards = cards.filter((card) =>
    card.title.toLowerCase().includes(inputvalue.toLowerCase())
  );
  console.log(filteredcards);
  const loadMore = () => {
    setLoad(load);
  };

  if (filteredcards.length == 0)
    return (
      <div className="flex justify-center mt-44 mb-44">
        <p className="text-2xl">Not found</p>
      </div>
    );
  return (
    <div>
      <p className="mt-20 pl-36 font-black">All Blog Post</p>
      <div className="flex gap-10 pl-40 pt-10">
        <button onClick={() => setFilter("")}>All</button>
        <button onClick={() => setFilter("javascript")}>Javascript</button>
        <button onClick={() => setFilter("css")}>Css</button>
        <button onClick={() => setFilter("next")}>Next.js</button>
      </div>
      <div className="flex flex-wrap justify-center mt-20 px-10 gap-10">
        {filteredcards.map((card) => {
          return (
            <div className="border-2 px-2 pt-2">
              <Blogcard
                imgSrc={card.social_image}
                username={card.user.username}
                title={card.title}
                description={card.description}
                tags={card.tag_list}
                date={card.readable_publish_date}
              />
            </div>
          );
        })}
        <button
          onClick={loadMore}
          className="mt-20 mr-44 border-2 w-[100px] h-[50px] text-center mb-20"
        >
          Load More
        </button>
      </div>
    </div>
  );
};
