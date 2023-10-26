import "./Button.css";

const Button = (props) => {
  return (
    <button onClick={(e) => props.command(e)} className={props.class}>
      {props.children}
    </button>
  );
};

export default Button;