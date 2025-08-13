import React from "react";

function AskUnaPopup({ onClose, agentMessages, userInput, setUserInput, handleAgentResponse }) {

  return (
    <div className="popup-overlay">
      <div className="popup-card chat-card">
        <div className="chat-header">
          <h2>Una Assistant</h2>
          <button onClick={onClose} className="close-button">X</button>
        </div>

        <div className="chat-messages">
          {agentMessages.map((m, idx) => (
            <div key={idx} className={`chat-message ${m.sender}`}>{m.text}</div>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAgentResponse(userInput);
                setUserInput("");
              }
            }}
            placeholder="Type your question..."
          />
          <button onClick={() => { handleAgentResponse(userInput); setUserInput(""); }}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default AskUnaPopup;
