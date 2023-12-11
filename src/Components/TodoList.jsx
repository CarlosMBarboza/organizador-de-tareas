import TodoItem from "./TodoItem";

const TodoList = ({ todos, updateTodo, removeTodo }) => {
    return (
        <div className="mt-8 rounded-t-md overflow-hidden dark:bg-gray-900  transition-all duration-1000 bg-white [&>article]:p-4">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
