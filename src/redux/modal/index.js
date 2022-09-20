import * as Type from "./type";

const initialState = {
   open: false,

};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case Type.SET_OPEN:
      return { ...state,  open: payload.open };


   
    default:
      return state;
  }
};

export default reducer;
export * from "./type";