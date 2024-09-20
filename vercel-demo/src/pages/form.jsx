import { useState } from "react";

const Form = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [radio, setRadio] = useState("");

  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const ChangefirstName = (param1) => {
    setfirstName(param1);
  };
  const ChangelastName = (param1) => {
    setlastName(param1);
  };
  const ChangeEmail = (param1) => {
    setEmail(param1);
  };
  const Changeaddress = (param1) => {
    setAddress(param1);
  };
  const Changeaddress2 = (param1) => {
    setAddress2(param1);
  };
  const Cityset = (param1) => {
    setCity(param1);
  };
  const Setstate = (param1) => {
    setState(param1);
  };
  const Zip = (param1) => {
    setZip(param1);
  };
  const Phone2 = (param1) => {
    setNumber(param1);
  };

  const submitButton = () => {
    console.log(
      firstName,
      lastName,
      address,
      address2,
      city,
      state,
      zip,
      number,
      email
    );
  };
  return (
    <div className="bg-white pl-48">
      <p className="text-center text-blue-600 text-2xl ">
        New Member Registration
      </p>
      <div className="bg-white flex mt-20 ">
        <div className="flex flex-col w-[200px]">
          <p className="text-black">First Name</p>
          <input
            type="text"
            className="border-2 text-black"
            onChange={(Firstname) => ChangefirstName(Firstname.target.value)}
          />
        </div>
        <div className="flex flex-col ml-44 w-[200px]">
          <p className="text-black">Last Name</p>
          <input
            type="text"
            className="border-2 text-black"
            onChange={(Lastname) => ChangelastName(Lastname.target.value)}
          />
        </div>
      </div>
      <div className="bg-white flex mt-20 w-[1000px]">
        <div className="flex flex-col w-[200px]">
          <p className="text-black">Address</p>
          <input
            type="text"
            className="border-2 text-black"
            onChange={(Address) => Changeaddress(Address.target.value)}
          />
        </div>
        <div className="flex flex-col ml-44 w-[200px]">
          <p className="text-black">Address2</p>
          <input
            type="text"
            className="border-2 text-black"
            onChange={(Address2) => Changeaddress2(Address2.target.value)}
          />
        </div>
      </div>
      <div className="bg-white flex mt-20 w-[1000px]">
        <div className="flex flex-col w-[200px]">
          <p className="text-black">City</p>
          <input
            type="text"
            className="border-2 text-black"
            onChange={(City) => Cityset(City.target.value)}
          />
        </div>
      </div>
      <div className="bg-white mt-20 flex ">
        <div className="flex flex-col w-[200px]">
          <p className="text-black">State/Province</p>
          <input
            type="text"
            className="border-2 text-black"
            onChange={(States) => Setstate(States.target.value)}
          />
        </div>
        <div className="flex flex-col ml-44 w-[200px]">
          <p className="text-black">ZIP/Postal Code</p>
          <input
            type="text"
            className="border-2 text-black"
            onChange={(Postal) => Zip(Postal.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col mt-20 w-[200px]">
        <p className="text-black">Phone Number</p>
        <input
          type="number"
          className="border-2 text-black"
          onChange={(Phone) => Phone2(Phone.target.value)}
        />
      </div>
      <div className="flex flex-col mt-20 w-[200px]">
        <p className="text-black">Email address</p>
        <input
          type="email"
          className="border-2 text-black"
          onChange={(Mail) => ChangeEmail(Mail.target.value)}
        />
      </div>
      <div className="flex flex-row gap-20 mt-20 w-[200px]">
        <p className="text-black">Membership type</p>
        <input type="radio" className="border-2 text-black" />
        <p className="text-black">Standart</p>
        <input type="radio" className="border-2 text-black" />
        <p className="text-black">Premium</p>
        <input type="radio" value="Name" className="border-2 text-black" />
        <p className="text-black">Ultimate</p>
      </div>
      <button
        onClick={submitButton}
        className="border-2 w-[100px] mb-20 border-black text-black mt-10"
      >
        Submit
      </button>
    </div>
  );
};
export default Form;

//
//       <div className="flex">
//         <p className="text-black">First Name</p>
//         <input type="text" className="border-2 border-black" />
//         <p className="text-black">Last Name</p>
//         <input type="text" className="border-2 border-black" />
//       </div>
//     </div>
//   );
// };

/* <input
          className="border-2 text-black"
          type="number"
          placeholder="123"
        />
        <button onClick={submitButton}>Sign up</button>;
      </div>
      <div className="flex">
        <input className="border-2 w-[50px] text-black" type="checkbox"></input>
        ;
        <input className="border-2 w-[50px] text-black" type="checkbox"></input>
        ;
        <input className="border-2 w-[50px] text-black" type="checkbox"></input>
        ;
      </div>
      <div>
        <input className="border-2 w-[100px] text-black" type="radio"></input>;
      </div>
      <div>
        <input className="border-2 w-[100px] text-black" type="hidden"></input>;
      </div>
      <div>
        <input className="border-2 w-[100px] text-black" type="button"></input>;
      </div>
      <div>
        <input className="border-2 w-[100px] text-black" type="color"></input>;
      </div>
      <div>
        <input className="border-2 w-[100px] text-black" type="file"></input>;
      </div>
      <div>
        <input className="border-2 w-[100px] text-black" type="image"></input>;
      </div>
       <div className="flex">
        <div className="flex">
          <p className="text-black">First name</p>
          <input
            typex="text"
            className="border-2 border-black"
            onChange={(Firstname) => Changefirstname(Firstname.target.value)}
          />
          <p className="text-black">Last Name</p>
          <input
            typex="text"
            className="border-2 border-black"
            onChange={(Firstname) => Changefirstname(Firstname.target.value)}
          />
      
     

      <div>
        <input
          className="border-2 text-black"
          type="text"
          placeholder="Address"
          onChange={(Address) => ChangeEmail(Address.target.value)}
        />

      </div>
      <div>
      </div>
        </div>
    </div> */
