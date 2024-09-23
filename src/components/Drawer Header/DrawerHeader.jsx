import React from "react";

const DrawerHeader = ({ listName }) => {
  return (
    <h3 style={{ fontSize: "1.5rem", marginLeft: "22px", marginTop: "50px", color: "#1640D6" }}>
      Add {listName}:
    </h3>
  );
};

export default DrawerHeader;
