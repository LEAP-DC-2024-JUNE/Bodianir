import { Upwork } from "../icons/Upwork";

export const Map = () => {
  const arr = [
    {
      title: "St.Frontend Developer",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut pretium arcu et massa semper, id fringilla leo semper.Sed quis justo ac magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Nov 2021 - Present",
    },
    {
      title: "Team Lead",
      description:
        " Sed quis justo ac magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis justo ac magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit..",
      date: "Jul 2017 - Oct 2021",
    },
    {
      title: "Full Stack Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Dec 2015 - May 2017",
    },
    {
      title: "St.Frontend Developer",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut pretium arcu et massa semper, id fringilla leo semper.Sed quis justo ac magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Nov 2021 - Present",
    },
    {
      title: "Team Lead",
      description:
        " Sed quis justo ac magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis justo ac magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit..",
      date: "Jul 2017 - Oct 2021",
    },
    {
      title: "Full Stack Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Dec 2015 - May 2017",
    },
    {
      title: "St.Frontend Developer",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut pretium arcu et massa semper, id fringilla leo semper.Sed quis justo ac magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Nov 2021 - Present",
    },
    {
      title: "Team Lead",
      description:
        " Sed quis justo ac magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis justo ac magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit..",
      date: "Jul 2017 - Oct 2021",
    },
    {
      title: "Full Stack Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Dec 2015 - May 2017",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="text-center">
        <div className="flex justify-center">
          <button className="text-center px-4 bg-gray-200 text-black rounded-lg h-10 mt-24">
            Experience
          </button>
        </div>
        {arr.map((element, index) => (
          <div className="mt-20 bg-white ml-72 mr-72">
            <div className=" top-0 mt-20 ml-96 text-gray-600">
              {element.date}
            </div>
            <div className="">
              <Upwork />
            </div>
            <div>
              <h1>{element.title}</h1>

              <h1 className="mt-10">{element.description}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
