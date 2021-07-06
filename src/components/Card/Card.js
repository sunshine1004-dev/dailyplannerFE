import { Box, Center, Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useEditMode } from "../../contexts/EditModeContext";
import { COLOR_THEME } from "../../util/constants";

const Card = (props) => {
  const { editMode, setEditMode, setSectionName } = useEditMode();

  const handleSectionClick = (e) => {
    setEditMode(true);
    setSectionName(props.sectionName);
  };

  return (
    <Box
      w={{ sm: "100%" }}
      flex={{ sm: 1, xl: props.flex || 1 }}
      flexGrow={props.flexGrow}
      boxShadow="xs"
      rounded="md"
      bg="white"
      onClick={handleSectionClick}
      position="relative"
    >
      <Box
        position="absolute"
        width="100%"
        height="100%"
        left="0"
        top="0"
        zIndex="2"
        display={editMode ? "none" : "block"}
      />
      <Flex flexDir="column">
        <Center
          backgroundColor={`${COLOR_THEME}.600`}
          py={editMode ? 4 : [2, 4]}
          px="2"
          roundedTop="md"
        >
          <Text
            fontSize={["sm", "2xl"]}
            fontWeight="bold"
            textTransform="uppercase"
            textAlign="center"
            color="white"
          >
            {props.title}
          </Text>
        </Center>
        <Flex flex="1" justifyContent="center" alignItems="center">
          <Center width="100%">
            <Box
              width="100%"
              px={editMode ? 4 : [1, 4]}
              py={editMode ? 8 : [0.5, 8]}
            >
              {props.children}
            </Box>
          </Center>
        </Flex>
      </Flex>
    </Box>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  flex: PropTypes.number,
  sectionName: PropTypes.string,
  flexGrow: PropTypes.number,
};

export default Card;
