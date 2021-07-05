import PropTypes from "prop-types";
import { Flex, Input } from "@chakra-ui/react";
import Card from "../../components/Card/Card";

const GratefulForCard = (props) => {
  return (
    <Card title="grateful for" flex={2}>
      <Flex alignItems="center">
        <Input variant="flushed" placeholder="" />
      </Flex>
    </Card>
  );
};

GratefulForCard.propTypes = {};

export default GratefulForCard;
