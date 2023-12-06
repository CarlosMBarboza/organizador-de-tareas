const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto px-4">
            <div className="mt-8 flex justify-center rounded-md bg-white p-4 gap-4">
                <button 
                onClick={() => changeFilter ("all")}  
                className={`${filter === "all" ? "text-blue-500 hover:text-gray-500"
                                                                            : "text-gray-400 hover:text-blue-500"}`}>All</button>
                <button 
                onClick={() => changeFilter( "active")}  
                className={`${filter ==="active" ? "text-blue-500 hover:text-gray-500"
                                                                                : "text-gray-400 hover:text-blue-500"}`}>Active</button>
                <button 
                onClick={() => changeFilter("completed")}  
                className={`${filter ==="completed" ? "text-blue-500 hover:text-gray-500"
                                                                                            : "text-gray-400 hover:text-blue-500"}`}>Completed</button>
            </div>
            
        </section>
    );
};

export default TodoFilter;
