import PropTypes from "prop-types";
import { Flex, Input } from "@chakra-ui/react";
import Card from "../Card/Card";

const TimeCard = (props) => {
  return (
    <Card title={props.title}>
      <Flex alignItems="center">
        <Input variant="flushed" placeholder="Flushed" type="time" />
      </Flex>
    </Card>
  );
};

TimeCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TimeCard;
