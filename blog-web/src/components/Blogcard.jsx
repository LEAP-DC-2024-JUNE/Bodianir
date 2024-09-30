export const Blogcard = ({ imgSrc, username, title, description, tags }) => {
  return (
    <div className="w-[350px]">
      {<img src={imgSrc} alt={title} width={300} height={300} />}
      <button className="border-3 rounded-2xl w-[100px] bg-gray-300 text-blue-700">
        {tags}
      </button>
      <h1>{title}</h1>
      <p>{username}</p>
      <p>{description}</p>
    </div>
  );
};
