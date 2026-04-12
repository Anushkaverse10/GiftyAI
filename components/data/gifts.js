import React from "react";

function GiftCard({ title, price, description }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: "15px",
      margin: "10px 0",
      background: "#fff"
    }}>
      <h3>{title}</h3>
      <p><strong>Price:</strong> {price}</p>
      <p>{description}</p>
    </div>
  );
}

export default GiftCard;