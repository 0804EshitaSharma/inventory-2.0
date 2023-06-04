import {createStore} from 'redux';
import reducers from './reducers/index';
const store = createStore(reducers);
export default store;
// Learned Redux concept from https://www.youtube.com/watch?v=9boMnm5X9ak&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK