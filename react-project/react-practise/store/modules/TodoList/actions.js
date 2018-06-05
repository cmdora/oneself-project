export const ADD_TODO = 'ADD_TODO'

export const add_todo = (text) => {
    return {
        type: ADD_TODO,
        text: text
    }
}