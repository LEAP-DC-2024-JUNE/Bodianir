import Logo from "../images/Logo.png";
import Image from "next/image";
export const Experiencecard = (props) => {
  const { title, description, date } = props;
  return (
    <div className="sm:flex-col">
      <div>
        <div className="dark:bg-blue-800 border-solid border-2 items-center mx-60 h-[200px] mb-20 ">
          <div className="items-center gap-20 ml-5  ">
            <Image width={100} height={100} src={Logo} />
            <p className="font-black ">{title}</p>
            <p className="">{date}</p>
          </div>
          <div>
            <li className=" ">{description} </li>
          </div>
        </div>
      </div>
    </div>
  );
};
