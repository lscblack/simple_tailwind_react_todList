import { useState } from "react";
import { TextField } from "@mui/material";

const ViewTodo = ({ todos, Setodos }) => {
    const [search2, setSearch2] = useState("");
    const [search, setSearch] = useState("");
    const [todoName, setTodoName] = useState("");

    const filteredTodos = search2 !== "" ? todos.filter(todo => todo.todoStatus === (search2 === "true" ? true : false)) :
        (search !== "" ? todos.filter(todo => todo.todoName.toLowerCase().includes(search.toLowerCase())) : todos.slice().reverse());


    const removeTodo = (id) => {
        document.querySelectorAll(".hidden-inputs").forEach(input => input.classList.add('hidden'));
        let ans = confirm("Are you sure you want to remove this Task");
        if(ans){
            const newData = todos.filter(todo => todo.id != id);
            Setodos(newData)
        }
    }
    const updateTodo = (id) => {
        document.querySelectorAll(".hidden-inputs").forEach(input => input.classList.add('hidden'));

        const newData = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, todoStatus: !todo.todoStatus };
            }
            return todo;
        });

        Setodos(newData)
    }

    const updateTodoName = (id, name) => {

        document.querySelectorAll(".hidden-inputs").forEach(input => input.classList.add('hidden'));
        if (document.getElementById(id).classList.contains("hidden")) {
            document.getElementById(id).classList.remove("hidden");
        } else {
            document.getElementById(id).classList.add("hidden");
        }
        setTodoName(name)

    }
    const DoneEditing = (id) => {
        const newData = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, todoName: todoName };
            }
            return todo;
        });

        Setodos(newData)
        document.querySelectorAll(".hidden-inputs").forEach(input => input.classList.add('hidden'));

    }

    return <>
        <h2 className="p-1 pl-4 pt-4 font-bold text-gray-500">Manage Your Todos</h2>
        <div className="bg-slate-50 p-0 flex gap-4 items-center relative">
            <input
                type="text"
                className="p-3 bg-slate-50 pl-12 w-full outline-none rounded-md"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search For Todo Here (Name)"
            />
            <i className="fa fa-search text-blue-500 w-1/7 absolute left-5 text-2xl"></i>

            <select className="p-3 cursor-pointer bg-slate-50 mr-1 outline-none rounded-md" onChange={(e) => setSearch2(e.target.value)}>
                <option value="">All</option>
                <option value="flase">Not Done</option>
                <option value="true">Completed</option>
            </select>

        </div>

        <div className="columns-3 items-center cursor-pointer pt-4  top-0 text-center bg-slate-100 text-gray-700 p-3 h-14 rounded-t-md">
            <div className="text-left font-bold  w-full">Todo Name</div>
            <div className="text-left font-bold  w-full">
                Todo Status
            </div>
            <div className="text-right font-bold w-full">Todo Actions</div>
        </div>
        <div className="h-80 mt-2 rounded-b-md p-2 overflow-y-auto">

            {filteredTodos.map((todo, index) => (
                <>
                    <div key={index} className="columns-3 text-center  bg-white cursor-pointer text-gray-700 p-2">
                        <div className="w-full text-left font-bold ">{todo.todoName}</div>
                        <div className="w-full">
                            {!todo.todoStatus ? <p className="text-center rounded-full w-fit pl-2 pr-2 p-1 text-white font-normal text-xs bg-red-500 "><i className="fa fa-question-circle"></i> Not Done</p> : <p className="text-center rounded-full w-fit pl-2 pr-2 p-1 text-white font-normal text-xs bg-green-500 "><i className="fa fa-check-circle"></i> Done</p>}
                        </div>
                        <div className="flex items-end w-1/2 ml-auto gap-2 justify-between">
                            {todo.todoStatus ?
                                <i onClick={() => updateTodo(todo.id)} title="Mark as Un Done" className="fa fa-minus-circle text-gray-700 text-2xl" />
                                :
                                <i onClick={() => updateTodo(todo.id)} title="Mark As Done" className="fa fa-check-circle text-green-500 text-2xl" />
                            }
                            <i onClick={() => removeTodo(todo.id)} title="Delete Task" className="fa fa-times-circle text-red-500 text-2xl" />
                            <i onClick={() => updateTodoName(todo.id, todo.todoName)} title="Update " className="fas fa-edit text-blue-500 text-2xl" />

                        </div>
                    </div>
                    <div className="hidden-inputs p-1 flex gap-1 items-center  hidden" id={todo.id}>
                        <TextField
                            className="p-3 font-normal bg-slate-100 w-full outline-none rounded-sm mb-3"
                            value={todoName}
                            onChange={(e) => setTodoName(e.target.value)}
                            name="todo"
                            id="outlined-basic"
                            label="Enter New Todo Name (Task Name)"
                            variant="outlined"
                        />
                        <i onClick={() => DoneEditing(todo.id)} title="Done Editing" className="fa text-4xl text-green-600 cursor-pointer hover:text-green-700 fa-check-circle"></i>
                    </div>
                </>
            ))}
        </div>

    </>;
};
export default ViewTodo;