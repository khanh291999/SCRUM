import React, { useEffect, useState } from "react";
import Board from "react-trello";
import get from "lodash/get";
import findIndex from "lodash/findIndex";
import { data } from "./data";

function App() {
  const [board, setBoard] = useState(data);
  // const [tasks, setTasks] = useState([]);
  const workboard = JSON.parse(localStorage.getItem("workboard"));

  function addTaskToLocalStorage(board, card, laneIndex) {
    const updatedBoard = board;
    updatedBoard.lanes[laneIndex].cards.push(card);
    setBoard(updatedBoard);
    localStorage.setItem("workboard", JSON.stringify(updatedBoard));
  }

  function deleteTaskToLocalStorage(board, cardIndex, laneIndex) {
    const updatedBoard = board;
    updatedBoard.lanes[laneIndex].cards.splice(cardIndex, 1);
    setBoard(updatedBoard);
    localStorage.setItem("workboard", JSON.stringify(updatedBoard));
  }

  function onCardAdd(card, laneId) {
    const boardLanes = get(board, "lanes", []);
    const laneIndex = findIndex(boardLanes, ["id", laneId]);
    addTaskToLocalStorage(board, card, laneIndex);
  }

  function onCardDelete(cardId, laneId) {
    console.log(cardId, laneId, board);
    const boardLanes = get(board, "lanes", []);
    const laneIndex = findIndex(boardLanes, ["id", laneId]);

    const laneCards = get(boardLanes[laneIndex], "cards", []);
    const cardIndex = findIndex(laneCards, ["id", cardId]);
    deleteTaskToLocalStorage(board, cardIndex, laneIndex);
  }

  useEffect(() => {
    if (workboard) {
      setBoard(workboard);
    }
  }, []);

  return (
    <div className="App">
      <Board
        data={board}
        editable
        onCardAdd={onCardAdd}
        onCardDelete={onCardDelete}
      />
    </div>
  );
}

export default App;
