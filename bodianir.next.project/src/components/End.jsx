import { Mail } from "../icons/Mail";
import { Call } from "../icons/Call";
import { Last } from "../icons/Last";
export const End = () => {
  return (
    <div>
      <div className="text-center">
        <button className="px-4 mt-20 bg-gray-200 text-black rounded-lg h-10 mt-24">
          Get In Touch
        </button>
      </div>

      <div className="text-center flex justify-center">
        <p className="mt-10 ">
          {" "}
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <p className="font-black text-2xl">
          <Mail />
          Andy@pinecone.mn
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <p className="font-black text-2xl">
          <Call />
          +97686110239
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <Last />
      </div>
    </div>
  );
};
