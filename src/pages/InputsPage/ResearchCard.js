import { Flex, Text, Textarea } from "@chakra-ui/react";
import Card from "../../components/Card/Card";
import { useEditMode } from "../../contexts/EditModeContext";

const ResearchCard = (props) => {
  const { editMode } = useEditMode();

  return (
    <Card title="research/inspiration" flex={2} sectionName="RESEARCH">
      <Flex alignItems="center" justifyContent="center">
        <Textarea
          variant="flushed"
          placeholder=""
          display={editMode ? "inline-flex" : ["none", "inline-flex"]}
          flex="1"
        />
        {!editMode && (
          <Text display={["inline-flex", "none"]} fontSize="xs">
            My research planning...
          </Text>
        )}
      </Flex>
    </Card>
  );
};

ResearchCard.propTypes = {};

export default ResearchCard;
