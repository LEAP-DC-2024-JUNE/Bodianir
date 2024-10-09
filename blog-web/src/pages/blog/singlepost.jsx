import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components";
import moment from "moment";

const Singlepost = ({ api }) => {
  // const [singlePost, setSinglepost] = useState({});
  // const searchParam = useSearchParams();
  // const value = searchParam.get("Idselect");
  // const Router = useRouter();
  // const fetchData = () => {
  //   fetch(`https://dev.to/api/articles/${value}`)
  //     .then((response) => response.json())
  //     .then((data) => setSinglepost(data));
  // };
  // console.log(api);
  // useEffect(() => {
  //   fetchData();
  // }, [value]);
  return (
    <div className=" flex flex-col items-center ">
      <div className="mb-10 w-full">
        <Header />
      </div>
      <div className="mx-auto w-[800px]">
        <p className="font-black text-4xl bottom-0 pl-10  ">{api.title}</p>
        <div className="flex gap-10 mt-10 mb-10">
          <img
            src={api?.profile_image_90}
            width={28}
            height={28}
            className="rounded-full "
          />
          <p>{api.user?.name}</p>
          <p> {moment(api.readable_publish_date).format("MMM Do YYYY")}</p>
        </div>
        <img width={800} height={600} src={api.social_image} className="" />
        <div
          className="w-[800px] mt-20"
          dangerouslySetInnerHTML={{ __html: api.body_html }}
        ></div>
      </div>
      <div className="mt-10 w-full">
        <Footer />
      </div>
    </div>
  );
};
export const getServerSideProps = async ({ query }) => {
  console.log(query);
  const api = await fetch(`https://dev.to/api/articles/${query.Idselect}`).then(
    (response) => response.json()
  );

  return {
    props: {
      api,
    },
  };
};
export default Singlepost;
