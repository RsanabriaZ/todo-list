import { useState } from "react";
import { Form, Task, TaskData } from "./components";

function App() {
  const [tasks, setTasks] = useState<Array<TaskData>>(JSON.parse(localStorage.getItem("tasks") ?? '[]'));


  const onCreateTask = (task: TaskData) => {
    localStorage.setItem("tasks", JSON.stringify([...tasks, { ...task, id: tasks.length + 1 }]))
    setTasks(JSON.parse(localStorage.getItem("tasks") ?? '[]'));
  };

  const [selectFilter, setSelectFilter] = useState("");

  const handleSelectFilter = (event: any) => {
    setSelectFilter(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-pink-50 h-screen ">
      <div className="bg-white shadow-md w-3/5 rounded-tr-lg rounded-tl-lg ">
        <div className="grid grid-cols-2 border-b border-b-gray-200">
          <p className="p-3 flex-none w-14 h-14">Tareas</p>
          <select name="select"
            className='drop-shadow-lg p-1 m-2 rounded-lg w-1/3 justify-self-end'
            onChange={handleSelectFilter}
          >
            <option value="Todas" selected>Todas</option>
            <option value="Completadas">Completadas</option>
            <option value="Incompletas">Incompletas</option>
          </select>
        </div>
        <div className="p-3">
          {tasks.filter(function (filter) {
            if (selectFilter == "Incompletas") {
              return filter.completed == false
            } else if (selectFilter == "Completadas") {
              return filter.completed == true
            } else {
              return filter;
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
