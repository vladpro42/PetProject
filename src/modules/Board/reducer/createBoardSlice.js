import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    boards: [],
    showBoard: false,
    alertDeleteBoard: false,
    showFormCreateTask: false,
}

export const createBoardSlice = createSlice({
    name: "createBoard",
    initialState,
    reducers: {

        setStateFromDataBase: (state, action) => {
                console.log(action.payload)
            if (action.payload) {
                state.boards = [...action.payload]
            }

        },

        showCreateBoardForm: (state) => {
            state.showBoard = !state.showBoard
        },

        createBoard: (state, action) => {

            const { boards, ...other } = state;

            const newBoards = [...boards, {
                boardId: boards.length + 1 + "-column",
                title: action.payload.title,
                items: [],
            }]

            return {
                boards: newBoards, ...other
            }
        },

        removeBoard: (state, { payload }) => {
            let { boards, alertDeleteBoard, ...other } = state
            boards = boards.filter(item => {
                if (item.boardId !== payload) {
                    return item
                }
            })
            alertDeleteBoard = !alertDeleteBoard
            return { boards, alertDeleteBoard, ...other }
        },

        toggleAlertDeleteBoard: (state, action) => {
            if (action.payload === "board") {
                state.alertDeleteBoard = !state.alertDeleteBoard;
                return state
            }
        },

        handleDragEnd: (state, action) => {

            const result = action.payload

            const { destination, source, draggableId } = result

            if (!destination) return;

            if (
                destination.droppableId === source.droppableId &&
                destination.index === source.index
            ) return;

            if (result.type === "column") {

                const newBoards = state.boards
                newBoards.splice(source.index, 1)
                newBoards.splice(destination.index, 0, JSON.parse(draggableId))
                return state
            }

            if (result.type === "task") {

                if (source.droppableId === destination.droppableId) {
                    const newBoards = state.boards
                    const [filterArray] = newBoards.filter(item => item.boardId === source.droppableId)


                    const current = filterArray.items.filter(item => item.id === Number(draggableId))
                    filterArray.items.splice(source.index, 1)
                    filterArray.items.splice(destination.index, 0, ...current)

                    newBoards.map(board => {
                        if (board.boardId === source.droppableId) {
                            board = filterArray
                        }
                        return board
                    })
                    return state
                } else {
                    const newBoards = state.boards
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
                        return board
                    })
                    return state
                }


            }

        },

        createTask: (state, action) => {
            state.boards[0].items.push({
                content: action.payload.todo
            });
            openFormCreateTask(state)
        },

        openFormCreateTask: (state) => {
            state.showFormCreateTask = !state.showFormCreateTask
        },

        removeTask: (state, action) => {

            state.boards.filter(board => {
                if (board.boardId === action.payload.boardId) {
                    board.items = board.items.filter(item => {
                        if (item.id !== action.payload.taskId) {
                            return item
                        }
                    })
                    return board
                }
            })
        },
    },
})


export const {
    setStateFromDataBase,
    showCreateBoardForm,
    createBoard,
    handleDragEnd,
    toggleAlertDeleteBoard,
    removeBoard,
    createTask,
    openFormCreateTask,
    removeTask,
} = createBoardSlice.actions

export default createBoardSlice.reducer

export const getFlagFormCreateTask = state => state.board.showFormCreateTask;