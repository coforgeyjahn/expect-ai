import React, { useState } from "react";
import "./loginPopup.css";

function LoginPopup({ companyName, onClose, onSubmit }) {
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [confirmAuthority, setConfirmAuthority] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!linkedinUrl || !agreeTerms || !confirmAuthority) {
      setError("Please fill all required fields.");
      return;
    }
    setError("");
    onSubmit({ linkedinUrl, agreeTerms, confirmAuthority });
  };

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <h2>Claim your profile</h2>
        <p>
          To approve a claim on your business's profile, we need a little
          information to verify your identity and connection to the business.
        </p>

        <h3 className="popup-company">{companyName}</h3>

        <label>
          LinkedIn profile URL
          <input
            type="url"
            placeholder="https://www.linkedin.com/in/"
            value={linkedinUrl}
            className="popup-checkbox"
            onChange={(e) => setLinkedinUrl(e.target.value)}
          />
        </label>

        <label>
          <input
            type="checkbox"
            checked={agreeTerms}
            className="popup-checkbox"
            onChange={(e) => setAgreeTerms(e.target.checked)}
          />
          I agree to the privacy policy and terms of service *
        </label>

        <label>
          <input
            type="checkbox"
            checked={confirmAuthority}
            className="popup-checkbox"
            onChange={(e) => setConfirmAuthority(e.target.checked)}
          />
          I am employed by {companyName} and have the authority to act on its behalf *
        </label>

        {error && <p className="popup-error">{error}</p>}

        <div className="popup-actions">
          <button onClick={handleSubmit}>
            Submit
          </button>
          <button onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPopup;
