import React, { useEffect, useState } from "react";
import Board from "react-trello";
import get from "lodash/get";
import findIndex from "lodash/findIndex";
import { data } from "./data";

function App() {
  const [board, setBoard] = useState(data);
  // const [tasks, setTasks] = useState([]);
  const boardData = localStorage.getItem("boardData");

  function onCardAdd(card, laneId) {
    console.log(card, laneId, board);
    // const index = findIndex(board, ["lanes.id", laneId]);
    console.log(index);
  }

  useEffect(() => {
    // if (boardData) {
    //   setBoard(boardData);
    // }
  }, [boardData]);

  // localStorage.setItem('boardData', data)
  // console.log(board);

  return (
    <div className="App">
      <Board data={board} editable onCardAdd={onCardAdd} />
    </div>
  );
}

export default App;
