import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import Card from "../Card/Card";
import classes from './ErrorModal.module.css';
import Button from "../Button/Button";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />
}

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onClick}>Okay</Button>
      </footer>
    </Card>
  )
}

const ErrorModal = (props) => {

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick}/>, 
        document.querySelector("#backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay 
          onClick={props.onClick} 
          title={props.title} 
          message={props.message}
          id={props.id}
        />, 
        document.querySelector("#modal-root")
      )}
    </Fragment>
  )
}

export default ErrorModal;