import React, { useState, useRef } from 'react';
import { useOutsideClick } from '../utils/common'

import { useDispatch } from 'react-redux';
import { changeEditing, changeCompleted, removeTodo, editTodo } from '../actions/todos';

export const Todo = props => {
    const dispatch = useDispatch();
    const { todo } = props;
    const textInput = useRef(null);
    const [title, setTitle] = useState(todo.title);
    
    useOutsideClick(textInput, () => {
        if (title.length > 0)
            dispatch(editTodo({ key: todo.key, title }))
    })
    return (
        <li className={`${todo.editing ? 'editing' : ''} ${todo.completed ? 'completed' : ''}`}>
            {
                !todo.editing ?

                    <div className="todo" onDoubleClick={() => dispatch(changeEditing(todo.key))}>
                        <input type="checkbox" className="todo__input" onChange={(e) => dispatch(changeCompleted({ key: todo.key, statusChecked: e.target.checked }))} checked={todo.completed} />
                        <label className={todo.completed ? "selected" : "unselected"} >{todo.title}</label>
                        <button className="todo__x" onClick={() => dispatch(removeTodo(todo.key))}></button>
                    </div> :
                    <input
                        className="edit"
                        ref={textInput}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter' && title) {
                                dispatch(editTodo({ key: todo.key, title }))
                            }
                        }}
                    />
            }
        </li>
    );
};


