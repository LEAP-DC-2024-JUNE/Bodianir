export const Blogcard = ({ imgSrc, username, title }) => {
  return (
    <div>
      {<img src={imgSrc} alt={title} width={300} height={300} />}
      <h2>{title}</h2>
      <p>username:{username}</p>
    </div>
  );
};
