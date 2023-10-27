import React from "react";
import AppPicker from "../AppPicker";
import ErrorMessage from "../ErrorMessage";
import { useFormikContext } from "formik";

const AppFormPicker = ({
  items,
  name,
  placeholder,
  PickerItemComponent,
  numOfColums,
}) => {
  const { setFieldValue, values, errors, touched } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        placeholder={placeholder}
        numOfColumns={numOfColums}
        PickerItemComponent={PickerItemComponent}
        onSelectItem={(item) => {
          setFieldValue(name, item);
          console.log(item)
        }}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
