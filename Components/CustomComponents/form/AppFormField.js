import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "../ErrorMessage";
import { useFormikContext } from "formik";

const AppFormField = ({ name, ...otherProp }) => {
  const { setFieldTouched,values,setFieldValue, touched, errors } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={item=>setFieldValue(name,item)}
        value={values[name]}
        {...otherProp}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
