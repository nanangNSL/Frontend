import { combineReducers } from "redux";
import menu from "./menu/index"
import modal from "./modal/index"


const rootReducer = combineReducers({
  menu,
  modal
}); 



export default rootReducer;