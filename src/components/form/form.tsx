import { useState } from 'react';
import { TaskData } from '../task';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'

const defaultData: TaskData = {
  title: '',
  description: '',
  assignedTo: '',
  completed: false,
};

interface FormProps {
  onSubmit: (task: TaskData) => void;
}

const persons = [
  {
    firstName: 'Ana',
    lastName: 'Perez'
  },
  {
    firstName: 'Mario',
    lastName: 'Lopez'
  },
  {
    firstName: 'Andres',
    lastName: 'Peñate'
  }
]

export const Form = (props: FormProps) => {
  const { onSubmit } = props;

  const [task, setTask] = useState<TaskData>(defaultData);

  const setDefaultData = () => setTask(defaultData);

  return (
    <div className="bg-white shadow-lg w-9/12 rounded-lg p-3">
      <input
        value={task.title}
        placeholder="Titulo de tarea..."
        className="w-full"
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <textarea
        value={task.description}
        placeholder="Descripcion de la tarea..."
        className="w-full"
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <div className="flex justify-between">
        <div className='space-x-5 flex justify-start'>
          <Select
            defaultValue={{label: 'Assign To' , value: 'empty'}}
            className="w-60 text-center rounded-md"
            options={ persons.map(sup => ({ label: (sup.firstName + " " + sup.lastName), value: (sup.firstName + " " + sup.lastName)})) }
            onChange={ (e)=> setTask({...task, assignedTo: e?.value })}
          />
          <DatePicker 
            placeholderText="Due Date"
            dateFormat="d MMMM, yyyy"
            className='w-40 h-10 text-center border rounded-md'
            selected={ task.dueDate != null ? new Date(task.dueDate) : null } 
            onChange={ date => setTask({...task, dueDate: String(date?.toDateString())}) } 
          />
        </div>
        <div className='space-x-5'>
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
