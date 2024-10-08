import moment from "moment";
export const Carouselcard = ({ article }) => {
  if (!article) {
    return null;
  }
  return (
    <div className=" flex justify-center mt-10 rounded-2xl border-blue-700 relative">
      <img src={article.social_image} width={1200} height={1000} />
      <div className="absolute mr-96 mt-80 left-44 rounded-lg w-[650px] h-[250px] bg-slate-100 border-2 ">
        <p className="text-2xl font-black mt-28 ml-16">{article.title}</p>
        <button className="mb-44 absolute bottom-0 left-14 mt-20 text-white w-[100px] rounded-lg bg-blue-700">
          Technology
        </button>
        <p className="mt-6 ml-14">
          {moment(article.readable_publish_date).format("MMM Do YYYY")}
        </p>
      </div>
      {/* <p>{article.title}</p> */}
    </div>
  );
};
