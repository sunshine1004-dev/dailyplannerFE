import { useEffect, useState } from "react";
import { Center, Flex, Input, Text } from "@chakra-ui/react";
import Card from "../../components/Card/Card";
import { useEditMode } from "../../contexts/EditModeContext";
import { useSheet } from "../../contexts/SheetContext";

const AccoutabilityCard = (props) => {
  const { editMode } = useEditMode();
  const { sheet, handleUpdateSheet } = useSheet();
  const [done, setDone] = useState("");
  const [todo, setTodo] = useState("");

  useEffect(() => {
    if (sheet.accountability) {
      setDone(sheet.accountability.done || "");
      setTodo(sheet.accountability.todo || "");
    }
  }, [sheet.accountability]);

  const handleSave = () => {
    handleUpdateSheet(sheet._id, {
      accountability: { done, todo },
    });
  };

  return (
    <Card
      title="accoutability"
      sectionName="ACCOUNTABILITY"
      flexGrow={1}
      onSave={handleSave}
    >
      <Flex alignItems="center">
        <Input
          variant="flushed"
          placeholder=""
          display={editMode ? "inline-flex" : ["none", "inline-flex"]}
          value={done}
          onChange={(e) => setDone(e.target.value)}
        />
        {!editMode && (
          <Text
            textAlign="center"
            display={["inline-flex", "none"]}
            fontSize="xs"
          >
            One thing you did: {done || "_"}
          </Text>
        )}
      </Flex>
      <Center mt="2">
        <Text
          textAlign="center"
          fontSize="xs"
          fontWeight="bold"
          display={editMode ? "inline-flex" : ["none", "inline-flex"]}
        >
          (one thing YOU DID towards your goal)
        </Text>
      </Center>
      <Flex alignItems="center">
        <Input
          variant="flushed"
          placeholder=""
          display={editMode ? "inline-flex" : ["none", "inline-flex"]}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        {!editMode && (
          <Text display={["inline-flex", "none"]} fontSize="xs">
            One thing you need to do: {todo || "_"}
          </Text>
        )}
      </Flex>
      <Center mt="2">
        <Text
          textAlign="center"
          fontSize="xs"
          fontWeight="bold"
          display={editMode ? "inline-flex" : ["none", "inline-flex"]}
        >
          (one thing YOU NEED TO DO towards your goal)
        </Text>
      </Center>
    </Card>
  );
};

AccoutabilityCard.propTypes = {};

export default AccoutabilityCard;
