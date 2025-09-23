import { HStack } from "@chakra-ui/react";
import type { Platform } from "./hooks/useGame";
import type { IconType } from "react-icons";
import { FaLaptopCode, FaPlaystation, FaXbox } from "react-icons/fa";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaLaptopCode,
    playstation: FaPlaystation,
    xbox: FaXbox,
  };

  return (
    <HStack>
      {platforms.map((platform) => {
        const Icon = iconMap[platform.slug];
        return Icon ? <Icon key={platform.id} color="gray.500"/> : null;
      })}
    </HStack>
  );
};

export default PlatformIconList;