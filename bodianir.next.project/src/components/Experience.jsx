import Logo from "../images/Logo.png";
import Image from "next/image";
export const Experience = () => {
  const jobs = [
    {
      title: "Sr.Frontend Developer",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: "Nov 2021 - Present",
    },
    {
      title: "Team Lead",
      description: [
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: "2017 July-Nov 2021 - Present",
    },
    {
      title: "Full Stack Developer",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      ],
      date: "Dec 2015-May 2017 - Present",
    },
  ];
  return (
    <div className="bg-gray-50 mb-20">
      <div className="mt-20 justify-center flex">
        <button className="px-4 bg-gray-300 text-black rounded-lg h-8 mt-20">
          Experience
        </button>
      </div>
      <div className="items-center text-center mt-10 mb-10">
        <p>Here is a quick summary of my most recent experiences</p>
      </div>
      <div>
        {jobs.map((job) => (
          <div className="bg-white border-solid border-2 w-[1000px] items-center mx-60 h-[200px] mb-20 ">
            <div className=" flex items-center gap-20 ml-5  ">
              <Image width={100} height={100} src={Logo} />
              <p className="font-black mb-10 ml-24">{job.title}</p>
              <p className="ml-56">{job.date}</p>
            </div>
            <div>
              <li className="w-[700px] ml-72 ">{job.description} </li>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

{
  /* <div>
<Up
  imgSrc={Logo}
  Title="Sr.Frontend Developer"
  Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  Description2="Ut pretium arcu et massa semper, id fringilla leo semper."
  Description3="Sed quis justo ac magna."
  Description4="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  Date="Nov 2021 - Present"
/>
</div>
<div>
<Up
  imgSrc={Logo}
  Title="Team Lead"
  Description="Sed quis justo ac magna."
  Description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  Description3="Sed quis justo ac magna."
  Description4="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  Date="2017 July-Nov 2021 - Present"
/>
</div>
<div>
<Up
  imgSrc={Logo}
  Title="Full Stack Developer"
  Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
  Date="Dec 2015-May 2017 - Present"
/>
</div> */
}
