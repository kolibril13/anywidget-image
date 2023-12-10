import * as React from "react";
import { createRender, useModelState } from "@anywidget/react";
import "./widget.css";

export const render = createRender(() => {
  const [width] = useModelState("width");
  const [my_im] = useModelState("value");
  const [embedImage, setEmbedImage] = useModelState("embed_image");

  const base64Prefix = "data:image/jpeg;base64,";
  const imageSrc = `${base64Prefix}${my_im}`;

  return (
    <div style={{ position: "relative" }}>
      <img src={imageSrc} alt="Descriptive Text" style={{ width }} />
      {!embedImage && <SaveButton setEmbedImage={setEmbedImage} />}
    </div>
  );
});

function SaveButton({ setEmbedImage }) {
  return (
    <button
      style={{
        position: "absolute",
        zIndex: 1000,
        left: 10,
        top: 10,
        backgroundColor: "#007bff", // Bootstrap primary blue
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer",
        outline: "none",
      }}
      onClick={async () => {
        setEmbedImage(true);
      }}
    >
      Convert
    </button>
  );
}
