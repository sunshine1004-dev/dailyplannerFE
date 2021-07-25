import { useUser } from "../../contexts/UserContext";
import Header from "../../components/Header/Header";
import { Box, Flex } from "@chakra-ui/react";
import TodaysTodoCard from "./MenuCard";
import { EditModeProvider } from "../../contexts/EditModeContext";
import { SheetProvider, useSheet } from "../../contexts/SheetContext";
import Popup from "../InputsPage/Popup";
import { TodoItemModalProvider } from "../../contexts/TodoItemModalContext";
import TodoItemModal from "../../components/TodoItemModal/TodoItemModal";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const JournalPage = (props) => {
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


const Main=()=>{
  	const params = useParams();
  	const { sheet, handleGetSheet } = useSheet();
  	return(
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
		          <TodaysTodoCard />
		          <Box w={[0, 8]} />
		      </Flex>
		      <Popup />
        <TodoItemModal />
		    </Flex>
		</>
		)
}
JournalPage.routeName="/journal"
export default JournalPage;