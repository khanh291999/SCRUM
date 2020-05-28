import React, { useEffect, useState } from "react";
import Board from "react-trello";
import { data } from "./data";

function App() {
  const [board, setBoard] = useState(data);
  const workboard = JSON.parse(localStorage.getItem("workboard"));

  function updateDataToLocalStorage(updatedBoard) {
    setBoard(updatedBoard);
    localStorage.setItem("workboard", JSON.stringify(updatedBoard));
  }

  function onDataChange(newData) {
    updateDataToLocalStorage(newData);
  }

  useEffect(() => {
    if (workboard) {
      setBoard(workboard);
    }
  }, []);

  return (
    <div className="App">
      <Board data={board} editable onDataChange={onDataChange} />
    </div>
  );
}

export default App;
