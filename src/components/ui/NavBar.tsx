import {HStack, Image, Text} from '@chakra-ui/react';
import logo from '../../assets/bonglua.png';
import ColorModeSwitch from '../ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justify={"space-between"} width={"100%"} p={4} boxShadow={"md"}>
        <Image src={logo} boxSize={"60px"} objectFit={"contain"} alt="Logo" />
        {/* <Text fontSize={"2xl"} fontWeight={"bold"}>My App</Text> */}
        <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
