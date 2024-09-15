import { Task } from '../models/Task';

let tasks: Task[] = [
  { id: 1, title: 'Task 1', description: 'Learn TypeScript', completed: false },
  { id: 2, title: 'Task 2', description: 'Build an API', completed: false }
];

export const getTasks = (): Task[] => {
  return tasks;
};

export const getTaskById = (id: number): Task | undefined => {
  return tasks.find(task => task.id === id);
};

export const createTask = (task: Task): Task => {
  task.id = tasks.length + 1;
  tasks.push(task);
  return task;
};

export const updateTask = (id: number, updatedTask: Partial<Task>): Task | undefined => {
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
    return tasks[taskIndex];
  }
  return undefined;
};

export const deleteTask = (id: number): boolean => {
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    return true;
  }
  return false;
};
