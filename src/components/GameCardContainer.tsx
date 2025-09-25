import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box w="100%" borderRadius={20} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;