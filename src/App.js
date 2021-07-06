import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import InputsPage from "./pages/InputsPage/InputsPage";
import { EditModeProvider } from "./contexts/EditModeContext";

function App() {
  return (
    <ChakraProvider>
      <EditModeProvider>
        <InputsPage />
      </EditModeProvider>
    </ChakraProvider>
  );
}

export default App;
