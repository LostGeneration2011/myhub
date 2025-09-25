import { Button, Menu, Portal } from "@chakra-ui/react";
import usePlatform, { type Platform } from "./hooks/usePlatform";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ selectedPlatform, onSelectedPlatform }: Props) => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="surface" size="sm">
          {selectedPlatform?.name || "Select a Platform to Filter"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((p) => (
              <Menu.Item
                value={String(p.id)}
                key={p.id}
                onClick={() => onSelectedPlatform(p)}
                css={{
                  _hover: {
                    bg: "gray.4",
                  },
                  cursor: "pointer",
                  borderRadius: "md",
                }}
              >
                {p.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;