import { useEffect, useState } from "react";
import { Flex, Input, Text, VStack } from "@chakra-ui/react";
import Card from "../../components/Card/Card";
import { useEditMode } from "../../contexts/EditModeContext";
import { useSheet } from "../../contexts/SheetContext";

const ReadingCard = (props) => {
  const { editMode } = useEditMode();
  const { sheet, handleUpdateSheet } = useSheet();
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  useEffect(() => {
    if (sheet.reading) {
      setTitle(sheet.reading.title || "");
      setStart(sheet.reading.start || "");
      setEnd(sheet.reading.end || "");
    }
  }, [sheet.reading]);

  const handleSave = () => {
    handleUpdateSheet(sheet._id, {
      reading: { title, start: Number(start), end: Number(end) },
    });
  };

  return (
    <Card title="reading" flex={2} sectionName="READING" onSave={handleSave}>
      <VStack spacing={[1, 4]}>
        <Flex width="100%" alignItems="center">
          <Input
            variant="flushed"
            placeholder=""
            display={editMode ? "inline-flex" : ["none", "inline-flex"]}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          {!editMode && (
            <Text display={["inline-flex", "none"]} fontSize="xs">
              {sheet.reading.title}
            </Text>
          )}
        </Flex>
        <Text fontSize="xs" fontWeight="bold" display={["none", "inline-flex"]}>
          (Title if New)
        </Text>
        <Flex width="100%" flexDirection={["column", "row"]}>
          <Flex alignItems="center" mr="2">
            <Text fontSize={["xs", "md"]} textTransform="uppercase" mr={[2, 3]}>
              page started
            </Text>
            <Input
              flex="1"
              variant="flushed"
              placeholder=""
              type="number"
              display={editMode ? "inline-flex" : ["none", "inline-flex"]}
              value={start}
              onChange={(e) => {
                setStart(e.target.value);
              }}
            />
            {!editMode && (
              <Text display={["inline-flex", "none"]} fontSize={["xs", "md"]}>
                {start}
              </Text>
            )}
          </Flex>
          <Flex alignItems="center">
            <Text fontSize={["xs", "md"]} textTransform="uppercase" mr={[2, 3]}>
              page ended
            </Text>
            <Input
              flex="1"
              variant="flushed"
              placeholder=""
              type="number"
              display={editMode ? "inline-flex" : ["none", "inline-flex"]}
              value={end}
              onChange={(e) => {
                setEnd(e.target.value);
              }}
            />
            {!editMode && (
              <Text display={["inline-flex", "none"]} fontSize="xs">
                {end}
              </Text>
            )}
          </Flex>
        </Flex>
      </VStack>
    </Card>
  );
};

export default ReadingCard;
