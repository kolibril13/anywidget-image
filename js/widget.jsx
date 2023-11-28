import * as React from "react";
import { createRender, useModelState } from "@anywidget/react";
import "./widget.css";

export const render = createRender(() => {
  // Define your base64 encoded image
  const imageBase64 =
    "data:image/png;base64,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";

  // Render the image using an img tag
  return (
    <div>
      <img src={imageBase64} alt="Descriptive Text" />
    </div>
  );
});
