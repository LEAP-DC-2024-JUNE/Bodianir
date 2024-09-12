import Image from "next/image";
import Abs from "../images/abs.jpg";

export function About() {
  return (
    <div className="dark:bg-blend-darken w-[1280] h-[634]">
      <div className=" flex justify-center">
        <button className="text-center px-4 bg-gray-200 text-black rounded-lg h-10 mt-24 ">
          About me
        </button>
      </div>
      <div className="flex items-start justify-center">
        <div className="flex-shrink-0">
          <Image src={Abs} width={400} height={400} alt="About Me" />
        </div>
        <div className="ml-8 flex flex-col">
          <div className="font-black text-3xl mb-4 ml-52">
            Curious about me? Here you have it:
          </div>

          <p className="font-normal text-base mb-4 w-1/2 ml-52">
            I'm a designer turned full stack developer, passionate about
            React.js and Node.js. I excel in blending technical and visual
            aspects to craft exceptional digital products, prioritizing user
            experience, precise design, and optimized code. Since starting my
            web development journey in 2015, I've embraced challenges and kept
            up with the latest tech trends. Now in my early thirties, seven
            years in, I'm building cutting-edge web apps using Next.js,
            TypeScript, Nestjs, Tailwindcss, Supabase, and more. With a
            progressive mindset, I enjoy the entire product development process,
            from ideation to execution. Off duty, you'll find me on Twitter,
            tracking startup journeys, or unwinding. Follow me for tech insights
            and public project updates on Twitter or GitHub. Finally, some quick
            bits about me.
          </p>
          <ul className="list-disc pl-5 text-base font-normal ml-72">
            <li>B.E in Computer Engineering</li>
            <li>Full-time Freelancer</li>
            <li>Avid Learner</li>
          </ul>
          <p className="ml-52 mb-20">
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
}
