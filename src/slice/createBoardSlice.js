import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    boards: [{
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
    }],
    showBoard: false,
    alertDeleteBoard: false,
    showFormCreateTask: false,
}

export const createBoardSlice = createSlice({
    name: "createBoard",
    initialState,
    reducers: {
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
                if (item.boardId !== payload.current) {
                    return item
                }
            })
            alertDeleteBoard = !alertDeleteBoard
            return { boards, alertDeleteBoard, ...other }
        },

        toggleAlertDeleteBoard: (state, action) => {
            console.log(action)
            if (action.payload === "board") {
                state.alertDeleteBoard = !state.alertDeleteBoard;
                return state
            }
            return state
        },

        changeBoard: () => {

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

                    const current = filterArray.items.filter(item => item.id == draggableId)
                    filterArray.items.splice(source.index, 1)
                    filterArray.items.splice(destination.index, 0, ...current)

                    newBoards.map(board => {
                        if (board.boardId === source.droppableId) {
                            board = filterArray
                        }

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
                    })
                    return state
                }


            }

        },

        createTask: (state, action) => {
            state.boards[0].items.push({
                id: Date.now(), content: action.payload
            });
        },

        openFormCreateTask: (state) => {
            state.showFormCreateTask = !state.showFormCreateTask
        },

        removeTask: (state, action) => {
            console.log(action.payload)

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