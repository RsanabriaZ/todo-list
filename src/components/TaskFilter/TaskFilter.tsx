import { Flex, Select, Text } from "@chakra-ui/react";
import React, { ChangeEvent, useContext } from "react";
import { TasksContext } from "../../context/TasksContext";

export const TaskFilter = () => {
  const { setFilterStatus, filterStatus } = useContext(TasksContext);

  const handleFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    return setFilterStatus(event.currentTarget.value);
  };

  return (
    <Flex alignItems={"center"} gap="2">
      <Text>Show Only:</Text>
      <Select
        maxWidth={"20vh"}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFilter(e)}
        value={filterStatus}
      >
        <option value="All">All</option>
        <option value="Complete">Complete</option>
        <option value="Incomplete"> Incomplete</option>
      </Select>
      <Text>Tasks</Text>
    </Flex>
  );
};
