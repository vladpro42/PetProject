import { useCallback, useState } from 'react';
import { DragDropContext, Droppable } from "react-beautiful-dnd"

import css from './Board.module.css';
import Column from './Column';


const initState = [
  {
    boardId: "1-column", title: "ToDO", items: [
      { id: 1, content: "call you back" },
      { id: 2, content: "I'll need to buy some food " },
      { id: 3, content: "Learn English today" },
      { id: 4, content: "Learn Redux" }
    ]
  },
  {
    boardId: "2-column", title: "progress", items: [
      { id: 5, content: "think about it" },
      { id: 6, content: "play chess" },
      { id: 7, content: "play LOL" },
      { id: 8, content: "Lern Redux" }
    ]
  },
  {
    boardId: "3-column", title: "done", items: [
      { id: 9, content: "go to the gym" },
      { id: 10, content: "play chess" },
      { id: 11, content: "play LOL" },
      { id: 12, content: "Learn TypeScript" }
    ]
  }
]

const Board = () => {

  const [boards, setBoards] = useState(initState);

  const onDragEnd = useCallback((result) => {
    const { destination, source, draggableId } = result

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    if (result.type === "column") {

      const newBoards = [...boards]

      newBoards.splice(source.index, 1)

      newBoards.splice(destination.index, 0, JSON.parse(draggableId))

      setBoards(newBoards)
      return;
    }

    if (result.type === "task") {

      if (source.droppableId === destination.droppableId) {
        const newBoards = [...boards]
        const [filterArray] = newBoards.filter(item => item.boardId === source.droppableId)

        const current = filterArray.items.filter(item => item.id == draggableId)
        filterArray.items.splice(source.index, 1)
        filterArray.items.splice(destination.index, 0, ...current)

        newBoards.map(board => {
          if (board.boardId === source.droppableId) {
            board = filterArray
          }
        })

        setBoards(newBoards)
        return;
      }

      const newBoards = [...boards]
      const [sourceBoard] = newBoards.filter(board => board.boardId === source.droppableId);
      const [deleteTask] = sourceBoard.items.splice(source.index, 1)

      const [destinationBoard] = newBoards.filter(board => board.boardId === destination.droppableId);
      destinationBoard.items.splice(destination.index, 0, deleteTask)

      newBoards.map(board => {
        if (board.boardId === source.droppableId) {
          board = sourceBoard
        }
        if (board.boardId === destination.droppableId) {
          board = destinationBoard
        }
        return;
      })
      return setBoards(newBoards)
    }

  }, [boards])


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='column' direction='horizontal' type='column'>
        {(provided) => (
          <div
            className={css.app}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <Column boards={boards} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>

  );
}

export default Board;
