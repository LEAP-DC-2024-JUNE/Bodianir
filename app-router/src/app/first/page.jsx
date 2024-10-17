"use client";

import { useEffect } from "react";

const First = () => {
  const fetchData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>Shine huudas</div>;
};
export default First;
