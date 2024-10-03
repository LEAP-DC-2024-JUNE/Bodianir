import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components";
const Singlepost = () => {
  const [singlePost, setSinglepost] = useState({});
  const searchParam = useSearchParams();
  const value = searchParam.get("Idselect");
  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${value}`)
      .then((response) => response.json())
      .then((data) => setSinglepost(data));
  };
  useEffect(() => {
    fetchData();
  }, [value]);
  return (
    <div className=" flex flex-col items-center mx-auto ">
      <div className="mb-10">
        <Header />
      </div>
      <div>
        <p className="font-black text-4xl bottom-0 pl-10  ">
          {singlePost.title}
        </p>
        <div>
          <img
            src={singlePost.user?.profile_image_90}
            width={28}
            height={28}
            className="rounded-full "
          />
          <p>{singlePost.user?.name}</p>
        </div>
        <img
          width={600}
          height={600}
          src={singlePost.social_image}
          className=""
        />
        <div
          className="w-[400px]"
          dangerouslySetInnerHTML={{ __html: singlePost.body_html }}
        ></div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};
export default Singlepost;
