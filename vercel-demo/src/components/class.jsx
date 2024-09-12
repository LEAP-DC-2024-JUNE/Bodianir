import Image from "next/image";
import Eye from "../images/Eye.jpg";
import { Product } from "../components/product";
import Js from "../components/js";

export const Class = () => {
  const jobs = [
    {
      imgSrc: Eye,
      title: "Burnikk",
      description: "Sexbomb",
    },
    {
      imgSrc: Eye,
      title: "Kibal Batal",
      description: "Kibal Black",
    },
    {
      imgSrc: Eye,
      title: "Verynice",
      description: "Salt maalat",
    },
    {
      imgSrc: Eye,
      title: "Kulangolt",
      description: "Salt",
    },
    {
      imgSrc: Eye,
      title: "Sipon Malabolt",
      description: "Salt",
    },
    {
      imgSrc: Eye,
      title: "Pitaklan",
      description: "Black Kibal",
    },
  ];

  return (
    <div>
      <p className="text-2xl mb-20 mt-20 text-black">Recommended Products</p>
      <div className="flex flex-wrap gap-20">
        {jobs.map((job, index) => (
          <Product
            key={index}
            imgSrc={job.imgSrc}
            title={job.title}
            description={job.description}
          />
        ))}
      </div>
    </div>
  );
};
