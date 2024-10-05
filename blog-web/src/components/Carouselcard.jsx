export const Carouselcard = ({ article }) => {
  if (!article) {
    return null;
  }
  return (
    <div className=" flex justify-center mt-10 rounded-2xl border-blue-700">
      <img src={article.social_image} width={1200} height={1000} />
      {/* <p>{article.title}</p> */}
    </div>
  );
};
