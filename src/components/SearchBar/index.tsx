import { useState } from "react";
import { api } from "../../lib/axios";
import * as Toast from "@radix-ui/react-toast";

import { MagnifyingGlass, X } from "phosphor-react";
import {
  IndividualResult,
  SearchButton,
  SearchContainer,
  SearchResultsContainer,
  ToastAction,
  ToastDescription,
  ToastRoot,
  ToastViewport,
} from "./styles";

interface Result {
  name: string;
  region: string;
  country: string;
}

interface SearchBarProps {
  getSearchResults: (result: string) => void;
}

export function SearchBar({ getSearchResults }: SearchBarProps) {
  const [search, setSearch] = useState("");
  const [apiResponse, setApiResponse] = useState([]);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);

  function openToast() {
    if (search.length < 3) {
      setIsToastOpen(true);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (search.length < 3) {
      return;
    }

    api
      .get(
        `/search.json?key=${import.meta.env.VITE_API_KEY}&q=
                ${search}`
      )
      .then((response) => {
        setApiResponse(response.data);
        if (apiResponse.length !== 0) {
          setIsResultOpen(true);
        }
      });
  }

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);

    if (search.length < 3) {
      setIsResultOpen(false);
    }
  }

  function handleGetResult(result: string) {
    getSearchResults(result);
    setSearch("");
    setIsResultOpen(false);
  }

  return (
    <SearchContainer
      isResultsOpen={isResultOpen}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div>
        <input
          type="text"
          placeholder="Search region"
          onChange={(e) => handleSearch(e)}
          value={search}
        />
        <Toast.Provider swipeDirection="right">
          <SearchButton
            type="submit"
            isResultsOpen={isResultOpen}
            onClick={openToast}
          >
            <MagnifyingGlass size={32} weight="bold" />
          </SearchButton>

          <ToastRoot open={isToastOpen} onOpenChange={setIsToastOpen}>
            <ToastAction asChild altText="Close button">
              <button>
                <X size={20} weight="bold" />
              </button>
            </ToastAction>
            <ToastDescription>
              You need at least three digits to search
            </ToastDescription>
          </ToastRoot>
          <ToastViewport />
        </Toast.Provider>
      </div>
      <SearchResultsContainer isResultsOpen={isResultOpen}>
        {apiResponse.map((result: Result) => {
          return (
            <IndividualResult onClick={() => handleGetResult(result.name)}>
              {result.name}, {result.region}, {result.country}
            </IndividualResult>
          );
        })}
      </SearchResultsContainer>
    </SearchContainer>
  );
}
