import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { useEditMode } from "../../contexts/EditModeContext";
import ArtTodosCard from "./ArtTodosCard";
import AsleepCard from "./AsleepCard";
import AwakeCard from "./AwakeCard";
import GratefulForCard from "./GratefulForCard";
import HeaderCard from "./HeaderCard";
import TodaysTodoCard from "./TodaysTodoCard";
import TomorrowsTodoCard from "./TomorrowsTodosCard";
import WorkTodosCard from "./WorkTodosCard";

const Popup = () => {
  const { editMode, sectionName, setEditMode, setSectionName } = useEditMode();

  const handleClose = () => {
    setEditMode(false);
    setSectionName(null);
  };

  const renderContent = () => {
    switch (sectionName) {
      case "GRATEFUL_FOR":
        return <GratefulForCard />;
      case "HEADER":
        return <HeaderCard />;
      case "TOMORROWS_TODOS":
        return <TomorrowsTodoCard />;
      case "AWAKE":
        return <AwakeCard />;
      case "ASLEEP":
        return <AsleepCard />;
      case "TODAYS_TODOS":
        return <TodaysTodoCard />;
      case "WORK_TODOS":
        return <WorkTodosCard />;
      case "ART_TODOS":
        return <ArtTodosCard />;
      default:
        return null;
    }
  };

  return (
    <Modal isOpen={editMode} onClose={handleClose} size="xl" px="2">
      <ModalOverlay backgroundColor="white" />
      <ModalContent>{renderContent()}</ModalContent>
    </Modal>
  );
};

export default Popup;
