import { Center, Flex, Input, Text } from "@chakra-ui/react";
import Card from "../../components/Card/Card";
import { useEditMode } from "../../contexts/EditModeContext";

const AccoutabilityCard = (props) => {
  const { editMode } = useEditMode();

  return (
    <Card title="accoutability" sectionName="ACCOUNTABILITY" flexGrow={1}>
      <Flex alignItems="center">
        <Input
          variant="flushed"
          placeholder=""
          display={editMode ? "inline-flex" : ["none", "inline-flex"]}
        />
        {!editMode && (
          <Text
            textAlign="center"
            display={["inline-flex", "none"]}
            fontSize="xs"
          >
            One thing you did: Something
          </Text>
        )}
      </Flex>
      <Center mt="2">
        <Text
          textAlign="center"
          fontSize="xs"
          fontWeight="bold"
          display={editMode ? "inline-flex" : ["none", "inline-flex"]}
        >
          (one thing YOU DID towards your goal)
        </Text>
      </Center>
      <Flex alignItems="center">
        <Input
          variant="flushed"
          placeholder=""
          display={editMode ? "inline-flex" : ["none", "inline-flex"]}
        />
        {!editMode && (
          <Text display={["inline-flex", "none"]} fontSize="xs">
            One thing you need to do: Something
          </Text>
        )}
      </Flex>
      <Center mt="2">
        <Text
          textAlign="center"
          fontSize="xs"
          fontWeight="bold"
          display={editMode ? "inline-flex" : ["none", "inline-flex"]}
        >
          (one thing YOU NEED TO DO towards your goal)
        </Text>
      </Center>
    </Card>
  );
};

AccoutabilityCard.propTypes = {};

export default AccoutabilityCard;
