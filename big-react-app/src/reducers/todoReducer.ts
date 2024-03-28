/*
Reducer
----
  * is function that must take in two params (state, action)
  * this fn must return state 
  * we will never execute this fn directly
  * This fn can be executed ONLY by dispatching an action from comp

*/

interface Todo {
  id?: string;
  task: string;
  isCompleted: boolean;
}

// Let's identify the possible action types in todo app
type Action =
  | { type: "GET_TODOS"; payload: Todo[] }
  | { type: "ADD_TODO"; payload: Todo };

function todoReducer(state: Todo[], action: Action): Todo[] {
  // based on the action type this must return state
  console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case 'GET_TODOS':
      return action.payload;
      
    default:
      return state;
  }
}

export default todoReducer;
