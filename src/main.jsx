import * as THREE from "three";

// Silence NaN bounding sphere warning
const _computeBoundingSphere = THREE.BufferGeometry.prototype.computeBoundingSphere;
THREE.BufferGeometry.prototype.computeBoundingSphere = function() {
  if (this.attributes.position?.array.some(isNaN)) return;
  _computeBoundingSphere.call(this);
};

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);