// lay du lieu tu localStorage
export const getDataApi = (status) => {
    return {
        type: 'GET_DATA_API',
        payload: status,
    }
}

// them 1 item
export const addTodo = (newTodo) => {
    return {
        type: 'ADD_TODO',
        payload: newTodo,
    }
}

// change editing a item 
export const changeEditing = (key) => {
    return {
        type: 'CHANGE_EDITING',
        payload: key,
    }
}

// change status 
export const changeStatus = (status) => {
    return {
        type: 'CHANGE_STATUS',
        payload: status,
    }
}

// edit a item 
export const editTodo = (item) => {
    return {
        type: 'EDIT_TODO',
        payload: item,
    }
}

// remove a item
export const removeTodo = (key) => {
    return {
        type: 'REMOVE_TODO',
        payload: key,
    }
}

// remove all completed = trues
export const removeAllCompleted = () => {
    return {
        type: 'REMOVE_ALL_COMPLETED',
        payload: null,
    }
}

// change a completed
export const changeCompleted = (item) => {
    return {
        type: 'CHANGE_COMPLETED',
        payload: item,
    }
}

// change all completed

export const changeAllCompleted = (statusComplete) => {
    return {
        type: 'CHANGE_ALL_COMPLETED',
        payload: statusComplete,
    }
}

// get number item left
export const getNumberItemLeft = () => {
    return {
        type: 'GET_NUMBER_ITEM_LEFT',
        payload: null,
    }
}

