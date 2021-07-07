import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Flex, Input, Text } from "@chakra-ui/react";
import Card from "../Card/Card";
import { useEditMode } from "../../contexts/EditModeContext";
import { useSheet } from "../../contexts/SheetContext";

const TimeCard = (props) => {
  const { editMode } = useEditMode();
  const { sheet, handleUpdateSheet } = useSheet();
  const [time, setTime] = useState("");
  const prop = useMemo(() => props.prop, [props.prop]);

  useEffect(() => {
    if (sheet[prop]) {
      setTime(sheet[prop]);
    }
  }, [sheet, prop]);

  const handleSave = () => {
    handleUpdateSheet(sheet._id, {
      [prop]: time,
    });
  };

  return (
    <Card
      title={props.title}
      sectionName={props.sectionName}
      onSave={handleSave}
    >
      <Flex alignItems="center" justifyContent="center">
        <Input
          variant="flushed"
          placeholder="Flushed"
          type="time"
          display={editMode ? "inline-flex" : ["none", "inline-flex"]}
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        {!editMode && (
          <Text display={["inline-flex", "none"]} fontSize="xs">
            {sheet[prop]}
          </Text>
        )}
      </Flex>
    </Card>
  );
};

TimeCard.propTypes = {
  title: PropTypes.string.isRequired,
  sectionName: PropTypes.string.isRequired,
  prop: PropTypes.string.isRequired,
};

export default TimeCard;
