import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/bonglua.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (text: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justify={"space-between"} width={"100%"} p={4} gap={4}>
      <Image src={logo} alt="Logo" boxSize={"60px"} objectFit={"contain"} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;