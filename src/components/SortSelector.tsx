import { Button, Menu, Portal } from "@chakra-ui/react";

interface Props {
  selectedOrder?: string;
  onSelectOrder: (ordering: string) => void;
}

const SortSelector = ({ selectedOrder, onSelectOrder }: Props) => {
  const labelMap: Record<string, string> = {
    name: "Name ↑ (A–Z)",
    "-name": "Name ↓ (Z–A)",
    metacritic: "Metacritic ↑",
    "-metacritic": "Metacritic ↓",
  };

  const options = ["name", "-name", "metacritic", "-metacritic"] as const;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="surface" size="sm">
          Sort: {labelMap[selectedOrder || "name"]}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {options.map((o) => (
              <Menu.Item value={o} key={o} onClick={() => onSelectOrder(o)}>
                {labelMap[o]}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
