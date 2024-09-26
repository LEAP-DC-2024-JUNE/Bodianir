export const Blogcard = ({ imgSrc, username, title }) => {
  return (
    <div>
      {<img src={imgSrc} alt={title} width={400} height={400} />}
      <h1 className="w-[400px]">{title}</h1>
      <p className="">username:{username}</p>
    </div>
  );
};
