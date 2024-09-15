import Image from "next/image";
import Abs from "../images/abs.jpg"; // Update the path to your image if necessary

export function About() {
  return (
    <div className="flex flex-col items-center mt-40 gap-12 bg-customDark pt-10">
      <div className="text-center mb-10">
        <button className="px-6 py-2 bg-gray-500 text-white rounded-lg ">
          About Me
        </button>
      </div>

      <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-12 md:justify-center w-full max-w-screen-lg">
        <div className="w-[400px] md:w-[600px] md:order-2">
          <p className="font-normal text-base mb-4">
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
          <ul className="list-disc pl-5 text-base font-normal mb-4">
            <li>B.E in Computer Engineering</li>
            <li>Full-time Freelancer</li>
            <li>Avid Learner</li>
          </ul>
          <p>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
        <div className="flex-shrink-0 ">
          <Image
            src={Abs}
            width={400}
            height={400}
            alt="About Me"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

/* <div className=" w-[1280] h-[634]">
<div className=" flex justify-center">
  
</div>
<div className="flex items-start justify-center">
  <div className="flex-shrink-0">
   
  </div>
  <div className="ml-8 flex flex-col">
    <div className="font-black text-3xl mb-4 ml-52">
      Curious about me? Here you have it:
    </div>

    
  </div>
</div>
</div> */
