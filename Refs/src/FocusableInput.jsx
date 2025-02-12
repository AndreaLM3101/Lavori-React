import React, { useEffect, useRef } from "react";

const FocusableInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
      inputRef.current?.focus(); // Sincero? L'ho visto nel video e devo capirlo meglio
  }, []);

  return <input ref={inputRef} type="text" placeholder="testo" />; 
};

export default FocusableInput;
