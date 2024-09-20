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
  const [grade, setGrade] = useState(false);
  const students = [
    { name: "Alice", grade: 58 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 85 },
    { name: "David", grade: 45 },
  ];
  const filterPassingStudents = students.filter((student) => {
    return grade ? student.grade >= 60 : student.grade <= 60;
  });
  const Line = () => {
    setGrade(false);
  };
  const Passed = () => {
    setGrade(true);
  };
  console.log(setGrade);
  return (
    <div>
      <div>Filter by passing students</div>
      {filterPassingStudents.map((student, index) => {
        return (
          <div key={index}>
            <div>
              <button onClick={Line}>Not </button>
            </div>
            <div>
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
