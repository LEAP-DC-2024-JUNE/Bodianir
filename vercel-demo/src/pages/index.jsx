// import Image from "next/image";
// import localFont from "next/font/local";
// import { Class } from "../components/class";
import { Render } from "../components/Render";
import { Second } from "../components/Second";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export default function Home() {
//   return (
//     <div className="bg-white">
//       {/* <Class /> */}
//       <div className="w-[200px] h-[200px] bg-black sm:bg-red-600 sm:w-[200px] sm:h-[200px]"></div>
//     </div>
//   );
// }
// const Home = () => {
//   let age = 18;
//   if (9 < 10 || 10 > 20) {
//     console.log("ajillaa");
//   } else {
//     console.log("ajillasangui");
//   }
//   return (
//     <div>
//       {age < 18 ? <div>Nasand hureegui</div> : <div>Nasand hursen</div>}
//       {age > 18 ? <div>Nasand hursen</div> : <div>Nasand hureegui</div>}
//     </div>
//   );
// };

// export default Home;

// let age = 12;
// return (
//   <div>{age < 18 ? <div>Nasand hureegui</div> : <div>Nasand hursen</div>}</div>
// );

const Bodlogo = () => {
  let obj = {
    name: "Bodianir",
    last: "Turmunkh",
  };
  const LoggedIn = true;
  const role = "klk";

  return (
    <div>
      {" "}
      <Render isLoggedIn={LoggedIn} />;
      <Second role={role} />
      {obj.name === "Bodianir" && obj.last === "Turmunkh" && <div>Welcome</div>}
      {obj.name !== "Bodianir" ||
        (obj.last !== "Turmunkh" && <div>Nevtreh erhgui bna</div>)}
    </div>
  );
};
export default Bodlogo;
