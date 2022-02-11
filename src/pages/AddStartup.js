import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import CancelLink from "../components/Forms/CancelLink";
import InputField from "../components/Forms/InputField";
import SelectInput from "../components/Forms/SelectInput";
import SubmitButton from "../components/Forms/SubmitButton";

import { GlobalContext } from "../context/GlobalState";

const AddStartup = () => {
  let history = useHistory();

  const { addStartup,startupTypes } = useContext(GlobalContext);

  const [startup, setStartup] = useState({
    name: "",
    dateOfFoundation: "",
    incubator: "",
    type: startupTypes[0],
    entranceFee: "",
  });

  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const resultErrors = validate(startup);
    setErrors(resultErrors);
    if (
      !(
        resultErrors.name ||
        resultErrors.dateOfFoundation ||
        resultErrors.incubator ||
        resultErrors.type ||
        resultErrors.entranceFee
      )
    ) {
      setStartup(startup);
      addStartup(startup)
      history.push("/");
    }
  };

  const handleOnChange = (startupKey, newValue) => {
    setStartup({ ...startup, [startupKey]: newValue });
  };

  const validate = ({
    name,
    numOfVisitors,
    incubator,
    entranceFee,
  }) => {
    const errors = {};
    const regex = /^\d*[1-9]\d*$/;

    if (!name) {
      errors.name = "Startup name is required!";
    }

    if (!numOfVisitors) {
      errors.numOfVisitors = "Num of visitors is required!";
    } else if (!regex.test(numOfVisitors)) {
      errors.numOfVisitors = "Invalid num of visitors";
    }

    if (!entranceFee) {
      errors.entranceFee = "Entrance fee is required!";
    } else if (!regex.test(entranceFee)) {
      errors.entranceFee = "Invalid entrance fee";
    }

    return errors;
  };

  return (
    <React.Fragment>
      <div className="w-full max-w-md container my-20 mx-auto">
        <form onSubmit={onSubmit}>
          <InputField
            startup={startup}
            handleOnChange={handleOnChange}
            errors={errors}
            inputFieldName="name"
            inputFieldTitle="Startup name"
            inputFieldPlaceholder="Enter startup name"
          />
          <div className="flex space-x-8 firm-control w-full">
            <InputField
              startup={startup}
              handleOnChange={handleOnChange}
              errors={errors}
              inputFieldName="dateOfFoundation"
              inputFieldTitle="Date of foundation"
              inputFieldPlaceholder="Enter date of foundation"
            />
            <InputField
              startup={startup}
              handleOnChange={handleOnChange}
              errors={errors}
              inputFieldName="incubator"
              inputFieldTitle="incubator"
              inputFieldPlaceholder="incubator"
            />
          </div>
          <div className="flex space-x-8 firm-control w-full">
            <SelectInput
              startup={startup}
              startupTypes={startupTypes}
              handleOnChange={handleOnChange}
              inputFieldName="type"
              inputFieldTitle="Stage of development"
            />
            <InputField
              startup={startup}
              handleOnChange={handleOnChange}
              errors={errors}
              inputFieldName="entranceFee"
              inputFieldTitle="Entrance fee"
              inputFieldPlaceholder="Enter entrance fee"
            />
          </div>
          <SubmitButton buttonText="Add startup" />
          <CancelLink to="/" />
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddStartup;
