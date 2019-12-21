import React from "react";

export const Item = props => {
  return (
    <div
      onClick={props.onClick}
      className={`item ${props.className ? props.className : ""}`}
    >
      {props.children}
    </div>
  );
};

Item.Visible = props => {
  return <div className="visible">{props.children}</div>;
};

Item.Collapsed = props => {
  return <div className="collapsed">{props.children}</div>;
};
