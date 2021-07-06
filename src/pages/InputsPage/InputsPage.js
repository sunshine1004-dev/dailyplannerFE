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

const InputsPage = (props) => {
  return (
    <Flex p="4" flexDirection="column">
      <Flex mb="4">
        <HeaderCard />
      </Flex>
      <Flex my="4" justifyContent="space-between">
        <AwakeCard />
        <Box w={[0, 8]} />
        <GratefulForCard />
        <Box w={[0, 8]} />
        <AsleepCard />
      </Flex>
      <Flex my="4" justifyContent="space-between">
        <TodaysTodoCard />
        <Box w={[0, 8]} />
        <TomorrowsTodosCard />
      </Flex>
      <Flex my="4" justifyContent="space-between">
        <WorkTodosCard />
        <Box w={[0, 8]} />
        <ArtTodosCard />
      </Flex>
      <Popup />
    </Flex>
  );
};

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
