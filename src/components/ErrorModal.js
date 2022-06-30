import React from "react";
import ReactDOM from "react-dom";

import styles from "./ErrorModal.module.css";
import Button from "./Button";

const OverLay = (props) => {
  const handleClick = () => {
    props.okayClicked(false);
  };

  return (
    <div className={styles.backdrop} onClick={props.okayClicked}>
      <div className={`${styles.board} ${styles.modal}`}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={handleClick}>Okay</Button>
        </footer>
      </div>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay
          title={props.title}
          message={props.message}
          okayClicked={props.okayClicked}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default ErrorModal;
