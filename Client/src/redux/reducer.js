const {ADD_FAV, REMOVE_FAV, ON_CLOSE, FILTER, ORDER} = require ("./actions");

const initialState = {
    myFavorites: [],
    allCharacters: []
 };

 const rootReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
      return { ...state, myFavorites: action.payload,
         allCharacters: action.payload };
        case REMOVE_FAV:
            return { ...state, 
                myFavorites: action.payload };
        case ON_CLOSE:
            let copyClose = state.allCharacters.filter((character)=>character.id !== Number(action.payload))
            return {
                ...state,
                myFavorites: copyClose
            };
        case FILTER:
            let copyFilter = state.allCharacters.filter((character)=>{
                return character.gender === action.payload
            })
            return {
                ...state,
                myFavorites: copyFilter
            };
            case ORDER:
            let copyOrder = state.allCharacters
            let copyOrdered = copyOrder.sort((a,b)=>{
                if(action.payload === "A"){return a.id - b.id}
                else if (action.payload === "D"){return b.id - a.id}
                else return 0;
            })
            return {
                ...state,
                myFavorites: copyOrdered
            }
        default:
            return {...state}
        }
};

export default rootReducer;
