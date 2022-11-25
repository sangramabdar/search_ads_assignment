import { useState } from "react";
import Ads from "../components/Ads";
import Search from "../components/Search";
import getAds from "../api/searchApi";
import { Divider, Stack } from "@chakra-ui/react";

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [ads, setAds] = useState([]);

  const handleOnChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleOnSearch = async (e: any) => {
    const { data, error } = await getAds(searchQuery);
    if (error) {
      setAds([]);
      return;
    }
    setAds(data);
  };

  return (
    <Stack padding={10}>
      <Search handleOnChange={handleOnChange} handleOnSearch={handleOnSearch} />
      <Divider height={1} />
      <Ads ads={ads} />
    </Stack>
  );
}

export default SearchPage;
