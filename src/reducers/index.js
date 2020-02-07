import { combineReducers } from 'redux'

function todos(state = [], action) {
  switch (action.type) {
      case 'addtodo':
          return [...state, {
              text: action.payload,
              completed: false
          }]
      case 'click':
          return (
              state.map((todo, index) => {
                  if (action.index === index) {
                      return {
                          text: todo.text,
                          completed: !todo.completed
                      }
                  }
                  return todo;
              })
          )
      case 'addtodos':
          return state.concat(action.payload);
      case 'deleteDone':
          return state.filter((t)=>!t.completed)
      default:
          return state
  }
}

function filter(state = 'all', action) {
  switch (action.type) {
      case 'setFilter':
          return action.payload;
      default:
          return state;
  }
}

function fetching(state = false, action) {
  switch (action.type) {
      case 'doing':
          return true;
      case 'cancle':
          return false;
      case 'done':
          return false;
      default:
          return state;
  }
}
export default combineReducers({ todos, filter, fetching });