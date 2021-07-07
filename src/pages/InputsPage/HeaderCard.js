import { Flex, Text } from "@chakra-ui/react";
import Card from "../../components/Card/Card";
import { useEditMode } from "../../contexts/EditModeContext";
import { useSheet } from "../../contexts/SheetContext";

const HeaderCard = (props) => {
  const { editMode } = useEditMode();
  const { sheet } = useSheet();

  return (
    <Card
      title="proper prepation prevents poor performance"
      sectionName="HEADER"
    >
      <Flex alignItems="center" justifyContent="center">
        <Text fontSize={editMode ? "md" : ["xs", "md"]} mr="3">
          Date
        </Text>

        <Text textAlign="left" fontSize={["xs", "md"]}>
          {sheet.day}
        </Text>

        {/* <Input
          variant="flushed"
          placeholder="Flushed"
          type="date"
          display={editMode ? "inline-flex" : ["none", "inline-flex"]}
          value={dateObj}
        />
        {!editMode && (
          <Text
            textAlign="left"
            display={["inline-flex", "none"]}
            fontSize="xs"
          >
            {dateStr}
          </Text>
        )} */}
      </Flex>
    </Card>
  );
};

HeaderCard.propTypes = {};

export default HeaderCard;
