import React, { useEffect, useState } from "react";
import Board from "react-trello";
import get from "lodash/get";
import findIndex from "lodash/findIndex";
import { data } from "./data";

function App() {
  const [board, setBoard] = useState(data);
  // const [tasks, setTasks] = useState([]);
  const workboard = JSON.parse(localStorage.getItem("workboard"));

  function updateDataToLocalStorage(updatedBoard) {
    setBoard(updatedBoard);
    localStorage.setItem("workboard", JSON.stringify(updatedBoard));
  }

  function onDataChange(newData) {
    console.log(newData);
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
