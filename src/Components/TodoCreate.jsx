import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    
    const [title, setTitle] = useState("");

    const hamdleSubmitTodo = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            return setTitle("");
        }
        createTodo(title);
        setTitle("");
    };
    return (
        <form
            onSubmit={hamdleSubmitTodo}
            className="flex gap-4 mt-8 overflow-hidden rounded-md bg-white p-2 items-center"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2">
                {" "}
            </span>
            <input
                className="w-full text-gray-400 outline-none"
                type="text"
                placeholder="add task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
