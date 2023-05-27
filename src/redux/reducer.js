const {ADD_FAV, REMOVE_FAV, ON_CLOSE} = require ("./actions");

const initialState = {
    myFavorites: [],
    characters: []
 };

 const rootReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            let copyFav = state.myFavorites
            copyFav.push(action.payload)
            return {
              ...state,
              myFavorites: copyFav
            };
        case REMOVE_FAV:
            let copyRem = state.myFavorites.filter((character)=>character.id !== Number(action.payload))
            return {
                ...state,
                myFavorites: copyRem
            };
        case ON_CLOSE:
            let copyClose = state.characters.filter((character)=>character.id !== Number(action.payload))
            return {
                ...state,
                myFavorites: copyClose
            };
        default:
            return {...state}
        }
};

export default rootReducer;
