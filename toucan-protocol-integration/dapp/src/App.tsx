import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const textHtml = useRef<HTMLHeadingElement>(null);
  const [cachedText, setCachedText] = useState("");

  const handleBlur = (val: string | null) => {
    if (val != cachedText && confirm("Save?")) {
      // request metamask
      // update current value
      setCachedText(val!);
    } else {
      // if user cancel the request
      // rollback text to old value
      textHtml.current!.textContent = cachedText;
    }
  };

  useEffect(() => {
    // fetch current text from contract
    textHtml.current!.textContent = "Text in the wall";
    setCachedText(textHtml.current!.textContent);
  }, []);

  return (
    <div className="App">
      <h1
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => handleBlur(e.target.textContent)}
        ref={textHtml}
      ></h1>
    </div>
  );
}

export default App;
