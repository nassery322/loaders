import ReactDOM from "react-dom";
import React from "react";
import "./DetailsModal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClick} />;
};
const Overlay = (props) => {
  return (
    <div className="details-modal">
        <div className="modal-head" onClick={props.onClose}>&times;</div>
      <div className="modal-content">{props.children}</div>
    </div>
  );
};

const DetailsModal = (props) => {

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <Overlay onClose={props.onClose}>{props.children}</Overlay>,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default DetailsModal;
