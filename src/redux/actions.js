export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const ON_CLOSE = "ON_CLOSE";

export const addFav = (character) => {
    return{ 
      type: ADD_FAV, payload: character
    }
  };

  export const removeFav = (id) => {
    return{ 
      type: REMOVE_FAV, payload: id
    }
  };

  export const onClose = (id) => {
    return{ 
      type: ON_CLOSE, payload: id
    }
  };
