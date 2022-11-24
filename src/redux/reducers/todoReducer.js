import {
    ADD_TODO,
    DELETE_TODO,
    DLT_All,
    EDIT_TODO,
    UPDATE_TODO,
} from "../actions/actionTypes";

const initialState = {
    todos: [],
    isEdit: false,
    editTodoId: "",
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const { id, title } = action.payload;
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: id,
                        title: title,
                        isCompleted: false,
                        isPending: true,
                    },
                ],
                isEdit: action.isEdit,
            };
        case DELETE_TODO:
            const newTodoList = state.todos.filter((item) => item.id != action.id);
            return {
                ...state,
                todos: newTodoList,
            };

        case EDIT_TODO:
            const editTodo = action.payload;
            let newEditTodo = state?.todos?.find((item) => item?.id === editTodo?.id);
            return {
                ...state,
                isEdit: action.isEdit,
                editTodo: newEditTodo,
            };

        case UPDATE_TODO:
            const { todoId, todoTitle } = action.payload;
            const todos = state.todos.filter((todo) => {
                return todo.id !== todoId;
            });

            const todo = state.todos.find((todo) => todo?.id === todoId);
            todo.title = todoTitle;

            todos.push(todo);

            return {
                ...state,
                todos: [...todos],
                isEdit: false,
            };
        case DLT_All:
            return {
                todos: []
            }
        default:
            return state;
    }


};
export default todoReducer;