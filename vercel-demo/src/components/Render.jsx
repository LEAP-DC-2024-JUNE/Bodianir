// Exercise 1: Basic Prop-Based Conditional Rendering

// Task: Create a component that receives a prop isLoggedIn and displays “Logged In” if true, or “Please Log In” if false.

//   •  Instructions:
//   •
//   •  Use conditional rendering based on the isLoggedIn prop to display the appropriate message.
export const Render = ({ isLoggedIn }) => {
  return (
    <div>
      <div>{isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}</div>
    </div>
  );
};
