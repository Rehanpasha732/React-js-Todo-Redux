import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, updateTodo } from "../redux/actions";
import "./style.css"

export const AddTodo = () => {
    const [value, setValue] = useState({});
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const isEdit = useSelector((state) => state.todoReducer.isEdit);
    const editTodo = useSelector((state) => state.todoReducer.editTodo);
     useEffect(() => {
        editTodo && setValue(() => editTodo);
    }, [editTodo]);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!value?.title) {
            setError((error) => ({
                ...error,
                title: 'enter todo',
            }));
            return;
        }


        if (isEdit) {
            dispatch(updateTodo(editTodo.id, value));
        }
        else {
            dispatch(addNewTodo(value));
        }
        setValue({ title: '' });
        document.getElementById("todoForm").reset();
    };

    const changeEvent = (e) => {
        setValue(
            {
                ...value,
                [e.target.name]: e.target.value,
            },
        );

    };

    return (
        <div className="main">
            <form className="mt-3 mb-2" id="todoForm" onSubmit={onSubmit}>
                <div className="todo">
                    <div className="col-xl-3">
                        <input
                            type="text"
                            name="title"
                            className="input"
                            placeholder="Enter Todo"
                            defaultValue={value?.title}
                            onChange={(e) => changeEvent(e)}
                        />
                        <span className="text-danger">{error?.title}</span>
                    </div>

                </div>
                <div className="add_btn">
                    <button className="button" type="submit"> {isEdit ? 'Update Todo' : 'Enter Your Todo'} </button>
                </div>
            </form>
        </div>
        // </div>
    );
};