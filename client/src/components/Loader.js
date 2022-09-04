import React from "react";
import {Spinner} from "react-bootstrap/Spinner";

function Loader() {
  console.log("kuch toh bata")
  return (
    <>
      <Spinner className="spinner-border m-5" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  );
}

export default Loader;
