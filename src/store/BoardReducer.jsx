
export const BoardReducer = (state, action) => {
    switch(action.type) {

        case "createBoard": {
            const newState = [...state, action.payLoad];
            localStorage.setItem("board", JSON.stringify(newState));
            return newState;
        }

        case "removeBoard": {
            const newState = [...state].filter( item => {
                return item.id !== action.payload;
            })
            localStorage.setItem("board", JSON.stringify(newState));
            return newState;
        }

        case "changeBoard": {
            const payload = action.payload;
            const {title, descr, editData} = payload;
            const newState = state.map( item => {
                if(item.id === editData.current) {
                    item.title = title;
                    item.descr = descr;
                    return item;
                }
                return item;
           })
           return newState;
        }

        case "drop": {
            const payload = action.payload;
            const {currentCard, board} = payload;

            const newState = [...state].map( item => {
                if(item.id === board.id) {
                    return {...item, order: currentCard.order};
                }
                if(item.id === currentCard.id) {
                    return {...item, order: board.order};
                }
                return item
            });
            console.log(newState)
            return newState;
        }
            
        default:
            return [...state];
    }
};