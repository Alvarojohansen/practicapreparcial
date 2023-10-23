
import React, { useState } from "react";
import Button from "./Button";

const Form = () => {
  const [num, setNum] = useState(0);
  const [message, setMessage] = useState("");

  const changeVerificationHandler = () => {
    if (num >=7 ) {
      setMessage("¡La semana solo tiene 7 días!");
    } else if (num <= 0) {
      setMessage("el numero no puede ser negativo");
    } else {
      setMessage("");
    }
  };

  return (
    <div>
      <div>
        <Button setNum={setNum} changeVerificationHandler={changeVerificationHandler}>
          +
        </Button>
        <input
          type="number"
          placeholder="ingrese un numero"
          onChange={changeVerificationHandler}
          value={num}
        />
        <Button setNum={setNum} changeVerificationHandler={changeVerificationHandler}>
          -
        </Button>
      </div>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Form;