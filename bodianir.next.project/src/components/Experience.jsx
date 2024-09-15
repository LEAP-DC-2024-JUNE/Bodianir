import { Experiencecard } from "../components/Experiencecard";
export const Experience = () => {
  const experience = [
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
    <div className="bg-customDark">
      <div>
        <div className="mt-20 justify-center flex">
          <button className="px-4 bg-gray-300 text-black rounded-lg h-8 mt-20">
            Experience
          </button>
        </div>
        <div className="items-center text-center mt-10 mb-10">
          <p>Here is a quick summary of my most recent experiences</p>
        </div>
      </div>
      {experience.map((exp) => {
        return (
          <Experiencecard
            title={exp.title}
            description={exp.description}
            date={exp.date}
          />
        );
      })}
    </div>
  );

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
};
