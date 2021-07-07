import { useEffect, useState } from "react";
import { Flex, Input, Text } from "@chakra-ui/react";
import Card from "../../components/Card/Card";
import { useEditMode } from "../../contexts/EditModeContext";
import { useSheet } from "../../contexts/SheetContext";

const GratefulForCard = (props) => {
  const { editMode } = useEditMode();
  const { sheet, handleUpdateSheet } = useSheet();
  const [gratefulFor, setGratefulFor] = useState("");

  useEffect(() => {
    if (sheet.gratefulFor) setGratefulFor(sheet.gratefulFor);
  }, [sheet.gratefulFor]);

  const handleSave = () => {
    handleUpdateSheet(sheet._id, { gratefulFor });
  };

  return (
    <Card
      title="grateful for"
      flex={2}
      sectionName="GRATEFUL_FOR"
      onSave={handleSave}
    >
      <Flex alignItems="center">
        <Input
          variant="flushed"
          placeholder=""
          display={editMode ? "inline-flex" : ["none", "inline-flex"]}
          value={gratefulFor}
          onChange={(e) => setGratefulFor(e.target.value)}
        />
        {!editMode && (
          <Text display={["inline-flex", "none"]} fontSize="xs">
            {sheet.gratefulFor}
          </Text>
        )}
      </Flex>
    </Card>
  );
};

GratefulForCard.propTypes = {};

export default GratefulForCard;
