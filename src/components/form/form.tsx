import { useState } from 'react';
import { TaskData } from '../task';

const defaultData: TaskData = {
  title: '',
  description: '',
  assignedTo: '',
  completed: false,
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
        value={task.title}
        placeholder="Titulo de tarea..."
        className="rounded-lg appearance-none p-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-small focus:outline-none focus:ring-2 focus:border-transparent mb-3 w-full"
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <textarea
        value={task.description}
        placeholder="Descripcion de la tarea..."
        className="rounded-lg appearance-none p-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-small focus:outline-none focus:ring-2 focus:border-transparent mb-3 w-full"
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <div className="flex justify-between">
        <div className='space-x-2'>
            <input 
            value={task.assignedTo}
            onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
            type="date" placeholder='Fecha' className="rounded-lg appearance-none border border-gray-300 p-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-small focus:outline-none focus:ring-2 focus:border-transparent" />
            
            <input 
            value={task.createdAt}
            onChange={(e) => setTask({ ...task, createdAt: e.target.value })}
            type="text" placeholder='Asignado a' className="rounded-lg appearance-none border border-gray-300 p-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-small focus:outline-none focus:ring-2 focus:border-transparent" />
        </div>
        <div className='space-x-2'>
            <button
            className="bg-gray-100 text-gray-500 py-1 px-4 border border-gray-200 rounded-md"
            onClick={setDefaultData}
            >
            Cancelar
            </button>
            <button
            className="bg-violet-700 rounded-md text-white py-1 px-4"
            onClick={() => {
                if (!task.title) return;

                onSubmit(task);
                setDefaultData();
            }}
            >
            Guardar
            </button>
        </div>
      </div>
    </div>
  );
};
