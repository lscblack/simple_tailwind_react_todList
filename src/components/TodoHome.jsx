import { useEffect, useState } from "react";
import AddTodo from "./pages/AddTodo";
import ViewTodo from "./pages/ViewTodo";
import NavBar from "./pages/navBar";
import { Footer } from "./pages/Footer";
import { Load } from "./pages/Load";
import { data } from "./react-data";

const TodoHome = () => {
    const [todos, Setodos] = useState(() => {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    // Update local storage whenever todos change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    const [load, setLoad] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 3000)
    }, [])

    return <>
        {/* #Load */}
        {load ?

            <div className="h-screen w-full flex justify-center items-center">
                <div className="flex flex-col items-center">
                    <Load></Load>
                    <center className="text-gray-500 font-normal animate-bounce">Manage Your Daily Actives</center>
                    <center className="text-gray-500 font-normal pt-10">Developed By {data}</center>
                </div>
            </div>
            :
            <>
                {/* #Navbar */}
                <div className="sticky top-0">
                    <NavBar></NavBar>
                </div>
                <div className="-mt-6">

                    <div className="flex gap-2  p-2 max-md:flex-wrap w-4/5 m-auto max-lg:w-full ">
                        <div className="w-full">
                            <AddTodo todos={todos} Setodos={Setodos}></AddTodo>
                        </div>
                        <div className="w-full max-sm:mt-10 rounded-b-md bg-white rounded-t-lg">
                            <ViewTodo todos={todos} Setodos={Setodos}></ViewTodo>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </>
        }
    </>;
};
export default TodoHome;