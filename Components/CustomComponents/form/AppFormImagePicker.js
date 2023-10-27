import React from "react";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "../ErrorMessage";
import { useFormikContext } from "formik";

const AppFormImagePicker = ({ name }) => {
  const { setFieldValue, values, errors, touched } = useFormikContext();
  const imageUris = values[name];

  const handleRemove = (uri) => {
    setFieldValue(name,imageUris.filter((imageUri)=>imageUri!==uri));
  };

  const handleAdd = (uri) => {
    setFieldValue(name,[...imageUris, uri]);
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onRemoveImage={handleRemove}
        onAddImage={handleAdd}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormImagePicker;
