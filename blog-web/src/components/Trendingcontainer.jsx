export const Trendingcontainer = ({ imgSrc, type_of, title }) => {
  return (
    <div className="relative">
      {<img src={imgSrc} className="rounded-lg h-[270px] w-[270px]" />}
      <button className="button">Technology</button>

      <p className="title">{title}</p>
    </div>
  );
};
