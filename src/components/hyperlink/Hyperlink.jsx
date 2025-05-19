import { Link } from "react-router-dom";
import "./Hyperlink.css";
import { useContext } from "react";
import { Context } from "../../ContextAPI";

const Hyperlink = (props) => {
    const {lightMode} = useContext(Context);
    const iconSrc = props.icon?.includes("color")
  ? props.icon.replace("color", lightMode ? "000000" : "ffffff")
  : props.icon;

  return (
    <Link
      style={props.style && props.style}
      className={!props.type ? "anchor" : props.type}
      to={props.href && props.href}
      onClick={props.onClick ? props.onClick : ""}
      target={props.target && props.target}
    >
      {props.value}&nbsp;
      {props.icon && <img className="hyperlinkIcon" src={iconSrc} alt="icon" />}  
    </Link>
  );
};

export default Hyperlink;