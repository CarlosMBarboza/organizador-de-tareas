import CheckIcon from "../icon/CheckIcon";
import CrossIcon from "../icon/CrossIcon";
import React from "react";

const TodoItem =React.forwardRef(({ todo, updateTodo, removeTodo, ...props }, ref) => {
        const { id, title, completed } = todo;
        return (
            <article {...props} ref={ref} className="flex gap-4 border-b border-b-gray-400 dark:bg-gray-700 transition-all duration-1000 ">
                <button
                    onClick={() =>updateTodo(id)}
                    className={`h-5 w-5 flex-none rounded-full border-2 ${ completed
                    ? "grid place-item-center bg-gradient-to-tr from-indigo-500 via-purple-500 from-pink-500" : "inline-block"}`}
                >
                {
                completed && <CheckIcon/>
                }
                </button>
                <p className={`"text-gray-600 dark:text-gray-400 grow " ${completed && "line-through"}`}> {title} </p>
                <button onClick={() => removeTodo(id)}  className="flex-none" >
                    <CrossIcon />
                </button>
            </article>
        );
    })
export default TodoItem;
