import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CancelLink from "../components/Forms/CancelLink";
import InputField from "../components/Forms/InputField";
import SubmitButton from "../components/Forms/SubmitButton";
import SelectInput from "../components/Forms/SelectInput";

import { GlobalContext } from "../context/GlobalState";

const EditStartup = (route) => {
  let history = useHistory();

  const { startups, editStartup, startupTypes } = useContext(GlobalContext);

  const [selectedStartup, setSelectedStartup] = useState({});

  const [errors, setErrors] = useState({});

  const currentStartupId = route.match.params.id;

  const validate = (selectedStartup) => {
    const errors = {};
    const regex = /^\d*[1-9]\d*$/;

    if (!selectedStartup.name) {
      errors.name = "Startup name is required!";
    }



    if (!selectedStartup.entranceFee) {
      errors.entranceFee = "Entrance fee is required!";
    } else if (!regex.test(selectedStartup.entranceFee)) {
      errors.entranceFee = "Invalid entrance fee";
    }

    return errors;
  };

  useEffect(() => {
    const startupId = currentStartupId;
    const selectedStartup = startups.find(
      (currentStartupTraversal) => currentStartupTraversal.id === parseInt(startupId)
    );
    setSelectedStartup(selectedStartup);
  }, [currentStartupId, startups]);

  const onSubmit = (e) => {
    e.preventDefault();
    const resultErrors = validate(selectedStartup);
    setErrors(resultErrors);
    if (
      !(
        resultErrors.name ||
        resultErrors.dateOfFoundation ||
        resultErrors.incubator ||
        resultErrors.entranceFee
      )
    ) {
      editStartup(selectedStartup);
      history.push("/");
    }
  };

  const handleOnChange = (startupKey, newValue) =>
    setSelectedStartup({ ...selectedStartup, [startupKey]: newValue });

  if (!selectedStartup || !selectedStartup.id) {
    return <div>Invalid Startup ID.</div>;
  }

  return (
    <React.Fragment>
      <div className="w-full max-w-md container my-20 mx-auto">
        <form onSubmit={onSubmit}>
          <InputField
            startup={selectedStartup}
            handleOnChange={handleOnChange}
            errors={errors}
            inputFieldName="name"
            inputFieldTitle="Startup name"
            inputFieldPlaceholder="Enter startup name"
          />
          <div className="flex space-x-8 firm-control w-full">
            <InputField
              startup={selectedStartup}
              handleOnChange={handleOnChange}
              errors={errors}
              inputFieldName="dateOfFoundation"
              inputFieldTitle="Date of foundation"
              inputFieldPlaceholder="Enter date of foundation"
            />
            <InputField
              startup={selectedStartup}
              handleOnChange={handleOnChange}
              errors={errors}
              inputFieldName="incubator"
              inputFieldTitle="Incubator"
              inputFieldPlaceholder="Enter incubator"
            />
          </div>
          <div className="flex space-x-8 firm-control w-full">
            <SelectInput
              startup={selectedStartup}
              startupTypes={startupTypes}
              handleOnChange={handleOnChange}
              inputFieldName="type"
              inputFieldTitle="Stage of development"
            />
            <InputField
              startup={selectedStartup}
              handleOnChange={handleOnChange}
              errors={errors}
              inputFieldName="entranceFee"
              inputFieldTitle="Entrance fee"
              inputFieldPlaceholder="Enter entrance fee"
            />
          </div>
          <SubmitButton buttonText="Edit startup" />
          <CancelLink to="/" />
        </form>
      </div>
    </React.Fragment>
  );
};

export default EditStartup;
