import { Box, Center, Flex, Spacer } from "@chakra-ui/react";
import HeaderCard from "./HeaderCard";
import AwakeCard from "./AwakeCard";
import GratefulForCard from "./GratefulForCard";
import AsleepCard from "./AsleepCard";
import TodaysTodoCard from "./TodaysTodoCard";
import TomorrowsTodosCard from "./TomorrowsTodosCard";

// const InputsPage = (props) => {
//   return (
//     <Flex p="4" flexDirection="column">
//       <Flex mb="4">
//         <HeaderCard />
//       </Flex>
//       <Flex my="4">
//         <AwakeCard />
//         <Box w={8} />
//         <GratefulForCard />
//         <Box w={8} />
//         <AsleepCard />
//       </Flex>
//       <Flex my="4">
//         <TodaysTodoCard />
//         <Box w={8} />
//         <TomorrowsTodosCard />
//       </Flex>
//     </Flex>
//   );
// };

const InputsPage = (props) => {
  return (
    <Flex p="4" flexDirection="column">
      <Flex mb="4">
        <HeaderCard />
      </Flex>
      <Flex my="4" flexDir={["column", "column", "column", "row"]}>
        <AwakeCard />
        <Box w={[0, 0, 0, 8]} h={[8, 8, 8, 0]} />
        <GratefulForCard />
        <Box w={[0, 0, 0, 8]} h={[8, 8, 8, 0]} />
        <AsleepCard />
      </Flex>
      <Flex my="4" flexDir={["column", "column", "column", "row"]}>
        <TodaysTodoCard />
        <Box w={[0, 0, 0, 8]} h={[8, 8, 8, 0]} />
        <TomorrowsTodosCard />
      </Flex>
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
