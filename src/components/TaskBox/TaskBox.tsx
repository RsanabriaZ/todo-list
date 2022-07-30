import { Box } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../../context/TasksContext";
import { Task } from "../../types/Interfaces";
import { TaskRow, TaskFilter } from "../Index";

export const TaskBox = () => {
  const { tasks, filterStatus } = useContext(TasksContext);
  const [filterTasks, setFilterTasks] = useState<Array<Task>>(tasks);

  useEffect(() => {
    switch (filterStatus) {
      case "All":
        setFilterTasks(tasks);
        break;
      case "Incomplete":
        setFilterTasks(tasks.filter((task) => task.isCompleted === false));
        break;
      case "Complete":
        setFilterTasks(tasks.filter((task) => task.isCompleted === true));
        break;
      default:
        setFilterTasks(tasks);
        break;
    }
  }, [filterStatus, tasks]);

  return (
    <Box p={"12"} rounded="md" boxShadow='inner'>
      <TaskFilter />
      <Box maxHeight={"45vh"} overflow={"scroll"} overflowX={"hidden"} px="5">
        {filterTasks.map((task, index) => (
          <TaskRow tasksDetail={task} key={index} />
        ))}
      </Box>
    </Box>
  );
};
