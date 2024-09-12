// Exercise 2: Conditional Rendering Based on User Role

// Task: Create a component that renders different messages based on the role prop. Display “Admin Dashboard” for an admin, “User Dashboard” for a user, and “Access Denied” for others.

//   •  Instructions:
//   •  The component accepts a prop role.
//   •  Use if-else or ternary operators to render different content based on the role.
export const Second = ({ role }) => {
  switch (role) {
    case "admin": {
      return <div>Admin Dashboard</div>;
    }
    case "user": {
      return <div>User Dashboard</div>;
    }
    default: {
      return <div>Access Denied</div>;
    }
  }
};
