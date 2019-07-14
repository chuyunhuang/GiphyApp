import React from "react";

function OneGif(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.imageUrl} className="card-img-top" alt="gif" />
    </div>
  );
}

export default OneGif;
