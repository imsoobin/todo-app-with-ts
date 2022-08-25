import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTodo from "./component/AddTodo";
// import { useAppDispatch } from "./hooks";
// import { TodoState } from "./model/type";
// import { addTodo } from "./redux/reducer/todoListSlice";
// import { v4 as uuidv4 } from "uuid";
import Navbar from "./component/Navbar";
import TodoList from "./component/TodoList";

const App: React.FC = () => {
  // const dispatch = useAppDispatch();
  // const [todo, setTodo] = useState<TodoState>();
  // const [todos, setTodos] = useState<TodoState[]>([]);
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const name: any = e.target.name;
  //   const value: any = e.target.value;
  //   setTodo((prev: any) => ({ ...prev, [name]: value }));
  // };
  // const test = useAppSelector((state) => state.todoList.todoList);
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (todo) {
  //     dispatch(addTodo({ ...todo, id: uuidv4() }));
  //   }
  // };
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="/update/:id" element={<AddTodo />} />
      </Routes>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label>Title *</label>
          <input
            type={"text"}
            name="title"
            value={todo?.title}
            placeholder="title"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Author *</label>
          <input
            type={"text"}
            name="author"
            value={todo?.author}
            placeholder="Author"
            onChange={handleChange}
          />
        </div>
        <button type={"submit"}>Submit</button>
      </form>

      <div>
        <table className="table__todo">
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
          {test.map((todo, key) => (
            <tr key={key}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.author}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div> 
    */}
    </Router>
  );
};

export default App;
