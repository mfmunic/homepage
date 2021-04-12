import React from "react";

export const ContactToolbar = () => {
  return (
    <div>
      <div className="imageHolder">
        <img src={require("../utils/images/marcandhog.JPG")} alt="Sexy Beast" id="mahToolbar" />
      </div>
      <ul>
        <li>Links</li>
        <li>Email</li>
      </ul>
    </div>
  );
};
