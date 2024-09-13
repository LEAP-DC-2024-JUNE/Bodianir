// Exercise 3: Conditional Rendering with Multiple Props

// Task: Create a component that renders “VIP Access” if both isLoggedIn and isVIP props are true. Otherwise, render a message based on which prop is false.

//   •  Instructions:
//   •  Accept two props: isLoggedIn and isVIP.
//   •  Conditionally render the appropriate message.
export const Third = ({ isVIP, isLoggedIn }) => {
  let messeage = "";
  if (isVIP && isLoggedIn) {
    messeage = "Both VIP";
  } else if (isVIP) {
    messeage = "Only VIP";
  } else if (isLoggedIn) {
    messeage = "Only isLoggedIn";
  } else {
    messeage = "Wrong";
  }
  return <div>{messeage}</div>;
};
