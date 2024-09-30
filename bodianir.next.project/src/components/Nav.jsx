import Image from "next/image";
import Profile from "../images/profile.jpg";
import Location from "../icons/Location";
import Image3 from "../icons/Image3";
import Logo from "../icons/Image11";

function Nav() {
  return (
    <div className=" flex-row gap-10 md:flex md:justify-center md:gap-52">
      <div className="order-1 md:order-2">
        <Image
          src={Profile}
          alt="Profile picture of Andy"
          width={300}
          height={300}
          className=" shadow-custom-blue mt-10"
        />
      </div>
      <div className="order-1 md:order-1 mt-10 w-[400px] md:w-[600px]">
        <p className="text-6xl font-black mb-20">Hi, I'm Andy</p>
        <p>
          I specialize in full stack development, particularly with React.js and
          Node.js. My main goal is to create exceptional digital experiences
          that are fast, visually appealing, and accessible to everyone. With
          over 7 years of experience in web development, I continue to find joy
          in crafting innovative solutions and designs.
        </p>

        <p className="mt-10 flex">
          <Location /> Arlington,VA
        </p>
        <p className="mt-5 flex ">
          <Image3 /> Available for new projects
        </p>
        <p className="mt-10">
          <Logo />
        </p>
      </div>
    </div>
  );
}

export default Nav;

// <div>
// <div className=" flex">
//   <div className="rounded-lg shadow-custom-blue ml-44 mr-44">
//     <Image
//       src={Profile}
//       alt="Profile picture of Andy"
//       width={400}
//       height={600}
//     />
//   </div>
//   <div>
//     <div className="mt-10 mr-64 w-[400px] sm:w-[600px]">
//       <p className="text-6xl font-black">Hi, I'm Andy</p>I specialize in
//       full stack development, particularly with React.js and Node.js. My
//       main goal is to create exceptional digital experiences that are
//       fast, visually appealing, and accessible to everyone. With over 7
//       years of experience in web development, I continue to find joy in
//       crafting innovative solutions and designs.
//       <p className="mt-10 flex">
//         <Location /> Arlington,VA
//       </p>
//       <p className="mt-5 flex ">
//         <Dot /> Available for new projects
//       </p>
//       <p className="mt-10">
//         <Logo />
//       </p>
//     </div>
//   </div>
// </div>
// </div>
