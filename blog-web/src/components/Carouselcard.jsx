export const Carouselcard = ({ article }) => {
  if (!article) {
    return null;
  }
  return (
    <div className=" flex justify-center mt-10 rounded-2xl border-blue-700 relative">
      <img src={article.social_image} width={1200} height={1000} />

      <div className="absolute ">
        <img
          src={article.social_image}
          width={700}
          height={500}
          className="mr-96 mt-56 rounded-lg brightness-75 "
        />
        <button className="mb-44 absolute bottom-28 left-14 mt-20 text-white w-[100px] rounded-lg bg-blue-700">
          Technology
        </button>
      </div>
      {/* <p>{article.title}</p> */}
    </div>
  );
};
