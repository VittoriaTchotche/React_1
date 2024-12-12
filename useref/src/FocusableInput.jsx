import { useEffect } from "react";
import { useRef } from "react";

function FocusableInput() {
  const inputRef = useRef(null);
  const mountRef = useRef(false);

  useEffect(() => {
    if (!mountRef.current) {
      mountRef.current = true;
      console.log("mounted component");
    } else {
      console.log("mounted it again");
    }

    inputRef.current?.focus();
  }, []);

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        name="input-box"
        placeholder="put name here..."
      />
    </>
  );
}

export default FocusableInput;
