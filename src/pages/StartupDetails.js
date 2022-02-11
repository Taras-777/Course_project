import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button/Button";
import Wrapper from "../components/Cards/Wrapper";
import Heading from "../components/Heading/Heading";
import { GlobalContext } from "../context/GlobalState";

const StartupDetails = (route) => {
  let history = useHistory();


  const { startups } = useContext(GlobalContext);

  const [selectedStartup, setSelectedStartup] = useState({
    id: null,
    name: null,
    dateOfFoundation: null,
    incubator: null,
    type: null,
    entranceFee: null,
  });

  const currentStartupId = route.match.params.id;

  useEffect(() => {
    const startupId = currentStartupId;
    const selectedStartup = startups.find(
      (currentStartupTraversal) => currentStartupTraversal.id === parseInt(startupId)
    );
    setSelectedStartup(selectedStartup);
  }, [currentStartupId, startups]);

  return (
    <Wrapper>
      <Heading startup={selectedStartup} />
      <div className="flex justify-end py-8">
        <Button label="Go back" onClick={() => history.push("/catalog")} />
      </div>
    </Wrapper>
  );
};

export default StartupDetails;
