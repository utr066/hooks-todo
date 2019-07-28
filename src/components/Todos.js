import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import Todo from '../containers/Todo'

const Todos = () => {
    const { state } = useContext(AppContext)

    return (
        <React.Fragment>
        <h4>Todo一覧</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>タイトル</th>
                        <th>ボディー</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {state.todos.map((todo, index) => (<Todo key={index} todo={todo}/>))}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default Todos