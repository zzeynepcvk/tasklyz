import React from 'react'

const TodoCard = ({ todo, onDelete, onToggle }) => {
  return (
    <div className={`flex items-center gap-4 p-6 rounded-2xl bg-white border-2 ${todo.completed ? 'border-cozy-purple-200' : 'border-cozy-pink-200'} shadow-sm transition-all hover:shadow-md`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-6 h-6 rounded-lg border-2 border-cozy-pink-300 text-cozy-pink-400 focus:ring-cozy-pink-400"
      />
      <p className={`flex-1 text-lg ${todo.completed ? 'line-through text-cozy-purple-300' : 'text-gray-700'}`}>
        {todo.text}
      </p>
      <button
        onClick={() => onDelete(todo.id)}
        className="p-2 text-cozy-pink-400 hover:text-cozy-pink-500 hover:bg-cozy-pink-100 rounded-xl transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  )
}

export default TodoCard
