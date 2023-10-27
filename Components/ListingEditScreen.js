import React, { useEffect, useState } from "react";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "./CustomComponents/form";
import * as Yup from "yup";
import { Text } from "react-native";
import CategoryPickerItem from "./CustomComponents/CategoryPickerItem";
import AppFormImagePicker from "./CustomComponents/form/AppFormImagePicker";
import * as Location from "expo-location";
import UploadScreen from "./CustomComponents/UploadScreen";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app, db } from "../Firebase";
import * as FileSystem from "expo-file-system";
import { addDoc, collection } from "firebase/firestore";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.string().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please add atleast one image"),
});

const categories = [
  { label: "Furniture", value: 1, id: 1, backgroundColor: "red", icon: "apps" },
  {
    label: "Clothing",
    value: 2,
    id: 2,
    backgroundColor: "green",
    icon: "email",
  },
  { label: "Cameras", value: 3, id: 3, backgroundColor: "blue", icon: "lock" },
];

const ListingEditScreen = () => {
  const [location, setLocation] = useState(null);
  const [progressVisible, setProgressVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const requestHandler = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { longitude, latitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ longitude, latitude });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestHandler();
  }, []);

  const handleSubmit = (values, resetForm) => {
    setProgress(0);
    setProgressVisible(true);
    const totalImages = values.images.length;
    let overallProgress = 0;
    let uploadedFiles = 0;

    const uploadedImages = [];
    values.images.forEach(async (imageUrl) => {
      try {
        const { uri } = await FileSystem.getInfoAsync(imageUrl);
        const blob = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = () => {
            resolve(xhr.response);
          };
          xhr.onerror = (e) => {
            reject(new TypeError("Network request failed!"));
          };
          xhr.responseType = "blob";
          xhr.open("GET", uri, true);
          xhr.send(null);
        });

        const fileName =
          new Date().getTime() +
          imageUrl.substring(imageUrl.lastIndexOf("/") + 1);

        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);

        const uploadTask = uploadBytesResumable(storageRef, blob);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const prog = snapshot.bytesTransferred / snapshot.totalBytes;

            overallProgress = uploadedFiles / totalImages + prog / totalImages;

            setProgress(overallProgress);

            switch (snapshot.state) {
              case "paused":
                break;
              case "running":
                break;
              default:
            }
          },
          (error) => {
            // Handle unsuccessful uploads
            console.log(error);
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              uploadedImages.push({ url: downloadURL });
              uploadedFiles++;
              if (uploadedFiles === totalImages) {
                // All files have been uploaded
                setProgress(1); // Set progress to 100%
                // Continue with your axios.post and other logic
                const sendListing = async () => {
                  try {
                    const res = await addDoc(collection(db, "listings"), {
                      ...values,
                      images: uploadedImages,
                    });
                    setProgressVisible(false)
                    resetForm();
                  } catch (error) {
                    console.log(error)
                  }
                };
                sendListing();
              }
            });
          }
        );
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <>
      <UploadScreen visible={progressVisible} progress={progress} />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values, resetForm);
        }}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          name="price"
          placeholder="Price"
          maxLength={8}
        />
        <AppFormPicker
          items={categories}
          name="category"
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          numOfColums={3}
        />
        <AppFormField
          maxLength={255}
          name="description"
          placeholder="Description"
          numberOfLines={3}
          multiline
        />
        <SubmitButton title="Add" />
      </AppForm>
    </>
  );
};

export default ListingEditScreen;
