import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { Task } from "../../types/Interfaces";
import { CalendarIcon, AtSignIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";

interface Props {
  tasksDetail: Task;
}

export const TaskRow = (props: Props) => {
  const { tasks, setTasks } = useContext(TasksContext);
  const { tasksDetail } = props;
  const { id, name, assignedTo, description, executionDate, isCompleted } =
    tasksDetail;

  const handleButton = () => {
    setTasks(
      tasks.map((task, index) => {
        if (task.id === id) {
          if (isCompleted) {
            return { ...task, isCompleted: false };
          } else {
            return { ...task, isCompleted: true };
          }
        } else {
          return { ...task };
        }
      })
    );
  };

  return (
    <>
      <Box display={"flex"} alignItems="center" gap={4} py="4">
        <Button
          onClick={handleButton}
          colorScheme={isCompleted ? "red" : "gray"}
          borderRadius={"full"}
          size={"xs"}
        ></Button>
        <Box>
          <Text>{name}</Text>
          <Text color={"gray"}>{description}</Text>
          <Box display={"flex"} alignItems="center" gap={2}>
            <Flex display={"flex"} alignItems={"center"} gap="2">
              <CalendarIcon />
              <Text color={"blue.600"}>{String(executionDate)}</Text>
            </Flex>
            <Box display={"flex"} alignItems={"center"} gap="2">
              <AtSignIcon />
              <Text color={"gray"}>{assignedTo}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider pt={3} />
    </>
  );
};
