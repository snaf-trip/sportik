import React from 'react';
import TodoList from './Todo/TodoList';

function App() {

  const todos = [
    { id: 1, complited: false, title: 'Купить хлеб' },
    { id: 2, complited: false, title: 'Купить масло' },
    { id: 3, complited: false, title: 'Купить купить молоко' }
  ]

  return (
    <div className='wrapper'>
      <h1>Learning React</h1>

      <TodoList todos={todos} />
    </div>
  );
}

export default App;
