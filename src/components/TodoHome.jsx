import { useEffect, useState } from "react";
import AddTodo from "./pages/AddTodo";
import ViewTodo from "./pages/ViewTodo";
import NavBar from "./pages/navBar";

const TodoHome = () => {
    const [todos, Setodos] = useState(() => {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
      });
    
      // Update local storage whenever todos change
      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);
    

    return <>
        {/* #Navbar */}
        <NavBar></NavBar>
        <div className="flex gap-2 p-2 max-md:flex-wrap w-4/5 m-auto max-lg:w-full max-sm:w-11/12 ">
            <div className="w-full">
                <AddTodo  todos={todos} Setodos={Setodos}></AddTodo>
            </div>
            <div className="w-full max-sm:mt-10 rounded-b-md bg-slate-200 rounded-t-lg">
                <ViewTodo todos={todos} Setodos={Setodos}></ViewTodo>
            </div>
        </div>
    </>;
};
export default TodoHome;