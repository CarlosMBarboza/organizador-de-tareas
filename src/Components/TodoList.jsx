import{Droppable, Draggable} from "@hello-pangea/dnd"

import TodoItem from "./TodoItem";

const TodoList = ({ todos, updateTodo, removeTodo }) => {
    return (
        <Droppable droppableId="todos">
            {
                (droppableprovided) => (
                    <div
                        ref={droppableprovided.innerRef}
                        {...droppableprovided.droppableProps}

                        className="mt-8 rounded-t-md overflow-hidden dark:bg-gray-900  transition-all duration-1000 bg-white [&>article]:p-4"
                    >
                        {todos.map((todo, index) => (
                            <Draggable   key={todo.id} index={index} draggableId={`${todo.id}`}>
                                {
                                    (draggableprovided)=> (
                                        <TodoItem
                                        todo={todo}
                                        removeTodo={removeTodo}
                                        updateTodo={updateTodo}
                                        ref={draggableprovided.innerRef}
                                        {...draggableprovided.draggableProps}
                                        {...draggableprovided.dragHandleProps}
                                    />
                                    )
                                }
                            </Draggable>
                        ))}
                        {droppableprovided.placeholder}
                    </div>
                )
            }
        </Droppable>
    );
};

export default TodoList;
