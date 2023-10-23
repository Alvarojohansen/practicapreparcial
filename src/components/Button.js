import React from "react";

const Button = ({ children, setNum, changeVerificationHandler }) => {
  const onIncrementNumberHandler = () => {
    if (children === "-") {
      setNum((prevNum) => prevNum - 1);
    } else if (children === "+") {
      setNum((prevNum) => prevNum + 1);
    }

    // Llama a changeVerificationHandler sin argumentos, ya que obtiene num de su propio contexto.
    changeVerificationHandler();
  };

  return (
    <>
      <button onClick={onIncrementNumberHandler}>{children}</button>
    </>
  );
};

export default Button;
