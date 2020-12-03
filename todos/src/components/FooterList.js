import React from 'react';
import * as Constants from '../constants/index';
import { useSelector, useDispatch } from 'react-redux';
import { changeStatus, removeAllCompleted } from '../actions/todos';

export const FooterList = props => {
    const dispatch = useDispatch();

    const data = useSelector(state => state.todos.data);
    const numberItemLeft = useSelector(state => state.todos.numberItemLeft);
    const activeList = useSelector(state => state.todos.status);

    return (
        <section className="footer-list">
            <span className="todo-count"><strong>{numberItemLeft}</strong> items left</span>
            <ul className="filters">
                <li><a href="#/" className={activeList === Constants.ALL ? "footer__selected" : ''} onClick={() => dispatch(changeStatus(Constants.ALL))} >All</a></li>
                <li><a href="#/active" className={activeList === Constants.ACTIVE ? "footer__selected" : ''} onClick={() => dispatch(changeStatus(Constants.ACTIVE))}>Active</a></li>
                <li><a href="#/completed" className={activeList === Constants.COMPLETED ? "footer__selected" : ''} onClick={() => dispatch(changeStatus(Constants.COMPLETED))}>Completed</a></li>
            </ul>
            <button className={data.some(todo => todo.completed === true) ? "clear-completed" : "clear-completed--hidden"} onClick={() => { dispatch(removeAllCompleted()) }}>Clear completed</button>
        </section>
    );
};
