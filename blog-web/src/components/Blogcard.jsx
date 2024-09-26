export const Blogcard = ({ imgSrc, username, title }) => {
  return (
    <div>
      {<img src={imgSrc} alt={title} width={400} height={400} />}
      <h2>{title}</h2>
      <p className="">username:{username}</p>
    </div>
  );
};
