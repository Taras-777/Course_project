import React from "react";
import { Link } from "react-router-dom";
import startup from "../../images/sturtup.png";

const CatalogCard = (props) => {
  const startupId = props.startup.id;


  return (
    <div className="w-full bg-gray-500 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center border-solid border-2 border-gray-800">
      <div className="mb-8">
        <img className="h-36 w-36" src={startup} alt="" />
      </div>
      <div className="text-center">
        <p className="text-xl text-white font-bold mb-2">{props.startup.name}</p>
        <p className="text-base text-gray-300 f ont-normal">
            Date of foundation: {props.startup.dateOfFoundation}
        </p>
        <p className="text-base text-gray-300 f ont-normal">
          Business incubator: {props.startup.incubator}
        </p>
        <p className="text-base text-gray-300 f ont-normal">
          Type: {props.startup.type}
        </p>
        <p className="text-base text-gray-300 f ont-normal">
          Entrance fee: <b>{props.startup.entranceFee}$</b>
        </p>
      </div>
      <div className="flex-auto text-center pt-6">
        <Link to={`/catalog/${startupId}`} title="View more">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center">
            View more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CatalogCard;
