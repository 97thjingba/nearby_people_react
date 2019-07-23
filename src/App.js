import React from "react";
import "./App.css";
import { Map, Marker, NavigationControl, InfoWindow } from "react-bmap";

function App() {
  return (
    <Map center={{ lng: 116.402544, lat: 39.928216 }} zoom="11">
      <Marker position={{ lng: 116.402544, lat: 39.928216 }} />
      <NavigationControl />
      <InfoWindow
        position={{ lng: 116.402544, lat: 39.928216 }}
        text="内容"
        title="标题"
      />
    </Map>
  );
}

export default App;
