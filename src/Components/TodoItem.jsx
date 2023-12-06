import CheckIcon from "../icon/CheckIcon";
import CrossIcon from "../icon/CrossIcon";

const TodoItem = ({ todo, updateTodo,  removeTodo, pepito }) => {
    const { id, title, completed } = todo;
    return (
        <article className="flex gap-4 border-b border-b-gray-400 ">
            <button
                onClick={() =>updateTodo(id)}
                className={`h-5 w-5 flex-none rounded-full border-2 ${ completed
                ? "grid place-item-center bg-gradient-to-tr from-indigo-500 via-purple-500 from-pink-500" : "inline-block"}`}
            >
            {
            completed && <CheckIcon/>
            }
            </button>
            <p className={`"text-gray-600 grow " ${completed && "line-through"}`}> {title} </p>
            <button onClick={() => removeTodo(id)}  className="flex-none" >
                <CrossIcon />
            </button>
        </article>
    );
};

export default TodoItem;
