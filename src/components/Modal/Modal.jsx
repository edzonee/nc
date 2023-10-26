import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal">
      <h1 className="modal-txt">{props.titleTxt}</h1>
      {props.children}
      {/* <Button class={props.class} command={props.command}>
        {props.btnText}
      </Button> */}
    </div>
  );
};

export default Modal;
