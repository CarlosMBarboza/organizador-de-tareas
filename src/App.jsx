import TodoComputed from "./Components/TodoComputed";
import TodoCreate from "./Components/TodoCreate";
import TodoFilter from "./Components/TodoFilter";
import TodoHeader from "./Components/TodoHeader";
import TodoList from "./Components/TodoList";
import { useState } from "react";

const initialStateTodos = [];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

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

    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')]   bg-contain bg-no-repeat bg-gray-300 min-h-screen">
            <TodoHeader />

            <main className="container mx-auto mt-8 px-4">
                <TodoCreate
                    createTodo={createTodo}
                />

                <TodoList
                todos={ filteredTodos()}  
                removeTodo= { removeTodo}  
                updateTodo={ updateTodo} 
                />
                <TodoComputed 
                computedItemLeft={computedItemLeft}  
                clearCompleted={ clearCompleted} 
                />
                <TodoFilter changeFilter={changeFilter}  filter={filter} />
            </main>

            <footer className="text-center">
                Drag and drop to reorder list
            </footer>
        </div>
    );
};

export default App;
