import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import CatalogCard from "../Catalog/CatalogCard";
import NoDataText from "../NoDataText/NoDataText";

const CatalogList = () => {
  const { startups, searchKeyword } = useContext(GlobalContext);

  const filteredStartups = startups.filter((startup) =>
    startup.name.toLowerCase().includes(searchKeyword)
  );


  return (
    <React.Fragment>
      {filteredStartups.length > 0 ? (
        <React.Fragment>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredStartups.map((startup) => (
              <CatalogCard key={startup.id} startup={startup} />
            ))}
          </div>
        </React.Fragment>
      ) : (
        <NoDataText text="No data text" />
      )}
    </React.Fragment>
  );
};

export default CatalogList;
