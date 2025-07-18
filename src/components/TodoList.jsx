import React from 'react'
import TodoCard from './TodoCard'

const TodoList = ({ todos, onDelete, onToggle }) => {
  if (todos.length === 0) {
    return (
      <div className="max-w-2xl mx-auto w-full p-4">
        <p className="text-center text-cozy-pink-400 text-lg">No todos yet! Add one above.</p>
      </div>
    )
  }

  return (
    <main className="max-w-2xl mx-auto w-full p-4">
      <div className="flex flex-col gap-4">
        {todos.map(todo => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </div>
    </main>
  )
}

export default TodoList
