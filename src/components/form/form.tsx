import { useState } from 'react';
import { TaskData } from '../task';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
import { CalendarIcon } from '@heroicons/react/solid'
import { UserIcon } from '@heroicons/react/solid'

const defaultData: TaskData = {
  id: -1,
  title: '',
  assignedTo: '',
  description: '',
  completed: false,
}

interface FormProps {
  onSubmit: (task: TaskData) => void;
}

const personsSupplier = [
  {
    label: 'Asignar a',
    value: ''
  },
  {
    label: 'Katerin Martinez',
    value: 'Katerin Martinez'
  },
  {
    label: 'Mario Molina',
    value: 'Mario Molina'
  },
  {
    label: 'Ricardo Estrada',
    value: 'Ricardo Estrada'
  },
  {
    label: 'David Herrera',
    value: 'David Herrera'
  }
]

export const Form = (props: FormProps) => {
  const { onSubmit } = props;

  const [task, setTask] = useState<TaskData>(defaultData);

  const setDefaultData = () => {
    setTask(defaultData);  
  }

  return (
    <div className="bg-white shadow-lg w-9/12 rounded-lg p-3">
      <input
        data-testid="titleTask"
        value={task.title}
        placeholder="Titulo de tarea..."
        className="w-full"
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <textarea
        data-testid="descriptionTask"
        value={task.description}
        placeholder="Descripcion de la tarea..."
        className="w-full"
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <div className="flex justify-between">
        <div className='space-x-5 flex justify-start'>
          
          <div className='flex '>
            <p className='text-gray-400 text-sm'><CalendarIcon className='h-10 w-10'></CalendarIcon></p>
            <DatePicker 
            placeholderText="Due Date"
            dateFormat="dd MMMM, yyyy"
            className='w-50 h-10 text-center border rounded-md'
            selected={ task.dueDate != null ? new Date(task.dueDate) : null } 
            onChange={ date => setTask({...task, dueDate: String(date?.toDateString())}) } 
          /></div>
          <div className='flex'>
            <p className='text-gray-400 text-sm'><UserIcon className='h-10 w-10'></UserIcon></p>
            <Select
            aria-label="assignedTask"
            defaultValue={personsSupplier[0]}
            value={personsSupplier.find(element => element.value == task.assignedTo)}
            className="w-60 text-left rounded-md"
            options={ personsSupplier }
            onChange={ (e)=> setTask({...task, assignedTo: e!.value})}
          /></div>
          
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
