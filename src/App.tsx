import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./common/Loader/Loader";
const TodoList = React.lazy(() => import("./component/TodoList"));
const AddTodo = React.lazy(() => import("./component/AddTodo"));
const Navbar = React.lazy(() => import("./component/Navbar"));
const SignUp = React.lazy(() => import("./screen/SignUp"));
const Login = React.lazy(() => import("./screen/Login"));
// import { useAppDispatch } from "./hooks";
// import { TodoState } from "./model/type";
// import { addTodo } from "./redux/reducer/todoListSlice";
// import { v4 as uuidv4 } from "uuid";

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
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/add" element={<AddTodo />} />
          <Route path="/update/:id" element={<AddTodo />} />
          <Route path="/todo/:signup" element={<SignUp />} />
          <Route path="/todo/:login" element={<Login />} />
          {/* <Route path="/todo/:query" element={<Login />} /> */}
        </Routes>
      </Suspense>
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
