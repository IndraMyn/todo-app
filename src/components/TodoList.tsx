'use client'

import React from 'react';
import { Todo } from '../types/Todo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
  onEdit: (id: number, newTask: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onToggleComplete, onEdit }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onDelete={onDelete} 
          onToggleComplete={onToggleComplete} 
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
