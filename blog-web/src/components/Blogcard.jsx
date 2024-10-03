import Link from "next/link";

export const Blogcard = ({
  imgSrc,
  username,
  title,
  description,
  tags,
  date,
  id,
}) => {
  return (
    <Link href={{ pathname: "/blog/singlepost", query: { Idselect: id } }}>
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
            <button className="rounded-md bg-slate-200 text-sky-600 text-center gap-20">
              {tag}
            </button>
          );
        })}

        <h1>{title}</h1>
        <p>{username}</p>
        <p>{description}</p>
        <p className="font-normal text-base text-slate-500">{date}</p>
      </div>
    </Link>
  );
};
