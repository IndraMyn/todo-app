'use client'
import { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import SearchBar from '../components/SearchBar';
import { Todo } from '../types/Todo';

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // // Fetch data from a public API (e.g., time, weather, or location)
    // fetch('https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=e586c82b191e4dc507a242117965bc20')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setTodos([
    //       { id: 1, task: `Weather in Bandung: ${data.weather[0].description}`, completed: false },
    //     ]);
    //   });
    setTodos([
      { id: 1, task: `bandung`, completed: false },
    ]);
  }, []);

  const addTodo = (task: string) => {
    const newTodo: Todo = { id: Date.now(), task, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTodo = (id: number, newTask: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, task: newTask } : todo
    ));
  };

  const filteredTodos = todos.filter(todo =>
    todo.task.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-xl font-bold text-center mb-4">Todo App</h1>
      <SearchBar query={query} onSearch={setQuery} />
      <div className="mb-4">
        <input
          type="text"
          placeholder="Add a new task"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTodo((e.target as HTMLInputElement).value);
              (e.target as HTMLInputElement).value = '';
            }
          }}
          className="border p-2 rounded w-full text-black"
        />
      </div>
      <TodoList 
        todos={filteredTodos} 
        onDelete={deleteTodo} 
        onToggleComplete={toggleComplete} 
        onEdit={editTodo} 
      />
    </div>
  );
};

export default Home;
