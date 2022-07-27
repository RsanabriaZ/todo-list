import { useState } from 'react';
import { Form, Task, TaskData, Filter, Selection } from './components';

function App() {
  const [tasks, setTasks] = useState<Array<TaskData>>(JSON.parse(localStorage.getItem("tasks") || '[]'))
  const [filterSelection, setFilterSelection] = useState<Selection>({ label: 'Todas', value: 'all'});

  const onCreateTask = (task: TaskData) => {
    //setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
    try{
      window.localStorage.setItem("tasks", JSON.stringify([...tasks, { ...task, id: tasks.length + 1 }]))
      setTasks(JSON.parse(localStorage.getItem("tasks") || '[]'));
    }catch (error){
      console.error(error);
    }
  }

  const onChange = (filterSelection: Selection) => {
    setFilterSelection({...filterSelection})
  }

  const filterTasks = (task:any) => filterSelection.value ===  'completed' ? task.completed : filterSelection.value === 'ongoing' ? !task.completed : true;

  return (
    <div className="flex flex-col justify-center items-center bg-pink-50 h-screen">
      <div className="bg-white shadow-md w-3/5 rounded-tr-lg rounded-tl-lg">
        <Filter 
          onChangeSelection={onChange} 
          filterSelection={filterSelection}
        />
        <div className="p-3">
          { 
            tasks.filter(filterTasks).map((task, index) => (
              <Task
                key={`task-${task.id}`}
                task={task}
                toggleComplete={() => {
                  tasks[task.id - 1].completed = !tasks[task.id - 1].completed;
                  setTasks([...tasks]);
                }}
              />
            ))
          }
        </div>
      </div>
      <Form 
        onSubmit={onCreateTask}
      />
    </div>
  );
}

export default App;
