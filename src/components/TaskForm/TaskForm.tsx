import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { ChangeEvent, useContext, useState } from "react";
import { TasksContext } from "../../context/TasksContext";
import { Task } from "../../types/Interfaces";

export const TaskForm = () => {
  const { tasks, setTasks } = useContext(TasksContext);

  const [task, setTask] = useState<Task>({
    assignedTo: "Myself",
    executionDate: "",
    description: "",
    id: String(new Date() + "" + Math.random()),
    isCompleted: false,
    name: "",
  });
  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setTask({ ...task, [event.currentTarget.name]: event.currentTarget.value });
  };

  const handleSend = () => {
    if (task.name.trim() === "") return null;
    setTasks([...tasks, task]);
    handleDelete();
  };

  const handleDelete = () => {
    setTask({
      assignedTo: "Myself",
      executionDate: "",
      description: "",
      id: String(new Date() + "" + Math.random()),
      isCompleted: false,
      name: "",
    });
  };

  return (
    <Box boxShadow="2xl" p={"12"} rounded="md" my="-12" minW={"90vh"}>
      <FormControl isRequired>
        <Input
          type="text"
          placeholder="Task Name"
          my="2"
          required
          name="name"
          value={task.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
      </FormControl>
      <FormControl>
        <Textarea
          resize={"block"}
          placeholder="Task Description..."
          required
          name="description"
          value={task.description}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange(e)}
        />
      </FormControl>

      <Box
        display={"flex"}
        alignItems={"center"}
        gap={2}
        justifyContent="space-between"
        pt="2"
      >
        <Flex alignItems={"center"} gap={2}>
          <FormControl>
            <Input
              type="date"
              my="2"
              name="executionDate"
              required
              value={task.executionDate}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            />
          </FormControl>
          <FormControl>
            <Select
              placeholder="Assign to"
              name="assignedTo"
              required
              value={task.assignedTo}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange(e)}
            >
              <option value="Myself">Myself</option>
              <option value="Student 1">Student 1</option>
              <option value="Student 2">Student 2</option>
              <option value="Student 3">Student 3</option>
              <option value="Student 4">Student 4</option>
            </Select>
          </FormControl>
        </Flex>

        <Flex alignItems={"center"} gap={2}>
          <Button colorScheme={"gray"} type="reset" onClick={handleDelete}>
            Cancel
          </Button>
          <Button colorScheme={"purple"} onClick={handleSend}>
            Add Task
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
