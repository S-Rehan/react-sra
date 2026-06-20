import { useState } from "react";

const AccordianItem = ({ title, body, isOpen, setIsOpen }) => {
  

  return (
    <div className="accordian-item">
      <div className="acc-title" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span>▾</span>
      </div>
      {isOpen && <div className="acc-body">{body}</div>}
    </div>
  );
};

export default AccordianItem;