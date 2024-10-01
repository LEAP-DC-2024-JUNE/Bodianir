export const Blogcard = ({ imgSrc, username, title, description, tags }) => {
  return (
    <div className="w-[350px]">
      {
        <img
          src={imgSrc}
          alt={title}
          height={300}
          className="border-2 w-full rounded-2xl"
        />
      }

      <button className="border-2 rounded-2xl w-[100px] bg-gray-300 text-blue-700">
        {tags}
      </button>

      <h1>{title}</h1>
      <p>{username}</p>
      <p>{description}</p>
    </div>
  );
};
