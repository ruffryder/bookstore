import React, { useContext } from "react";
import { FaWindowClose } from "react-icons/fa";
import { UserContext } from "../context/user";

export default function Alert() {
  const { alert, hideAlert } = useContext(UserContext);
  let css = "alert-container";
  if (alert.show) {
    css += " alert-show";
    if (alert.type === "danger") {
      css += " alert-danger";
    }
  }
  return (
    <div className={css}>
      <div className="alert">
        <p>{alert.show && alert.message}</p>
        <button onClick={hideAlert} className="alert-close">
          <FaWindowClose />
        </button>
      </div>
    </div>
  );
}
