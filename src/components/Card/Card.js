import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useEditMode } from "../../contexts/EditModeContext";
import { COLOR_THEME } from "../../util/constants";

const Card = (props) => {
  const { editMode, setEditMode, handleDismiss } = useEditMode();

  const handleSectionClick = (e) => {
    if (!editMode) setEditMode(props.sectionName);
  };

  const handleSaveClick = () => {
    props.onSave();
    handleDismiss();
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
      _hover={!editMode ? { boxShadow: "md" } : {}}
    >
      <Box
        position="absolute"
        width="100%"
        height="100%"
        left="0"
        top="0"
        zIndex="2"
        display={editMode ? "none" : "block"}
        cursor="pointer"
      />
      <Flex flexDir="column">
        <Center
          backgroundColor={`${COLOR_THEME}.600`}
          py={editMode ? 4 : [2, 4]}
          px="2"
          roundedTop="md"
          position="relative"
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
          {editMode && props.rightIcon && (
            <Box position="absolute" height="100%" right="4" display="flex">
              <Center>
                <AddIcon
                  onClick={props.rightIconClickHandler}
                  color="white"
                  fontSize="22"
                  cursor="pointer"
                />
              </Center>
            </Box>
          )}
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
        {editMode && !props.hideSaveBtn && (
          <Flex
            flex="1"
            justifyContent="center"
            alignItems="center"
            px="4"
            pb="4"
          >
            <Button
              borderRadius={0}
              variant="solid"
              colorScheme={COLOR_THEME}
              width="full"
              onClick={handleSaveClick}
            >
              Save
            </Button>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  flex: PropTypes.number,
  sectionName: PropTypes.string,
  flexGrow: PropTypes.number,
  onSave: PropTypes.func,
};

export default Card;
