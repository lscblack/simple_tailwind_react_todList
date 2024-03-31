import { useState } from "react";


const ViewTodo = ({ todos, Setodos }) => {
    const [search2, setSearch2] = useState("");
    const [search, setSearch] = useState("");

    const filteredTodos = search2 !== "" ? todos.filter(todo => todo.todoStatus === (search2 === "true" ? true : false)) :
        (search !== "" ? todos.filter(todo => todo.todoName.toLowerCase().includes(search.toLowerCase())) : todos.slice().reverse());


    const removeTodo = (id) => {
        const newData = todos.filter(todo => todo.id != id);
        Setodos(newData)
    }
    const updateTodo = (id) => {
        const newData = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, todoStatus: !todo.todoStatus };
            }
            return todo;
        });

        Setodos(newData)
    }
    return <>
        <h2 className="p-2 font-normal text-gray-700">Manage Your Todos</h2>
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
                <div key={index} className="columns-3 text-center  bg-white cursor-pointer text-gray-700 p-2">
                    <div className="w-full text-left font-bold ">{todo.todoName}</div>
                    <div className="w-full">
                        {!todo.todoStatus ? <p className="text-center rounded-full w-fit pl-2 pr-2 p-1 text-white font-normal text-xs bg-red-500 "><i className="fa fa-question-circle"></i> Not Done</p> : <p className="text-center rounded-full w-fit pl-2 pr-2 p-1 text-white font-normal text-xs bg-green-500 "><i className="fa fa-check-circle"></i> Done</p>}
                    </div>
                    <div className="flex items-end w-1/2 ml-auto justify-between">
                        {todo.todoStatus ?
                            <i onClick={() => updateTodo(todo.id)} title="Mark as Un Done" className="fa fa-minus-circle text-gray-700 text-2xl"></i>
                            :
                            <i onClick={() => updateTodo(todo.id)} title="Mark As Done" className="fa fa-check-circle text-green-500 text-2xl"></i>
                        }
                        <i onClick={() => removeTodo(todo.id)} title="Delete Task Update" className="fa fa-times-circle text-red-500 text-2xl"></i>
                    </div>
                </div>
            ))}
        </div>

    </>;
};
export default ViewTodo;