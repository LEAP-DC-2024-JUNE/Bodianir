// Assignment 5: Filter Students Who Passed

import { useState } from "react";

// Task: Write a function filterPassingStudents that takes an array of students, where each student is an object with name and grade properties. Return a new array containing only the students who scored 60 or more.

// function filterPassingStudents(students) {
//   // Use filter to return students with grade >= 60
// }

// // Example
// const students = [
//   { name: "Alice", grade: 58 },
//   { name: "Bob", grade: 72 },
//   { name: "Charlie", grade: 85 },
//   { name: "David", grade: 45 },
// ];

// console.log(filterPassingStudents(students));
// // [{ name: "Bob", grade: 72 }, { name: "Charlie", grade: 85 }]
const Assignment5 = () => {
  const [grade, setGrade] = useState(60);
  const students = [
    { name: "Alice", grade: 58 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 85 },
    { name: "David", grade: 45 },
  ];
  const filterPassingStudents = students.filter((student) => {
    return student.grade >= grade;
  });
  const Line = () => {
    setGrade(setGrade < 60);
  };
  const Passed = () => {
    setGrade(60);
  };
  console.log(setGrade);
  return (
    <div>
      <div>Filter by passing students</div>
      {filterPassingStudents.map((student) => {
        return (
          <div>
            <div>
              <button onClick={Line}>Not </button>
              <button onClick={Passed}>Passed</button>
            </div>
            <div>
              <p> {student.name}</p>
            </div>
            <div>
              <p> {student.grade}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Assignment5;
