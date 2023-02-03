import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { api } from "../../lib/axios";
import { SearchContainer } from "./styles";

export function SearchBar() {
  const [search, setSearch] = useState("");
  const [apiResponse, setApiResponse] = useState({});

  function handleSearch(query: string) {
    setSearch(query);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    api
      .get(
        `/search.json?key=${import.meta.env.VITE_API_KEY}&q=
                ${search}`
      )
      .then((response) => {
        setApiResponse(response.data);
      });
  }

  console.log(apiResponse);

  return (
    <SearchContainer
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        type="text"
        placeholder="Search city"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button type="submit">
        <MagnifyingGlass size={32} weight="bold" />
      </button>
    </SearchContainer>
  );
}
