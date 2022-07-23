import { useState } from 'react';
import { Form, Task, TaskData } from './components';

function App() {
  const [tasks, setTasks] = useState<Array<TaskData>>([]);

  const onCreateTask = (task: TaskData) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-pink-50 h-screen">
      <div className="bg-white shadow-md w-3/5 rounded-tr-lg rounded-tl-lg">
        <p className="border-b border-b-gray-200 p-3">Tareas</p>
        <div className="p-3">
          {tasks.map((task, index) => (
            <Task
              key={`task-${task.id}`}
              task={task}
              toggleComplete={() => {
                tasks[index].completed = !tasks[index].completed;
                setTasks([...tasks]);
              }}
            />
          ))}
        </div>
      </div>
      <Form onSubmit={onCreateTask} />
    </div>
  );
}

export default App;
