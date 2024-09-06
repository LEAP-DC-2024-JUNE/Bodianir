import Image from "next/image";
import Profile from "../images/profile.jpg";
import Location from "../icons/location";
import Dot from "../icons/dot";
import Logo from "../icons/logo";

function Nav() {
  return (
    <div>
      <div className="mt-44 ml-24">
        <p className="text-6xl font-black">Hi, I'm Andy</p>
        <div className="flex">
          <div className="mt-10 mr-64">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
            <p className="mt-10 flex">
              <Location /> Arlington,VA
            </p>
            <p className="mt-5 flex ">
              <Dot /> Available for new projects
            </p>
            <p className="mt-10">
              <Logo />
            </p>
          </div>
          <div className=" mr-44">
            <Image
              src={Profile}
              alt="Profile picture of Andy"
              width={700}
              height={600}
              className="mr-20 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
