import React from 'react'

const Todos = () => {
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
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default Todos