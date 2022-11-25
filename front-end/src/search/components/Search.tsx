import React from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";

interface SearchProps {
  handleOnChange: (e: any) => void;
  handleOnSearch: (e: any) => void;
}

function Search({ handleOnChange, handleOnSearch }: SearchProps) {
  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type="text"
        placeholder="Enter name"
        size="md"
        variant="outline"
        onChange={handleOnChange}
      />
      <InputRightElement width="10rem">
        <Button h="1.75rem" size="md" onClick={handleOnSearch}>
          search ads
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default Search;
