import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from './containers/Form'
import Todos from './components/Todos'
import AppContext from './contexts/AppContext'
import reducers from './reducers'

const App = () => {
  const initialState = {
    todos: []
  }
  const [state, dispatch] = useReducer(reducers, initialState)

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="container-fluid">
        <Form />
        <Todos />
      </div>
    </AppContext.Provider>
  );
}

export default App;
