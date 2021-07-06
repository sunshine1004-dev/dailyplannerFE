import { Flex, Input, Text, VStack } from "@chakra-ui/react";
import Card from "../../components/Card/Card";
import { useEditMode } from "../../contexts/EditModeContext";

const ReadingCard = (props) => {
  const { editMode } = useEditMode();

  return (
    <Card title="reading" flex={2} sectionName="READING">
      <VStack spacing={[1, 4]}>
        <Flex width="100%" alignItems="center">
          <Input
            variant="flushed"
            placeholder=""
            display={editMode ? "inline-flex" : ["none", "inline-flex"]}
          />
          {!editMode && (
            <Text display={["inline-flex", "none"]} fontSize="xs">
              Something
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
            />
            {!editMode && (
              <Text display={["inline-flex", "none"]} fontSize={["xs", "md"]}>
                120
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
            />
            {!editMode && (
              <Text display={["inline-flex", "none"]} fontSize="xs">
                160
              </Text>
            )}
          </Flex>
        </Flex>
      </VStack>
    </Card>
  );
};

export default ReadingCard;
