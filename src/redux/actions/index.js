import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    UPDATE_TODO,
    DLT_All,
} from "./actionTypes";
var save = localStorage.setItem(ADD_TODO , "add_todo")
console.log(save)
export const addNewTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: {
            id: Math.random(),
            title: todo?.title,
        },
    };
};
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id,
    };
};

export const editTodo = (id) => {
    return {
        type: EDIT_TODO,
        payload: {
            id: id,
        },
        isEdit: true,
    };
};

export const updateTodo = (id, todo) => {
    return {
        type: UPDATE_TODO,
        payload: {
            todoId: id,
            todoTitle: todo?.title,
        },
    };
};

export const deleteAll = (id,todo)=>{
    return{
        type:DLT_All,
        payload:{
            todoId:id,
            todoTitle:todo?.title,
        }
    }
}