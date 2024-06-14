// src/Chatbox.js
import React, { useEffect } from "react";

const Chatbox = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <df-messenger
      chat-title="Tinh Lan Cosmetics Bot"
      agent-id="631971ba-f864-4421-940d-e1954728508e"
      language-code="vi"
    ></df-messenger>
  );
};

export default Chatbox;
