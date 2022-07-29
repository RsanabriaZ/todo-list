export interface TaskData {
  id?: number;
  title: string;
  description: string;
  completed: boolean;

  // TODO: Add assignedTo property to Task component
  assignedTo: string;
  createdAt?: string;
  FilterStatus?: string
}

interface TaskProps {
  task: TaskData;
  toggleComplete: () => void;
}

export const Task = (props: TaskProps) => {
  const { task, toggleComplete } = props;
  return (
    <>
      <button
        className="border-b border-b-gray-200 p-3 flex items-center w-full"
        onClick={toggleComplete}
      >
        <div
          className={`w-5 h-5 rounded-full border mr-4 ${task.completed && 'bg-blue-400'
            }`}
        ></div>
        <div>
          <p className="font-semibold text-gray-700">{task.title}</p>
          <p className="text-gray-400 text-sm ">{task.description}</p>
          <span
            className="px-3 py-1 rounded-full text-white bg-blue-400 text-sm w-max ">
            {task.createdAt}
          </span>
          <span
            className="px-3 py-1 rounded-full text-white bg-blue-400 text-sm w-max mx-2">
            {task.assignedTo}
          </span>
        </div>

      </button>


    </>
  );

};
