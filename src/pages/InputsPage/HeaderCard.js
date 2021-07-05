import PropTypes from "prop-types";
import { Flex, Input, Spacer, Text } from "@chakra-ui/react";
import Card from "../../components/Card/Card";

const HeaderCard = (props) => {
  return (
    <Card title="proper prepation prevents poor performance">
      <Flex alignItems="center">
        <Text>Date</Text>
        <Spacer mr="4" />
        <Input variant="flushed" placeholder="Flushed" type="date" />
      </Flex>
    </Card>
  );
};

HeaderCard.propTypes = {};

export default HeaderCard;
