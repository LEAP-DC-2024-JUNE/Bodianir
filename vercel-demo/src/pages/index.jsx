// import Image from "next/image";
// import localFont from "next/font/local";
// import { Class } from "../components/class";
import { Render } from "../components/Render";
import { Second } from "../components/Second";
import { Davtalt } from "../components/davtalt";
import { Third } from "../components/Third";
import { Fourth } from "../components/fourth";
import { useState } from "react";

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

// const Bodlogo = () => {
//   let obj = {
//     name: "Bodianir",
//     last: "Turmunkh",
//   };
//   const LoggedIn = true;
//   const role = "admin";
//   const cons = "admin";
//   const isVIP = true;
//   const isLoggedIn = true;
//   const items = ["Item 1", "Item 2", "Item 3"];
//   return (
//     <div>
//       {" "}
//       <Render isLoggedIn={LoggedIn} />;
//       <Second role={role} />
//       {obj.name === "Bodianir" && obj.last === "Turmunkh" && <div>Welcome</div>}
//       {obj.name !== "Bodianir" ||
//         (obj.last !== "Turmunkh" && <div>Nevtreh erhgui bna</div>)}
//       <Davtalt con={cons} />
//       <Third isVIP={isVIP} isLoggedIn={isLoggedIn} />
//       <Fourth items={items} />
//     </div>
//   );
// };
// export default Bodlogo;

// const Filter = () => {
//   const array = [1, 2, 3, 4];
//   const filteredArray = array.filter((element) => {
//     return element * 2;
//   });
// };
// export default Filter;

export default function Array() {
  const [age, setAge] = useState(18);
  const array = [
    {
      name: "Aniraa",
      age: 18,
    },
    {
      name: "Bodi",
      age: 26,
    },
    {
      name: "Anand",
      age: 17,
    },
  ];

  const filteredArray = array.filter((element) => {
    return element.age >= age;
  });
  const Handleclick = () => {
    setAge(0);
  };
  const Click = () => {
    setAge(18);
  };
  return (
    <div className="flex flex-col">
      <p>Nasand hursen humuus</p>
      <button onClick={Handleclick}>Buh nasnii humus</button>
      <button onClick={Click}>Nasand hursen humus</button>
      <div>
        <h1>nasand hursen hun</h1>
        {filteredArray.map((person) => {
          return (
            <div>
              <p>{person.name}</p>
              <p>{person.age}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
