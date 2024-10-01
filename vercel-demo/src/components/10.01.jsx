export default function Home() {
  const Handleclick = (bolj) => {
    console.log("button daragdlaa");
    bolj();
  };

  const logHelloWorld = () => {
    console.log("BOLj bnu");
  };

  return (
    <div>
      {" "}
      <button onClick={() => Handleclick(logHelloWorld)}>
        Click me ehnii arga
      </button>
      {/* <button
        onClick={() =>
          Handleclick(() => {
            console.log("Callback ajillaa ");
          }, "Leap")
        }
      >
        Click me 2 doh arga
      </button> */}
    </div>
  );
}
