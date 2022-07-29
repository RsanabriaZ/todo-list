import { useState } from 'react';
import { TaskData } from '../task';


const defaultData: TaskData = {
  title: '',
  description: '',
  assignedTo: '',
  completed: false,
  createdAt: ''
};

interface FormProps {
  onSubmit: (task: TaskData) => void;
}

export const Form = (props: FormProps) => {
  const { onSubmit } = props;

  const [task, setTask] = useState<TaskData>(defaultData);

  const setDefaultData = () => setTask(defaultData);

  return (
    <div className="bg-white shadow-lg w-9/12 rounded-lg p-3">


      <input
        required
        value={task.title}
        placeholder="Titulo de tarea..."
        className="w-full"
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <textarea
        required
        value={task.description}
        placeholder="Descripcion de la tarea..."
        className="w-full"
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <div className="flex justify-between space-x-2">

        <div>
          <input
            required
            type={"date"}
            value={task.createdAt}
            className='p-2 drop-shadow-lg rounded-lg'
            onChange={(e) => setTask({ ...task, createdAt: e.target.value })}
          />
          <select
            required
            name="select"
            className='p-2 drop-shadow-lg rounded-lg mx-2'
            value={task.assignedTo}
            onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
          >
            <option value="Usuario 1" selected>Usuario 1</option>
            <option value="Usuario 2">Usuario 2</option>
            <option value="Usuario 3">Usuario 3</option>
          </select>
        </div>

        <div>
          <button
            className="bg-gray-100 text-gray-500 py-1 px-4 border border-gray-200 rounded-md"
            onClick={setDefaultData}
          >
            Cancelar
          </button>
          <button
            className="bg-violet-700 rounded-md text-white py-1 px-4 mx-2"
            onClick={() => {
              if (!task.title || !task.description || !task.assignedTo || !task.createdAt) return;
              onSubmit(task);
              setDefaultData();
            }}
          >
            Guardar
          </button>
        </div>
      </div>

      <div >


      </div>
    </div>
  );
};
