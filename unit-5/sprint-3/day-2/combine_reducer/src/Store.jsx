import { combineReducers, legacy_createStore as createStore } from 'redux';
import { counterreducer } from './Redux/counter/Reducer';
import { todosReducer } from './Redux/Todos/Reducer';
//4. store  > app.jsx

const rootReducer = combineReducers({
  counter: counterreducer,
  todosReducer: todosReducer
});

const store = createStore(rootReducer);
console.log('store:', store);

export { store };
