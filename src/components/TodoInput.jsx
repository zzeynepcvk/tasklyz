import React, { useState } from 'react'

const TodoInput = ({ addTodo }) => {
  const [todo, setTodo] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!todo) return
    addTodo(todo)
    setTodo("")
  }

  return (
    <header className="max-w-2xl mx-auto w-full p-4">
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a new todo..."
          className="flex-1 px-6 py-4 rounded-2xl border-2 border-cozy-pink-200 bg-white focus:outline-none focus:border-cozy-pink-400 transition-colors placeholder:text-cozy-pink-300"
        />
        <button
          type="submit"
          className="px-8 py-4 bg-cozy-pink-400 text-white rounded-2xl hover:bg-cozy-pink-500 transition-colors font-semibold shadow-lg shadow-cozy-pink-200"
        >
          Add
        </button>
      </form>
    </header>
  )
}

export default TodoInput