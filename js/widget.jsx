import * as React from "react";
import { createRender, useModelState } from "@anywidget/react";
import "./widget.css";

export const render = createRender(() => {

  const my_image = "cute_dog.jpg";

  return (
    <div>
      <img src={my_image} alt="Descriptive Text" style={{ width: '500px' }} />
    </div>
  );
});
