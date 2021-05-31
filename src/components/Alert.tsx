import React, { FC } from "react";

interface AlertProps {
  message: string;
}

const Alert: FC<AlertProps> = ({ message }) => {
  console.log("hello");

  return (
    <>
      <div className="m-5 p-5 alert alert-dismissible alert-danger w-50 ">
        <h4 className="text-white fs-1 alert-heading">Sorry!</h4>{" "}
        <p className="text-white fs-5">{message}</p>
      </div>
    </>
  );
};

export default Alert;
