import React from 'react';
import { Todo } from './Todo';
import { useSelector, useDispatch } from 'react-redux';
import { changeAllCompleted } from '../actions/todos';

export const Todos = props => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.todos.data);
    const { listTodos } = props;
    const checkBox = (
        <>
            <input id="checkbox__all" type="checkbox" className="checkbox__all" onChange={(e) => dispatch(changeAllCompleted(e.target.checked))} />
            <label htmlFor="checkbox__all" ></label>
        </>
    )

    return (
        <section className="todos">
            {data.length > 0 && checkBox}
            <ul>
                {
                    listTodos.map(todo => <Todo key={todo.key} todo={todo} />)
                }
            </ul>
        </section>
    );
};