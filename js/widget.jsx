import * as React from "react";
import { createRender, useModelState } from "@anywidget/react";
import "./widget.css";

export const render = createRender(() => {
  const [width] = useModelState("width");
  const [my_im] = useModelState("value");

  const base64Prefix = "data:image/jpeg;base64,";
  const imageSrc = `${base64Prefix}${my_im}`;

  return (
    <div>
      <img src={imageSrc} alt="Descriptive Text" style={{ width }} />
    </div>
  );
});
