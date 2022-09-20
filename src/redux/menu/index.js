import * as Type from "./type";

const initialState = {
    home: false,
    about: false,
    contact: false,

};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case Type.SET_HOME:
      return { ...state,  home: payload };

    case Type.SET_ABOUT:
      return { ...state,  about: payload };

    case Type.SET_CONTACT:
      return { ...state,  contact: payload };

   
    default:
      return state;
  }
};

export default reducer;
export * from "./type";