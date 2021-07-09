import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import HeaderCard from "./HeaderCard";
import AwakeCard from "./AwakeCard";
import GratefulForCard from "./GratefulForCard";
import AsleepCard from "./AsleepCard";
import TodaysTodoCard from "./TodaysTodoCard";
import TomorrowsTodosCard from "./TomorrowsTodosCard";
import WorkTodosCard from "./WorkTodosCard";
import Popup from "./Popup";
import ArtTodosCard from "./ArtTodosCard";
import ReadingCard from "./ReadingCard";
import ResearchCard from "./ResearchCard";
import AccoutabilityCard from "./AccountabilityCard";
import { EditModeProvider } from "../../contexts/EditModeContext";
import Header from "../../components/Header/Header";
import TodoItemModal from "../../components/TodoItemModal/TodoItemModal";
import { SheetProvider, useSheet } from "../../contexts/SheetContext";
import { TodoItemModalProvider } from "../../contexts/TodoItemModalContext";
import AffirmationCard from "./AffirmationCard";
import CallSosCard from "./CallSos";

const InputsPage = (props) => {
  return (
    <EditModeProvider>
      <SheetProvider>
        <TodoItemModalProvider>
          <Main />
        </TodoItemModalProvider>
      </SheetProvider>
    </EditModeProvider>
  );
};

const Main = () => {
  const params = useParams();
  const { sheet, handleGetSheet } = useSheet();

  useEffect(() => {
    handleGetSheet(params.id);
  }, [handleGetSheet, params]);

  if (!sheet) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <Flex
        p="4"
        flexDirection="column"
        experimental_spaceY={["4", "6", "8"]}
        maxW="1360"
        marginX="auto"
      >
        <Flex>
          <HeaderCard />
        </Flex>
        <Flex justifyContent="space-between">
          <AwakeCard />
          <Box w={[0, 8]} />
          <GratefulForCard />
          <Box w={[0, 8]} />
          <AsleepCard />
        </Flex>
        <Flex justifyContent="space-between">
          <AffirmationCard />
          <Box w={[0, 8]} />
          <CallSosCard />
        </Flex>
        <Flex justifyContent="space-between">
          <TodaysTodoCard />
          <Box w={[0, 8]} />
          <TomorrowsTodosCard />
        </Flex>
        <Flex justifyContent="space-between">
          <WorkTodosCard />
          <Box w={[0, 8]} />
          <ArtTodosCard />
        </Flex>
        <Flex justifyContent="space-between">
          <ReadingCard />
          <Box w={[0, 8]} />
          <ResearchCard />
        </Flex>
        <Flex>
          <AccoutabilityCard />
        </Flex>
        <Flex mb="4" />
        <Popup />
        <TodoItemModal />
      </Flex>
    </>
  );
};

InputsPage.routeName = "/main";

export default InputsPage;

/*
          Main Inputs Screen
          
          01- Today's Date
          01- Awake
          01- Grateful For
          01- Sleep
          01- Affirmation "I'm, will be"
          01- Call sos
          01- Today's Todo
          01- Tomorrow morning's todo
          01- Work/office todo
          01- Art/Learn todo
          01- Reading todo
          01- Research todo
          01- Accountability
        */
