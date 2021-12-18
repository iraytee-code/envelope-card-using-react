import React from "react";
import ReceiverProps from "./ReceiverProps";

const ReceiverDetails = () => {
  return (
    <div>
      <ReceiverProps nameReceiver="Mrs Receiver" />
      <ReceiverProps addressReceiver="123 Fake St." />
      <ReceiverProps regionReceiver="San Francisco, CA 94101" />
    </div>
  );
};

export default ReceiverDetails;
