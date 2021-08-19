import React from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';

function App() {

  const [todos, setTodos] = React.useState([
    { id: 1, complited: false, title: 'Купить хлеб' },
    { id: 2, complited: false, title: 'Купить масло' },
    { id: 3, complited: false, title: 'Купить молоко' },
    { id: 4, complited: false, title: 'Купить мясо' },
    { id: 5, complited: false, title: 'Сделать уроки' }
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.complited = !todo.complited;
        }
        return todo;
      })
    );
  };

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
        <h1>Learning React</h1>

        <TodoList todos={todos} onToggle={toggleTodo} />
      </div>
    </Context.Provider>
  );
}

export default App;
