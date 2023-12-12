import{DragDropContext, Droppable, Draggable} from "@hello-pangea/dnd"

import TodoComputed from "./Components/TodoComputed";
import TodoCreate from "./Components/TodoCreate";
import TodoFilter from "./Components/TodoFilter";
import TodoHeader from "./Components/TodoHeader";
import TodoList from "./Components/TodoList";
import { useEffect, useState } from "react";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];
const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
}

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };
    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
        };
        const updateTodo = (id)=> {
            setTodos(
            todos.map((todo)=>
            todo.id === id ?{ ...todo ,completed : !todo.completed} : todo )
            )
        }

    const computedItemLeft = todos.filter((todo) => !todo.completed).length;
    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    }

    const[filter, setFilter]= useState("all")

    const changeFilter = (filter) => setFilter(filter)

    const filteredTodos = () =>{
        switch(filter){
            case "all":
                return todos;
            case "active" :
                return todos.filter((todo) =>!todo.completed );
            case "completed":
                return todos.filter((todo) => todo.completed );
            default:
                return todos;
        }
    }
const handleDragEnd = (result) => {
    const {destination, source} = result;
    if(!destination) return;
    if(destination.index === source.index && 
        source.droppableId === destination.droppableId) return;
        setTodos((prevTasks)=> reorder(prevTasks, source.index, destination.index))
}

    return (
        <div className="
            dark:bg-gray-900  bg-contain bg-no-repeat bg-gray-300 min-h-screen transition-all duration-1000
            bg-[url('./assets/images/bg-mobile-light.jpg')] 
            dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
            md:bg-[url('./assets/images/bg-desktop-light.jpg')]
            md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] ">
            <TodoHeader />

            <main className="container mx-auto mt-8 px-4  md:max-w-xl  ">
                <TodoCreate
                    createTodo={createTodo}
                />
                <DragDropContext onDragEnd={handleDragEnd}>
                        <TodoList
                        todos={ filteredTodos()}  
                        removeTodo= { removeTodo}  
                        updateTodo={ updateTodo} 
                        />
                </DragDropContext>

                <TodoComputed 
                computedItemLeft={computedItemLeft}  
                clearCompleted={ clearCompleted} 
                />
                <TodoFilter changeFilter={changeFilter}  filter={filter} />
            </main>

            <footer className="text-center  dark:bg-gray-900 dark:text-gray-400 transition-all duration-1000">
                Drag and drop to reorder list
            </footer>
        </div>
    );
};

export default App;
