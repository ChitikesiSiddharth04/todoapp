import React from 'react';
import { Check, Trash2, Square } from 'lucide-react';
import type { Todo } from '../types/todo';

interface TodoListProps {
  todos: Todo[];
  onToggle: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => onToggle(todo)}
              className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                todo.completed
                  ? 'bg-green-500 border-green-500'
                  : 'border-gray-300 hover:border-green-500'
              }`}
            >
              {todo.completed ? (
                <Check className="w-4 h-4 text-white" />
              ) : (
                <Square className="w-4 h-4 text-transparent" />
              )}
            </button>
            <span
              className={`text-gray-800 ${
                todo.completed ? 'line-through text-gray-400' : ''
              }`}
            >
              {todo.title}
            </span>
          </div>
          <button
            onClick={() => onDelete(todo)}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </li>
      ))}
    </ul>
  );
}