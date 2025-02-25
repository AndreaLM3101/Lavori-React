import React from "react";
import { useCurrentLocation } from "./useCurrentLocation";

const Location = () => {
  const { location, getLocation } = useCurrentLocation();

  getLocation();

  return (
    <div>
      <h3>Your Current Location:</h3>
      {location && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
    </div>
  );
};

export default Location;
