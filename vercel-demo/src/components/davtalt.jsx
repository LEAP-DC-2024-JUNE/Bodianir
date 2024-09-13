// export const Davtalt = ({ davt }) => {
//   let messages = "";
//   switch (davt) {
//     case "admin":
//       messages = "adminshvde";
//       break;
//     case "user":
//       messages = "usershvde";
//       break;
//     default:
//       messages = "wrong user";
//       break;
//   }
//   return <p>{messages}</p>;
// };

export const Davtalt = ({ con }) => {
  if (con === "admin") {
    return (
      <div>
        <p>Aaddss</p>
      </div>
    );
  } else if (con === "user") {
    return (
      <div>
        <p>Usershd</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Wrong user</p>
      </div>
    );
  }
};
// Exercise 2: Conditional Rendering Based on User Role

// Task: Create a component that renders different messages based on the role prop. Display “Admin Dashboard” for an admin, “User Dashboard” for a user, and “Access Denied” for others.

//   •  Instructions:
//   •  The component accepts a prop role.
//   •  Use if-else or ternary operators to render different content based on the role.
