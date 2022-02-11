import React, { useContext } from "react";
import Wrapper from "../components/Cards/Wrapper";
import StartupList from "../components/Cards/StartupList";
import AddButton from "../components/Menu/AddButton";
import ListingTitle from "../components/Menu/ListingTitle";

const Home = () => {




  return (
    <Wrapper>
      <div className="my-6 flex justify-between">
        <ListingTitle />
        <AddButton />
      </div>
      <StartupList />
    </Wrapper>
  );
};

export default Home;
