import { useFormikContext } from "formik";
import React from "react";
import AppButton from "../AppButton";

const SubmitButton = ({ title,loading }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} loading={loading}/>;
};

export default SubmitButton;
