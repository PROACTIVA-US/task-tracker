import { useState } from 'react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Test UI Module', completed: false },
    { id: 2, title: 'Create checkpoints', completed: false }
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="task-list p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <ul className="space-y-2">
        {tasks.map(task => (
          <li key={task.id} className="flex items-center p-2 bg-blue-50 rounded">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="mr-3"
            />
            <span className={task.completed ? 'line-through text-gray-500' : ''}>
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;