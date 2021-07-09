import { useEffect, useState } from "react";
import { Flex, Input, Text } from "@chakra-ui/react";
import Card from "../../components/Card/Card";
import { useEditMode } from "../../contexts/EditModeContext";
import { useSheet } from "../../contexts/SheetContext";

const AffirmationCard = (props) => {
  const { editMode } = useEditMode();
  const { sheet, handleUpdateSheet } = useSheet();
  const [affirmation, setAffirmation] = useState("");

  useEffect(() => {
    if (sheet.affirmation) setAffirmation(sheet.affirmation);
  }, [sheet.affirmation]);

  const handleSave = () => {
    handleUpdateSheet(sheet._id, { affirmation });
  };

  return (
    <Card
      title="affirmation"
      flex={2}
      sectionName="AFFIRMATION"
      subtitle={`"I'm... /I will be..."`}
      onSave={handleSave}
    >
      <Flex alignItems="center">
        <Input
          variant="flushed"
          placeholder=""
          display={editMode ? "inline-flex" : ["none", "inline-flex"]}
          value={affirmation}
          onChange={(e) => setAffirmation(e.target.value)}
        />
        {!editMode && (
          <Text display={["inline-flex", "none"]} fontSize="xs">
            {sheet.affirmation}
          </Text>
        )}
      </Flex>
    </Card>
  );
};

AffirmationCard.propTypes = {};

export default AffirmationCard;
