import React from "react";

export default function AlertDelete() {
  return (
    <div>
      <p className="alert-message">
        Do you want delete item? <button className="btn btn-icon">Yes</button>{" "}
        <button className="btn btn-icon">No</button>{" "}
      </p>
    </div>
  );
}
