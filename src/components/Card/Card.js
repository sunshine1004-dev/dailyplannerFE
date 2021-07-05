import { Box, Center, Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <Box
      w={{ sm: "100%" }}
      flex={{ sm: 1, xl: props.flex || 1 }}
      boxShadow="xs"
      rounded="md"
      bg="white"
    >
      <Flex flexDir="column">
        <Center backgroundColor="teal.600" py="4" px="2" roundedTop="md">
          <Text
            fontSize={["lg", "2xl", "2xl"]}
            fontWeight="bold"
            textTransform="uppercase"
            textAlign="center"
            color="white"
          >
            {props.title}
          </Text>
        </Center>
        <Box px="4" py="8">
          {props.children}
        </Box>
      </Flex>
    </Box>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  flex: PropTypes.number,
};

export default Card;
