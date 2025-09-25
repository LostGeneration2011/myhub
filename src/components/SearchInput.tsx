import { Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { useRef } from "react";

interface Props {
  onSearch: (text: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(ref.current?.value || "");
      }}
      style={{ width: "100%" }}>
      <InputGroup startElement={<LuSearch color="gray" />}>
        <Input
          ref={ref}
          placeholder="Search games..."
          variant="subtle"
          size="sm"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
