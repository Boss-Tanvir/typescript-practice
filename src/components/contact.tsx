import React from "react";

interface IProps {
  name: string;
  email: string;
}

const contact = (props: IProps) => {
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <p>Email : {props.email}</p>
    </div>
  );
};

export default contact;
