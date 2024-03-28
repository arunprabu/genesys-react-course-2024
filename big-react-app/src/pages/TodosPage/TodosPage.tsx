import { useEffect, useReducer, useRef } from "react";
import todoReducer from "../../reducers/todoReducer";

const TodosPage: React.FC = () => {
  console.log('1. Program Started');
  const todoItemStyle = {
    width: "72%",
    display: "inline-block",
  };

  // to read todo input data -- let's use useRef 
  const todoInput  = useRef<HTMLInputElement>(null);
  console.log(todoInput);

  const [todoState, todoDispatch] = useReducer(todoReducer, []);
  // all todos will be in todoState
  // todoDispatch is a fn to update the todoState

  useEffect(() => {
    // connect to the rest api on load
    const todos = [
      {
        id: "34213242", 
        task: 'random todo',
        isCompleted: false
      }
    ];
    todoDispatch({
      type: "GET_TODOS",
      payload: todos,
    });
  }, []);
  
  const handleAddTodo = () => {
    console.log('Adding todo');
    if(todoInput.current != null){
      console.log(todoInput.current.value);
      // before dispatch connect to rest api and get this saved;
      // calling dispatch with action object
      todoDispatch({
        type: "ADD_TODO",
        payload: {
          id: new Date().toISOString(),
          task: todoInput.current.value,
          isCompleted: false,
        },
      });
    }
  }

  console.log("2. Program Ended");
  return (
    <div className="row">
      <h1>Todos</h1>

      <div className="col-md-6 offset-md-3">
        <p>Listing Todos</p>
        <div className="input-group mb-3">
          {/* Let's try uncontrolled component */}
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo"
            ref={todoInput}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleAddTodo}
          >
            ADD
          </button>
        </div>

        <ul className="list-group">
          {todoState &&
            todoState.map((todo) => {
              return (
                <li className="list-group-item" key={todo.id}>
                  <span style={todoItemStyle}>{todo.task}</span>
                  <span className="text-end">
                    <button className="btn btn-sm btn-dark">Edit</button>{" "}
                    <button className="btn btn-sm btn-dark">Delete</button>
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default TodosPage;
