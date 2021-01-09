import React from 'react';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Todo from './components/Todo';
import VisibilityFilters from './components/VisibilityFilters';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
      <Todo />
      <VisibilityFilters />
    </div>
  );
}

export default App;
