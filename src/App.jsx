import { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'


function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    setTodos([...todos, {
      id: Date.now(),
      text,
      completed: false
    }])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b bg-pink-100 bg-rose-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-cozy-pink-500">Cozy Todo List</h1>
        <TodoInput addTodo={addTodo} />
        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
        />
      </div>
    </div>
  )
}

export default App
