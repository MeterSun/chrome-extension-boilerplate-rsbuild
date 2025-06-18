import React from "react";
import ReactDOM from "react-dom/client";

export function mount(Children: React.FC) {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>{<Children />}</React.StrictMode>
  );
}
