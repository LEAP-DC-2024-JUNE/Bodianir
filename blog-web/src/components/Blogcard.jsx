export const Blogcard = ({
  imgSrc,
  username,
  title,
  description,
  tags,
  date,
}) => {
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
      {tags.map((tag) => {
        return (
          <span className="rounded-md bg-slate-200 text-sky-600 w-[57px] text-center gap-20">
            {tag}
          </span>
        );
      })}

      <h1>{title}</h1>
      <p>{username}</p>
      <p>{description}</p>
      <p className="font-normal text-base text-slate-500">{date}</p>
    </div>
  );
};
