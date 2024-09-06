import Image from "next/image";

export const Up = (props) => {
  const {
    Title,
    Description,
    imgSrc,
    Description2,
    Description3,
    Description4,
    Date,
  } = props;
  return (
    <div className="bg-white border-solid border-2 w-[1000px] items-center mx-60 h-[200px] mb-20 ">
      <div className=" flex items-center gap-20 ml-5  ">
        <Image width={100} height={100} src={imgSrc} />
        <p className="font-black mb-10 ml-24">{Title}</p>
        <p className="ml-56">{Date}</p>
      </div>
      <div>
        <p className="w-[700px] ml-72 ">
          <span>•</span> {Description}
        </p>
        <p className="w-[700px] ml-72 ">{Description2} </p>
        <p className="w-[700px] ml-72 "> {Description3} </p>
        <p className="w-[700px] ml-72 ">{Description4} </p>
      </div>
    </div>
  );
};
