import React, { useContext } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styles from "./Map.module.scss";
import { useState } from "react";
import { Context } from "../../../Contexts/Context";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_URI,
  });

  const { markerPosition } = useContext(Context);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={15}
      center={{ lat: 50.018611, lng: 22.679722 }}
      mapContainerClassName={styles.mapContainer}
    >
      <Marker key="marker_1" position={markerPosition} draggable />
    </GoogleMap>
  );
}
