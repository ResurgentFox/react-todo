import React from "react";

function Loader() {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "3rem" }}>
      <div className="lds-heart">
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
