import React, { useState } from 'react';
import "./styles.css"
import { PhotoshopPicker } from "react-color"


export default function App() {
  const [color, setColor] = useState("#ff0000");
  return (
    <div>
      <PhotoshopPicker
        color={color}
        onChangeComplete={color => {
          setColor(color.hex);
        }}
      />
      <div
        style={{
          backgroundColor: color,
          height: "300px",
          transition: "ease all 500ms"
        }}
      />
    </div>
  );
}

