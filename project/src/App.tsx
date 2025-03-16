import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { ListTodo } from 'lucide-react';
import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';
import type { Todo } from './types/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      created_at: new Date().toISOString()
    };
    setTodos([newTodo, ...todos]);
    toast.success('Todo added successfully');
  };

  const toggleTodo = (todo: Todo) => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (todo: Todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
    toast.success('Todo deleted successfully');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <Toaster position="top-right" />
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <ListTodo className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-800">Todo List</h1>
          </div>
          <TodoInput onAdd={addTodo} />
          <div className="mt-6">
            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
            {todos.length === 0 && (
              <p className="text-center text-gray-500 mt-4">
                No todos yet. Add one above!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;