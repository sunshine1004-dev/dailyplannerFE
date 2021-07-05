import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import InputsPage from "./pages/InputsPage/InputsPage";

function App() {
  return (
    <ChakraProvider>
      <InputsPage />
    </ChakraProvider>
  );
}

export default App;
