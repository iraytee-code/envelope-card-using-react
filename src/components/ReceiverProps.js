import React from "react";

const ReceiverProps = (props) => {
  return (
    <div>
      <div className="name-s">{props.nameReceiver}</div>
      <div className="address-s">{props.addressReceiver}</div>
      <div className="region-s">{props.regionReceiver}</div>
    </div>
  );
};

export default ReceiverProps;
