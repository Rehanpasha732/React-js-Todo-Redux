import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, editTodo, deleteAll } from "../redux/actions";
import { DeleteOutlined } from '@ant-design/icons'
import { EditOutlined } from '@ant-design/icons'
export const TodoLists = () => {
    const todos = useSelector((state) => state.todoReducer.todos);
    const dispatch = useDispatch();
    const actionClick = (data) => {
        if (data && data?.type === "edit") {
            dispatch(editTodo(data?.todo?.id));
        } else if (data && data?.type === "delete") {
            dispatch(deleteTodo(data?.todo?.id));
        }
        else if (data && data?.type === 'deleteAll') {
            dispatch(deleteAll(data?.todos?.id))
        }
    };
    return (
        <div className="container my-2">
            <table className="table">
                <tbody>
                    {todos && todos.map((todo, index) => (
                        <tr>
                            <td className="td" style={{ width: "80%" }}>{todo?.title}</td>

                            <button
                                className="btn_edt"
                                onClick={() => actionClick({ todo: todo, type: "edit" })}
                            >
                                <EditOutlined />
                            </button>
                            <button
                                className="btn_dlt"
                                onClick={() => actionClick({ todo: todo, type: "delete" })}
                            >
                                <DeleteOutlined />
                            </button>


                        </tr>
                    ))}
                </tbody>
            </table>

            {
                todos.length > 2

                    ?

                    <buttton className="btn_dlt" onClick={() => actionClick({ todos: todos, type: 'deleteAll' })}>
                        <span className="delete_all">Delete All</span>
                    </buttton>
                    :
                    null

            }

        </div>
    );
};