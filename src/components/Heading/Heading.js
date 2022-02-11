import React from "react";
import startup from "../../images/sturtup.png";

const Heading = (props) => {
  return (
    <div className="flex p-24 rounded-lg border-solid border-4 border-green-300">
      <img src={startup} alt="" className="sm:w-1/2" />
      <div className="tet-left ml-20">
        <p className="text-3xl text-black font-bold mt-10">{props.startup.name}</p>
        <p className="text-lg text-black font-normal my-4">
          Date of foundation: {props.startup.dateOfFoundation}
        </p>
        <p className="text-lg text-back font-normal my-4">
          Business incubator: {props.startup.incubator}
        </p>
        <p className="text-lg text-back font-normal my-4">
          Type: {props.startup.type}
        </p>
        <p className="text-lg text-back font-normal my-4">
          Entrance fee: <b>{props.startup.entranceFee}$</b>
        </p>
      </div>
    </div>
  );
};

export default Heading;
