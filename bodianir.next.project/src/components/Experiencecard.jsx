import Logo from "../images/Logo.png";
import Image from "next/image";

export const Experiencecard = (props) => {
  const { title, descriptions, date } = props;

  return (
    <div className="flex justify-center mt-10 flex-col lg:pl-80 left-0 lg:mt-40">
      <div className="border-2 dark:border-gray-700 bg-white dark:bg-customGray max-w-full sm:max-w-[1000px] w-full sm:w-[800px] p-4 rounded-lg">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-32">
          <Image width={100} height={100} src={Logo} alt="Logo" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <p className="font-black">{title}</p>
            <p className="pl-40">{date}</p>
          </div>
        </div>
        <div className="flex-col mt-10 w-[300px] pl-0 lg:pl-56 lg:w-[500px]">
          {descriptions.map((description) => {
            return <li>{description}</li>;
          })}
        </div>
      </div>
    </div>
  );
};
