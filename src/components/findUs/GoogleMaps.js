import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function GoogleMaps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  return <div className="text-white">{isLoaded ? <Map /> : "no"}</div>;
}

export default GoogleMaps;

const Map = () => {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  return (
    <GoogleMap
      zoom={15}
      center={{ lat: 41.29528528443941, lng: 69.25788903695657 }}
      mapContainerClassName="map-container"
    >
      <Marker position={center} />{" "}
    </GoogleMap>
  );
};
