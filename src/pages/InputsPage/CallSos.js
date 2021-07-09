import { useEffect, useState } from "react";
import { Flex, Input, Text } from "@chakra-ui/react";
import Card from "../../components/Card/Card";
import { useEditMode } from "../../contexts/EditModeContext";
import { useSheet } from "../../contexts/SheetContext";

const CallSosCard = (props) => {
  const { editMode } = useEditMode();
  const { sheet, handleUpdateSheet } = useSheet();
  const [callSos, setCallSos] = useState("");

  useEffect(() => {
    if (sheet.callSos) setCallSos(sheet.callSos);
  }, [sheet.callSos]);

  const handleSave = () => {
    handleUpdateSheet(sheet._id, { callSos });
  };

  return (
    <Card
      title="call s.o.s"
      flex={1}
      sectionName="CALL_SOS"
      onSave={handleSave}
    >
      <Flex alignItems="center">
        <Input
          variant="flushed"
          placeholder=""
          display={editMode ? "inline-flex" : ["none", "inline-flex"]}
          value={callSos}
          onChange={(e) => setCallSos(e.target.value)}
        />
        {!editMode && (
          <Text display={["inline-flex", "none"]} fontSize="xs">
            {sheet.callSos}
          </Text>
        )}
      </Flex>
    </Card>
  );
};

CallSosCard.propTypes = {};

export default CallSosCard;
