import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export const Sidebar = props => {
  const [state, setState] = useState({ visible: false, activeItem: "" });
  const setVisible = () => {
    setState({ ...state, visible: !state.visible });
  };

  return (
    <div className="sidebar-main">
      {React.Children.map(
        props.children,
        (child: React.ReactElement<any>): React.ReactElement<any> => {
          if (child.type === Sidebar.Nav) {
            return React.cloneElement(child, {
              onToggle: setVisible,
              visible: state.visible,
              activeItem: state.activeItem,
              onClick: e => {
                console.log(props);
                setState({ ...state, activeItem: e });
                props.onSelected(e);
              }
            });
          } else {
            return React.cloneElement(child);
          }
        }
      )}
    </div>
  );
};

Sidebar.Nav = props => {
  return (
    <div className={`sidebar-nav ${props.visible ? "visible" : ""}`}>
      <div>
        <FontAwesomeIcon
          className="toggle"
          color="white"
          size="lg"
          icon={props.visible !== true ? faBars : faTimes}
          onClick={props.onToggle}
        />
      </div>
      {props.activeItem
        ? props.children.map((child, index) => {
            if (child.props.itemKey === props.activeItem) {
              return React.cloneElement(child, {
                key: index,
                className: "active"
              });
            } else {
              return React.cloneElement(child, {
                onClick: () => props.onClick(child.props.itemKey),
                key: index
              });
            }
          })
        : props.children.map((child, index) => {
            if (child.props.itemKey === props.default) {
              return React.cloneElement(child, {
                key: index,
                className: "active"
              });
            } else {
              return React.cloneElement(child, {
                onClick: () => props.onClick(child.props.itemKey),
                key: index
              });
            }
          })}
    </div>
  );
};

Sidebar.Content = props => {
  return <div className="sidebar-content">{props.children}</div>;
};
