import React, { useContext, useState } from 'react';
import AppContext from '../contexts/AppContext';
import { CREATE_TODO } from '../actions';

const Form = () => {

    const { dispatch } = useContext(AppContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')


    const addTodo = e => {
        e.preventDefault()
        dispatch({
            type: CREATE_TODO,
            title,
            body
        })
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="title">タイトル</label>
                <input className="form-control" id="title" placeholder="タイトル" value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="body">ボディ</label>
                <textarea className="form-control"　id="body" placeholder="説明を入力" value={body} onChange={e => setBody(e.target.value)}></textarea>
            </div>
            <div className="form-group">
                <button className="btn btn-primary" onClick={addTodo}>todoを作成</button>
            </div>            
        </form>
    )
}

export default Form