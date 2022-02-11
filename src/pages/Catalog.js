import React, { useContext } from "react";
import Wrapper from "../components/Cards/Wrapper";
import CatalogList from "../components/Catalog/CatalogList";
import Filters from "../components/Filters/Filters";

const Catalogue = () => {


  return (
    <Wrapper>
      <Filters />
      <CatalogList />
    </Wrapper>
  );
};

export default Catalogue;
