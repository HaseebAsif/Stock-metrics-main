import { useSelector } from "react-redux";
import { useState } from "react";

import Header from "../Header";
import Hero from "../Hero";
import SearchBar from "../SearchBar";
import CardList from "../CardList";
import styled from "styled-components";

const AppContainer = styled.div`
  @media (min-width: 768px) {
    padding: 0 250px;
  }
`;

const Home = () => {
  const stocks = useSelector(({ stocksReducer }) => stocksReducer.stocks);
  const [value, setValue] = useState("");

  const handleSearch = (e) => {
    setValue(e.target.value);
  };

  return (
    <AppContainer>
      <Header home />
      <Hero text="Today's Total" image stocks={stocks} />
      <SearchBar handleSearch={handleSearch} data={value} />
      <CardList stocks={stocks} data={value} />
    </AppContainer>
  );
};

export default Home;
