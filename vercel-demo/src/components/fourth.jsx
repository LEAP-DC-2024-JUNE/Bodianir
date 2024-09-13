export const Fourth = ({ items }) => {
  return (
    <div>
      {items.length === 0 ? (
        <div>No items available</div>
      ) : (
        <ul>
          {items.map((items, index) => (
            <li key={index}>{items}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Exercise 4: Conditional Rendering with a List of Items

// Task: Create a component that accepts an array of items as a prop. If the array is empty, render “No items available.” Otherwise, render the list of items.

//   •  Instructions:
//   •  Accept an array prop items.
//   •  Conditionally render the list or a “No items” message based on whether the array is empty.
