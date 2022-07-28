import { useState } from 'react';
import { Form, Task, TaskData } from './components';

function App() {
    const options = [
        {value: '0', text: 'Todas 🗂'},
        {value: '1', text: 'Pendientes 📝'},
        {value: '2', text: 'Completadas 🎉'},
    ];

  const [tasks, setTasks] = useState<Array<TaskData>>(JSON.parse(localStorage.getItem("tasks") ?? '[]'));
  const [selected, setSelected] = useState(0);

  const onCreateTask = (task: TaskData) => {
    localStorage.setItem("tasks", JSON.stringify([...tasks, { ...task, id: tasks.length + 1 }]))
    setTasks(JSON.parse(localStorage.getItem("tasks") ?? '[]'));
  };

  const handleChange = (event: any) => {
    setSelected(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-pink-50 h-screen">
      <div className="bg-white shadow-md w-3/5 rounded-tr-lg rounded-tl-lg">
        <div className="flex justify-between items-center border-b border-b-gray-200">
            <p className="p-3">Tareas</p>
            <select value={selected} onChange={handleChange}
                className='h-max rounded-lg appearance-none border border-gray-300 p-1 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-small focus:outline-none focus:ring-2 focus:border-transparent'>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>
        </div>
        <div className="p-3">
          {tasks.filter(function(t) {
            if (selected == 1) {
                return t.completed == false
            }else if(selected == 2){
                return t.completed == true
            }else{
                return t;
            }
          }).map((task, index) => (
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
