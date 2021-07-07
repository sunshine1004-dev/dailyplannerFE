import { useEffect, useState } from "react";
import { Flex, Text, Textarea } from "@chakra-ui/react";
import Card from "../../components/Card/Card";
import { useEditMode } from "../../contexts/EditModeContext";
import { useSheet } from "../../contexts/SheetContext";

const ResearchCard = (props) => {
  const { editMode } = useEditMode();
  const { sheet, handleUpdateSheet } = useSheet();
  const [research, setResearch] = useState("");

  useEffect(() => {
    if (sheet.research) setResearch(sheet.research);
  }, [sheet.research]);

  const handleSave = () => {
    handleUpdateSheet(sheet._id, { research });
  };

  return (
    <Card
      title="research/inspiration"
      flex={2}
      sectionName="RESEARCH"
      onSave={handleSave}
    >
      <Flex alignItems="center" justifyContent="center">
        <Textarea
          variant="flushed"
          placeholder=""
          display={editMode ? "inline-flex" : ["none", "inline-flex"]}
          flex="1"
          value={research}
          onChange={(e) => setResearch(e.target.value)}
        />
        {!editMode && (
          <Text display={["inline-flex", "none"]} fontSize="xs">
            {sheet.research}
          </Text>
        )}
      </Flex>
    </Card>
  );
};

ResearchCard.propTypes = {};

export default ResearchCard;
