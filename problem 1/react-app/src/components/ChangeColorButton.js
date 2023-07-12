import React, { useReducer, useEffect, useState } from "react";

//Create a Reducer Function to return the values
const colorReducer = (state, action) => {
  switch (action.type) {
    case "ADD_COLOR":
      return [...state, action.color];
    default:
      return state;
  }
};

function ChangeColorButton() {
  const [colorHistory, colorDispatcher] = useReducer(colorReducer, []);
  const [currentColor, setCurrentColor] = useState("black");

  useEffect(() => {
    const previousColor = colorHistory[colorHistory.length - 1];
    if (previousColor === "blue") {
      setCurrentColor("green");
    } else {
      const colors = ["red", "green", "blue", "black", "orange"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setCurrentColor(randomColor);
    }
  }, [colorHistory]);

  const handleClick = () => {
    console.log({ currentColor });
    colorDispatcher({ type: "ADD_COLOR", color: currentColor });
  };

  return (
    <>
      <button onClick={handleClick}>CHANGE COLOR</button>
    </>
  );
}

export default ChangeColorButton;
