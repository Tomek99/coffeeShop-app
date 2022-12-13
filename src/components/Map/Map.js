import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styles from "./Map.module.scss";

export default function Map() {
  const apiCode = "AIzaSyAkqueM5GpT-a-kYO8K8t_6JXW6RG-L9Z8";
  const { isLoaded } = useLoadScript({ googleMapsApiKey: apiCode });

  if (!isLoaded) return <div>Loading...</div>;
  return <ReturnMap />;
}

function ReturnMap() {
  return (
    <GoogleMap
      zoom={12}
      center={{ lat: 50.018611, lng: 22.679722 }}
      mapContainerClassName={styles.mapContainer}
    >
      <Marker />
    </GoogleMap>
  );
}
