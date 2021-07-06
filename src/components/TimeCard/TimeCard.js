import PropTypes from "prop-types";
import { Flex, Input, Text } from "@chakra-ui/react";
import Card from "../Card/Card";
import { useEditMode } from "../../contexts/EditModeContext";

const TimeCard = (props) => {
  const { editMode } = useEditMode();

  return (
    <Card title={props.title} sectionName={props.sectionName}>
      <Flex alignItems="center" justifyContent="center">
        <Input
          variant="flushed"
          placeholder="Flushed"
          type="time"
          display={editMode ? "inline-flex" : ["none", "inline-flex"]}
        />
        {!editMode && (
          <Text display={["inline-flex", "none"]} fontSize="xs">
            18:00
          </Text>
        )}
      </Flex>
    </Card>
  );
};

TimeCard.propTypes = {
  title: PropTypes.string.isRequired,
  sectionName: PropTypes.string.isRequired,
};

export default TimeCard;
