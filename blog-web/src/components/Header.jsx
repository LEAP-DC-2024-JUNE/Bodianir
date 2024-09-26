export const Header = ({ setinputvalue }) => {
  return (
    <div>
      <input
        type="text"
        className="border-2 text-black"
        onChange={(event) => setinputvalue(event.target.value)}
      />
    </div>
  );
};
