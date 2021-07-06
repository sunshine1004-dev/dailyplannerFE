import PropTypes from "prop-types";
import { Flex, Input, Spacer, Text } from "@chakra-ui/react";
import Card from "../../components/Card/Card";
import { useEditMode } from "../../contexts/EditModeContext";

const HeaderCard = (props) => {
  const { editMode } = useEditMode();

  return (
    <Card
      title="proper prepation prevents poor performance"
      sectionName="HEADER"
    >
      <Flex alignItems="center" justifyContent="center">
        <Text fontSize={editMode ? "md" : ["xs", "md"]} mr="3">
          Date
        </Text>

        <Input
          variant="flushed"
          placeholder="Flushed"
          type="date"
          display={editMode ? "inline-flex" : ["none", "inline-flex"]}
        />
        {!editMode && (
          <Text
            textAlign="left"
            display={["inline-flex", "none"]}
            fontSize="xs"
          >
            5/9/2021
          </Text>
        )}
      </Flex>
    </Card>
  );
};

HeaderCard.propTypes = {};

export default HeaderCard;
