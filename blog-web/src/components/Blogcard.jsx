import Link from "next/link";

export const Blogcard = ({
  imgSrc,
  username,
  title,
  description,
  type,
  date,
  id,
  name,
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

        <button className="rounded-md bg-slate-200 text-sky-600 my-7 text-center gap-20">
          {type}
        </button>

        <h1>{title}</h1>
        <p>{username}</p>
        <p>{description}</p>
        <div className="flex gap-10 mt-5">
          {
            <img
              src={imgSrc}
              alt={title}
              height={32}
              width={32}
              className="border-2 rounded-2xl"
            />
          }
          <p className="font-black text-sm">{name}</p>
          <p className="font-normal text-base text-slate-500">{date}</p>
        </div>
      </div>
    </Link>
  );
};
