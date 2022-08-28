import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./common/Loader/Loader";
const TodoList = React.lazy(() => import("./component/TodoList"));
const AddTodo = React.lazy(() => import("./component/AddTodo"));
const Navbar = React.lazy(() => import("./component/Navbar"));
const SubmitForm = React.lazy(() => import("./screen/Submit"));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/add" element={<AddTodo />} />
          <Route path="/update/:id" element={<AddTodo />} />
          <Route path="/todo/:query" element={<SubmitForm />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
