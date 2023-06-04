import { combineReducers } from "redux";
import  itemReducer  from './itemReducer';

const reducers = combineReducers({
  items: itemReducer,
});

export default reducers;
// Learned Redux concept from https://www.youtube.com/watch?v=9boMnm5X9ak&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK