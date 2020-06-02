import React, { useState } from 'react';
import "./styles.css"
import { SketchPicker } from "react-color"

 function App() {
  const [color, setColor] = useState("#ff0000");
  return (
    <div>
      <SketchPicker
        color={color}
        onChangeComplete={ (color) => {setColor(color.hex)} }
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


export default App;

