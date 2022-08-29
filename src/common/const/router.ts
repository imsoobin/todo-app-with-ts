import React from "react";

const TodoList = React.lazy(() => import("../../component/TodoList"));
const AddTodo = React.lazy(() => import("../../component/AddTodo"));
const SubmitForm = React.lazy(() => import("../../screen/Submit"));

type Props = {
    path: string;
    element: React.LazyExoticComponent<React.FC<{}>>;
}[]

export const routers: Props = [
    { path: '/', element: TodoList },
    { path: '/add', element: AddTodo },
    { path: '/update/:id', element: AddTodo },
    { path: '/todo/:query', element: SubmitForm },
]