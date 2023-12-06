import MoonIcon from "../icon/MoonIcon";

const TodoHeader = () => {
    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="text-white text-3xl font-semibold  tracking-[0.4em]">
                    To-Do
                </h1>
                <button>
                    <MoonIcon className="fill-red-400" />
                </button>
            </div>
        </header>
    );
};

export default TodoHeader;
