import React, {useContext} from 'react'
import AppContext from '../contexts/AppContext'
import {
    DELETE_TODO
} from '../actions'

const Todo = ({ todo }) => {
    const { dispatch } = useContext(AppContext)

    const handleClickDeleteButton = e => {
        e.preventDefault()
        dispatch({
            type: DELETE_TODO,
            id: todo.id
        })
    }

    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.body}</td>
            <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
        </tr>   
    )
}

export default Todo