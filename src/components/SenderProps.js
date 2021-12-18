import React from "react";

const SenderProps = (props) => {
  return (
    <div>
      <div className="name-s">{props.name}</div>
      <div className="address-s">{props.address}</div>
      <div className="region-s">{props.region}</div>
    </div>
  );
};

export default SenderProps;
