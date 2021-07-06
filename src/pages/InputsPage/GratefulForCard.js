import PropTypes from "prop-types";
import { Flex, Input, Text } from "@chakra-ui/react";
import Card from "../../components/Card/Card";
import { useEditMode } from "../../contexts/EditModeContext";

const GratefulForCard = (props) => {
  const { editMode } = useEditMode();

  return (
    <Card title="grateful for" flex={2} sectionName="GRATEFUL_FOR">
      <Flex alignItems="center">
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
    </Card>
  );
};

GratefulForCard.propTypes = {};

export default GratefulForCard;
