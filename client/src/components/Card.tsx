import React from "react";

type CardProps = {
  Agency: string;
  Location: string;
  Name: string;
  DateTime: string;
  Number: number;
  Charges: string;
};

const Card = ({
  Agency,
  Location,
  Name,
  DateTime,
  Number,
  Charges,
}: CardProps) => {
  return (
    <div className="card-container">
      <div className="card-content">
        <h3>{Agency}</h3>
        <h2>{Name}</h2>
        <hr />
        <p>{Number}</p>
        <hr />
        <p>Arrest Date & Time: {DateTime}</p>
        <p>Arrest Location: {Location}</p>
        <p>Charges: {Charges}</p>
      </div>
    </div>
  );
};

export default Card;
