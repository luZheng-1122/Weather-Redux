import { combineReducers } from 'redux';
//get data from a reducer BooksReducer
import WeatherReducer from './reducer_weather';

//set application state 'books', 
//so any other component could access to this state 'books'
//这个变量组成了该application的所有state，可以在全局任何一个组件（或container）中访问
const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;