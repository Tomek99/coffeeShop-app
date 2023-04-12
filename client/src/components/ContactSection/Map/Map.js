import React, { useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import styles from "./Map.module.scss";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_URI,
  });

  const [loadMarker, setLoadMarker] = useState(false);

  useEffect(() => {
    if (!loadMarker) {
      const interval = setInterval(() => {
        setLoadMarker(true);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [loadMarker]);

  return (
    <div>
      {!isLoaded ? (
        <div>Loading...</div>
      ) : (
        <GoogleMap
          zoom={15}
          center={{ lat: 50.018611, lng: 22.679722 }}
          mapContainerClassName={styles.mapContainer}
        >
          {loadMarker ? (
            <Marker position={{ lat: 50.018611, lng: 22.679722 }}>
              {/* <InfoWindow position={{ lat: 50.019611, lng: 22.679722 }}>
                <div>
                  <h1>InfoWindow</h1>
                </div>
              </InfoWindow> */}
            </Marker>
          ) : null}
        </GoogleMap>
      )}
    </div>
  );
}
