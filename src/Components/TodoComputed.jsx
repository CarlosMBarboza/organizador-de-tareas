const TodoComputed = ({ computedItemLeft,  clearCompleted }) => {
    return (
        <section className="flex justify-between p-4 bg-white rounded-b-md  dark:bg-gray-700 transition-all duration-1000">
            <span className="text-gray-400">{computedItemLeft}</span>
            <button onClick={ clearCompleted} className="text-gray-400">Clear completed</button>
        </section>
    );
};

export default TodoComputed;
