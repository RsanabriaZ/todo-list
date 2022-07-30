
import { CalendarIcon } from '@heroicons/react/solid'
import { UserIcon } from '@heroicons/react/solid'


export interface TaskData {
  id: number;
  title: string;
  description: string;
  completed: boolean;

  // TODO: Add assignedTo property to Task component
  assignedTo: string;
  dueDate?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface TaskProps {
  task: TaskData;
  toggleComplete: () => void;
}

export const Task = (props: TaskProps) => {
  const { task, toggleComplete } = props;
  return (
    <button
      className="border-b border-b-gray-200 p-3 flex items-center w-full"
      onClick={toggleComplete}
    >
      <div
        className={`w-5 h-5 rounded-full border mr-4 ${
          task.completed && 'bg-blue-400'
        }`}
      ></div>
      <div className="text-left space-y-1">
        <p className="font-semibold text-gray-700">{task.title}</p>
        <p className="text-gray-400 text-sm">{task.description}</p>
        <div className='flex space-x-2'>
          { task.dueDate && <p className="text-gray-400 text-sm"><CalendarIcon className='h-5 w-5' /> {task.dueDate}</p>}
          { task.assignedTo && <p className="text-gray-400 text-sm"><UserIcon className='h-5 w-5' /> {task.assignedTo}</p>}
        </div>
      </div>
    </button>
  );
};