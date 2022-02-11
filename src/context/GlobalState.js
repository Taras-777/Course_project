import React, { createContext, useEffect, useState } from "react";
import startupsApi from "../api/api";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [startupTypes, setStartupTypes] = useState([]);
  const [filters, setFilters] = useState([]);
  const [startups, setStartups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    startupsApi
      .getStartupTypes()
      .then(({ data }) => setStartupTypes(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    startupsApi
      .getStartups(filters)
      .then(({ data }) => {
        setStartups(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [filters]);

  function addStartup(startup) {
    startupsApi
      .createStartup(startup)
      .then(({ data: createdStartup }) => {
        setStartups([...startups, createdStartup]);
      })
      .catch((err) => console.log(err));
  }

  function editStartup(startup) {
    startupsApi
      .editStartup(startup)
      .then(({ data: updatedStartup }) => {
        const updatedStartups = startups.map((z) => {
          if (z.id === updatedStartup.id) {
            return startup;
          }
          return z;
        });
        setStartups(updatedStartups);
      })
      .catch((err) => console.log(err));
  }

  function removeStartup(id) {
    startupsApi
      .deleteStartup(id)
      .then(() => {
        const updatedStartups = startups.filter((startup) => startup.id !== id);
        setStartups(updatedStartups);
      })
      .catch((err) => console.log(err));
  }

  return (
    <GlobalContext.Provider
      value={{
        startups,
        searchKeyword,
        filters,
        isLoading,
        startupTypes,
        addStartup,
        editStartup,
        removeStartup,
        setSearchKeyword,
        setFilters,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
