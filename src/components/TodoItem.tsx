'use client'

import React, { useState } from 'react';
import { Todo } from '../types/Todo';

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
  onEdit: (id: number, newTask: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggleComplete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, editedTask);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`flex justify-between items-center p-2 mb-2 border rounded-lg transition-all ${todo.completed ? 'bg-green-200' : 'bg-white'}`}>
      <div className="flex items-center">
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={() => onToggleComplete(todo.id)} 
          className="mr-2"
        />
        {isEditing ? (
          <input 
            type="text" 
            value={editedTask} 
            onChange={(e) => setEditedTask(e.target.value)} 
            className="border p-1 rounded text-black"
          />
        ) : (
          <span className={`${todo.completed ? 'line-through text-black' : 'text-black'}`}>{todo.task}</span>
        )}
      </div>
      <div className="flex space-x-2">
        <button onClick={handleEdit} className="text-blue-500">{isEditing ? 'Save' : 'Edit'}</button>
        <button onClick={() => onDelete(todo.id)} className="text-red-500">Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
