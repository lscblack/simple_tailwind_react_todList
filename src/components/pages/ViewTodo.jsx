

const ViewTodo = ({ todos, Setodos }) => {
    const reversedTodos = [...todos].reverse();
    const removeTodo = (id) => {
        const newData = todos.filter(todo => todo.id != id);
        Setodos(newData)
    }
    const updateTodo = (id) => {
        const newData = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, todoStatus: true };
            }
            return todo;
        });

        Setodos(newData)
    }
    return <>
        <div className="columns-3 items-center cursor-pointer sticky top-0 text-center bg-slate-700 text-white p-3 h-14 rounded-t-md">
            <div className="text-left w-full">Todo Name</div>
            <div className="text-left w-full">Todo Status</div>
            <div className="text-right w-full">Todo Actions</div>
        </div>
        <div className="h-60 mt-2 rounded-b-md p-2 overflow-y-auto">

            {reversedTodos.map((todo, index) => (
                <div key={index} className="columns-3 text-center  bg-slate-200 cursor-pointer text-black p-2">
                    <div className="w-full text-left">{todo.todoName}</div>
                    <div className="w-full">
                        {!todo.todoStatus ? <p className="text-center rounded-full w-fit pl-2 pr-2 p-1 text-white font-normal text-xs bg-red-500 "><i className="fa fa-question-circle"></i> Not Done</p> : <p className="text-center rounded-full w-fit pl-2 pr-2 p-1 text-white font-normal text-xs bg-green-500 "><i className="fa fa-check-circle"></i> Done</p>}
                    </div>
                    <div className="flex items-end w-1/2 ml-auto justify-between">
                        {todo.todoStatus ?
                            <i title="Mark As Done" className="fa fa-check-circle text-gray-500 text-2xl"></i>
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