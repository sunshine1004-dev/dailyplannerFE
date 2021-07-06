import { useState } from "react";
import { useMutation } from "react-apollo";
import { Link } from "react-router-dom";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { COLOR_THEME } from "../../util/constants";
import { registerMutation } from "../../mutations";
import { useUser } from "../../contexts/UserContext";
import LoginPage from "../LoginPage/LoginPage";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [register, { loading }] = useMutation(registerMutation);
  const { receiveUser } = useUser();
  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ variables: { email, password } })
      .then((res) => {
        const { error, ...data } = res.data.register;
        if (error) {
          alert(error);
        } else {
          console.log({ data });
          receiveUser(data);
          localStorage.setItem("token", data.token);
        }
      })
      .catch(console.log);
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg={`${COLOR_THEME}.500`} />
        <Heading color={`${COLOR_THEME}.400`}>Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              rounded="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="email"
                    placeholder="email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {/* <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText> */}
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme={COLOR_THEME}
                width="full"
                disabled={loading || !(email && password)}
              >
                {loading ? "Please wait..." : "Register"}
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Already have an account?{" "}
        <Link to={LoginPage.routeName}>
          <Text color={`${COLOR_THEME}.500`} display="inline-block">
            Login
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};

RegisterPage.routeName = "/register";

export default RegisterPage;
