import { produce } from 'immer';
import * as Constants from '../constants/index';

const initialState = {
    data: [],
    numberItemLeft: 0,
    status: Constants.ALL,
}

export const todos = (state = initialState, action) => {
    switch (action.type) {
        // get data from localStorage
        case 'GET_DATA_API': {
            return produce(state, (draftSate) => {
                const listTodos = JSON.parse(localStorage.getItem(Constants.LIST_TODOS)) || [];
                draftSate.data = listTodos;
            });
        }
        // add 1 item
        case 'ADD_TODO': {
            return produce(state, (draftSate) => {
                draftSate.data.push(action.payload);
                localStorage.setItem(Constants.LIST_TODOS, JSON.stringify(draftSate.data));
            });
        }
        // change editing a item 
        case 'CHANGE_EDITING': {
            return produce(state, (draftSate) => {
                let index = draftSate.data.findIndex((item) => item.key === action.payload);
                draftSate.data[index].editing = true;
                localStorage.setItem(Constants.LIST_TODOS, JSON.stringify(draftSate.data));
            });
        }

        // change status 
        case 'CHANGE_STATUS': {
            return produce(state, (draftSate) => {

                draftSate.status = action.payload;
            });
        }

        // edit todo
        case 'EDIT_TODO': {
            return produce(state, (draftSate) => {
                let index = draftSate.data.findIndex((item) => item.key === action.payload.key);
                draftSate.data[index].editing = false;
                draftSate.data[index].title = action.payload.title;
                localStorage.setItem(Constants.LIST_TODOS, JSON.stringify(draftSate.data));
            });
        }

        case 'REMOVE_TODO': {
            return produce(state, (draftSate) => {
                const todos = draftSate.data.filter(todo => todo.key !== action.payload);
                draftSate.data = todos;
                localStorage.setItem(Constants.LIST_TODOS, JSON.stringify(draftSate.data));
            });
        }

        case 'REMOVE_ALL_COMPLETED': {
            return produce(state, (draftSate) => {
                const todos = draftSate.data.filter(todo => todo.completed === false);
                draftSate.data = todos;
                localStorage.setItem(Constants.LIST_TODOS, JSON.stringify(draftSate.data));
            });
        }

        case 'CHANGE_COMPLETED': {
            return produce(state, (draftSate) => {
                const index = draftSate.data.findIndex(todo => todo.key === action.payload.key);
                draftSate.data[index].completed = action.payload.statusChecked;
                localStorage.setItem(Constants.LIST_TODOS, JSON.stringify(draftSate.data));
            });
        }

        case 'CHANGE_ALL_COMPLETED': {
            return produce(state, (draftSate) => {
                const newData = draftSate.data.map(todo => {
                    todo.completed = action.payload;
                    return todo;
                });
                draftSate.data = newData;;
                localStorage.setItem(Constants.LIST_TODOS, JSON.stringify(draftSate.data));
            });
        }

        case 'GET_NUMBER_ITEM_LEFT': {
            return produce(state, (draftSate) => {
                draftSate.numberItemLeft = draftSate.data.reduce((a, b) => {
                    if (!b.completed) {
                        a = a + 1;
                        return a;
                    }
                    return a;
                }, 0)
            });
        }

        default: return state
    }
}
