import {HStack, Image, Text} from '@chakra-ui/react';
import logo from '../../assets/bonglua.png';

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize={"60px"} objectFit={"contain"} alt="Logo" />
        <Text fontSize={"2xl"} fontWeight={"bold"}>My App</Text>
    </HStack>
  );
};

export default NavBar;
