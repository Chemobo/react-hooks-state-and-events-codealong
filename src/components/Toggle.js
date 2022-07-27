import React, {useState} from "react";

function Toggle() {
  const [isOn, SetIsOn] = useState(false);

  function handleClick() {
    SetIsOn ((isOn) => !isOn);
  }

  return <button style={{ background: "red"}} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;

}

export default Toggle;
