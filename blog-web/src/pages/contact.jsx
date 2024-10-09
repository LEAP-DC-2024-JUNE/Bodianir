import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
const Contact = () => {
  return (
    <div>
      <Header />
      <div>
        <div className=" mx-auto">
          <p className="font-black text-3xl text-center ">Contact Us</p>
          <p className="mx-auto w-[600px] mt-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
          <div className="flex gap-20 ml-96 pl-16 mt-10 ">
            <span className="border-2 h-[120px] w-[250px]">
              <p className=" pt-3 pl-4 font-black text-2xl ">Address</p>
              <p className="mt-3 pl-4">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </p>
            </span>
            <span className="border-2 h-[120px] w-[250px]">
              <p className="font-black pl-4 pt-1 text-2xl ">Contact</p>
              <p className="mt-3 pl-3">313-332-8662 info@email.com</p>
            </span>
          </div>
          <div className="bg-gray-200 justify-center w-[600px] h-[580px] mx-auto mt-14 ">
            <p className="font-black ml-5 pt-10">Leave a message</p>
            <div className="mt-20 ml-16 flex gap-7">
              <input
                type="text"
                placeholder="Your name"
                className="border-2 rounded-md h-12 pl-3"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="border-2 rounded-md w-44 h-12 pl-3"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="border-2 rounded-md w-96 mt-10 ml-16 h-12 pl-3"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Write a message"
                className="border-2 rounded-md w-96 mt-10 ml-16 h-32 pl-3 pb-20"
              />
            </div>
            <button className="bg-blue-500 text-white w-[150px] rounded-md h-[50px] mt-10 ml-16">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};
export default Contact;
