import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todos';

export const Header = props => {
    const dispatch = useDispatch();
    const submitTodo = (event) => {
        event.preventDefault();
        if (event.target.children[1].value) {
            const todo = {
                key: "" + new Date().valueOf(),
                title: event.target.children[1].value,
                completed: false,
                editing: false
            }
            const action = addTodo(todo);
            dispatch(action);
            event.target.children[1].value = ''
        }
    }

    return (
        <form className="header" onSubmit={submitTodo}>
            <h1>todos</h1>
            <input
                placeholder="What needs to be done?"
                className="item"
                autoFocus
            />
        </form>
    );
};
