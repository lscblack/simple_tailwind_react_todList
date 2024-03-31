import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const AddTodo = ({ todos, Setodos }) => {
    const [todo, setTodo] = useState("");
    const [alertMessage, setAlertMessage] = useState(null);
    const [open, setOpen] = useState(false);
    const [sev, setSev] = useState("success")
    const addTodoTodoList = () => {
        if (todo.trim() !== "") {
            Setodos([...todos, { id: todos.length + 1, todoName: todo, todoStatus: false }]);
            setTodo("");
            setOpen(true);
            setSev("success")

            setAlertMessage("Added your todo");
        } else {
            setOpen(true);
            setSev("error")
            setAlertMessage("Can't save empty todos!");
        }
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className="m-auto rounded-md min-h-80 bg-white p-4 w-full">


            <Snackbar open={open}   autoHideDuration={1200} onClose={()=>handleClose}>
                <Alert
                    onClose={handleClose}
                    anchorOrigin={{ vertical: 'middle', horizontal: 'right' }}
                    severity={sev}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {alertMessage}
                </Alert>
            </Snackbar>


            <h2 className="p-4 pl-0 text-gray-500 text-2xl font-medium m-auto mb-2">Todo App</h2>
            <label className="text-gray-500 mb-2 block">Task Name</label>
            <TextField
                className="p-3 font-normal bg-slate-100 w-full outline-none rounded-sm mb-3"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                name="todo"
                id="outlined-basic"
                label="Enter Todo Name (Task Name)"
                variant="outlined"
            />

            <div className="mt-4">
                <Button
                    onClick={addTodoTodoList}
                    size="large"
                    className="w-full mt-10"
                    variant="contained"
                >
                    Add Todo
                </Button>
            </div>
            <div className="p-4">
                <div className="columns-1 w-full border-b-2 pt-1 text-2xl pb-2 text-center font-bold mb-3 text-gray-500">
                    Todos Summary
                </div>
                <div className="columns-2 w-full text-center text-gray-500">
                    <p className="font-normal">Not Done</p>
                    <p className="font-normal">Completed</p>
                </div>
                <div className="columns-2 text-center w-full border-b-2 pt-1 pb-2 text-gray-500">
                    <p>{todos.filter(todo => todo.todoStatus === false).length}</p>
                    <p>{todos.filter(todo => todo.todoStatus === true).length}</p>
                </div>
                <div className="columns-2 text-center">
                    <h2 className="p-4 pl-0 text-gray-500 text-2xl font-medium m-auto mb-2">Total</h2>
                    <h2 className="p-4 pl-0 text-gray-500 text-2xl font-medium m-auto mb-2">{todos.length}</h2>
                </div>
            </div>
        </div>
    );
};

export default AddTodo;
