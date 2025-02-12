import React, { useEffect, useRef } from "react";
import FocusableInput from "./FocusableInput";

const StrictMode = () => {
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      console.log("mounted for the first time");
      mountedRef.current = true;
    } else {console.log("Mounted Again")}
  }, []);

  return (
    <div>
      <FocusableInput />
    </div>
  );
};

export default StrictMode;
