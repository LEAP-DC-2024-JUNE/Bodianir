import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components";
import moment from "moment";

const Singlepost = () => {
  const [singlePost, setSinglepost] = useState({});
  const searchParam = useSearchParams();
  const value = searchParam.get("Idselect");
  const Router = useRouter();
  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${value}`)
      .then((response) => response.json())
      .then((data) => setSinglepost(data));
  };
  useEffect(() => {
    fetchData();
  }, [value]);
  return (
    <div className=" flex flex-col items-center ">
      <div className="mb-10 w-full">
        <Header />
        <button
          className="bg-black text-white mt-10 ml-20 w-[100px]"
          onClick={() => Router.back()}
        >
          Back
        </button>
      </div>
      <div className="mx-auto w-[800px]">
        <p className="font-black text-4xl bottom-0 pl-10  ">
          {singlePost.title}
        </p>
        <div className="flex gap-10 mt-10 mb-10">
          <img
            src={singlePost.user?.profile_image_90}
            width={28}
            height={28}
            className="rounded-full "
          />
          <p>{singlePost.user?.name}</p>
          <p>
            {" "}
            {moment(singlePost.readable_publish_date).format("MMM Do YYYY")}
          </p>
        </div>
        <img
          width={800}
          height={600}
          src={singlePost.social_image}
          className=""
        />
        <div
          className="w-[800px] mt-20"
          dangerouslySetInnerHTML={{ __html: singlePost.body_html }}
        ></div>
      </div>
      <div className="mt-10 w-full">
        <Footer />
      </div>
    </div>
  );
};
export default Singlepost;
