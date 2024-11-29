export interface Todo {
    id: number;
    task: string;
    completed: boolean;
  }
  
  export type TodoAction = 'add' | 'edit' | 'delete' | 'toggle';
  