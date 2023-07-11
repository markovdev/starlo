import React, { useCallback, useState } from "react";
import Layout from "../components/Containers/Layout/Layout";
import Input from "../components/UI/Input/Input";
import Form from "../components/UI/Form/Form";
import Button from "../components/UI/Button/Button";
import useHttp from "../hooks/http";
import InputImg from "../components/UI/Form/InputImg/InputImg";
import Message from "../components/UI/Message/Message";
import Grid from "../components/Containers/Layout/Grid";
import Heading from "../components/Typography/Heading";
const AddRoom = () => {
  const { sendRequest, data, status, isLoading, error } = useHttp();
  const [roomPhotos, setRoomPhotos] = useState([]);
  const [singleRoomPhoto, setSingleRoomPhoto] = useState(null);
  const selectPhotosHandler = (e) => {
    const selectedPhotos = e.target.files;
    const photosArr = Array.from(selectedPhotos);
    const photos = photosArr.map((photo) => {
      return URL.createObjectURL(photo);
    });
    setRoomPhotos(photos);
  };
  const selectSinglePhotoHandler = (e) => {
    const selectedPhoto = e.target.files[0];

    const photoUrl = URL.createObjectURL(selectedPhoto);

    setSingleRoomPhoto(photoUrl);
  };
  const addRoomHandler = useCallback((e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const categories = document.getElementById("categories").value;
    const bedsCount = document.getElementById("beds").value;
    const extraBeds = document.getElementById("extraBeds").value;
    const meals = document.getElementById("meals").value;
    const status = document.getElementById("roomStatus").value;
    const summary = document.getElementById("summary").value;
    const cover = document.getElementById("roomCover").files[0];
    const photos = document.getElementById("roomPhotos").files;

    sendRequest(
      "/api/v1/rooms/",
      "POST",
      true,
      {
        name,
        price,
        categories,
        bedsCount,
        extraBeds,
        meals,
        status,
        summary,
        cover,
        photos,
      },
      true
    );
  }, []);
  return (
    <Layout>
      {error && <Message text={error.response.data.message} error />}
      {status && <Message text="Room added successfully!" />}
      {/* {error && <Message text={error?.response.data.message} error />} */}
      <div className="change-info">
        <Heading text="Add room " isTertiary />
        <Form onSubmit={addRoomHandler}>
          <Input label="Room name" id="name" />
          <Input label="Room Price" id="price" min={2} />
          <InputImg
            id="roomCover"
            photo=" /img/users/user.jpeg"
            text="Add Room Cover"
            onChange={selectSinglePhotoHandler}
          />
          {singleRoomPhoto ? (
            <div className="img-box">
              <img
                src={singleRoomPhoto}
                className="img-box__img"
                height="200"
              />
            </div>
          ) : null}
          <InputImg
            id="roomPhotos"
            photo=" /img/users/user.jpeg"
            text="Add Room Photos"
            onChange={selectPhotosHandler}
            isMulti
          />{" "}
          <Grid col="3">
            {" "}
            {roomPhotos.map((photo) => (
              <div className="img-box">
                <img src={photo} alt="" className="img-box__img" />
              </div>
            ))}
            <img
              src="blob:http://localhost:5173/107e6788-9a93-453c-8732-c35edf4d84b7"
              alt=""
            />
          </Grid>
          <Input label="Room Categories" id="categories" />
          <Input label="Room Beds" id="beds" />
          <Input label="Room Extra Beds" id="extraBeds" />
          <Input label="Room Meals " id="meals" />
          <Input label="Room Status" id="roomStatus" min={4} />
          <Input label="Room Summary" id="summary" />
          <Button text="Add Room" />
        </Form>
      </div>
    </Layout>
  );
};

export default AddRoom;
