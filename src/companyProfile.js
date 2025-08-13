import React, { useState } from "react";
import { FaCheckCircle } from 'react-icons/fa';
import LoginPopup from "./loginPopup";
import "./companyProfile.css";
import AskUnaPopup from "./askUnaPopup";

function CompanyProfile() {
    const [claimed, setClaimed] = useState(false);
    const company = {
        name: "Grind Coffee Roasters",
        industry: "Food & Beverage",
        commentary: "",
        recommendedPlan: {
            "Higher Profits": ["Install solar panels on factory & warehouse roofs"],
            "Fast Payback": [],
            "Lower Emissions": []
        }
    };
    const [chatOpen, setChatOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [agentMessages, setAgentMessages] = useState([
        { sender: "agent", text: "Hi! I can make suggestions, or rewrite your commentary. Try: How can I reduce my electricity & fuel costs?" },
    ]);
    const [userInput, setUserInput] = useState("");

    const handleClaim = () => setClaimed(!claimed);

    const handleAgentResponse = (response) => {
        const append = (msg) => setAgentMessages((m) => [...m, msg]);
        append({ sender: "user", text: response });

        /* Una implementation will respond to prompt below*/
        setTimeout(() => {}, 10000);
        append({sender: "agent", text: "I'm sorry, I can't answer that at this time. Please try again."})
    };

    return (
        <div className="page-wrapper">
            <div className="header-row">
                <h2 className="company-title">{company.name}</h2>
                <div className="claim-status">
                    <FaCheckCircle style={{ color: claimed ? '#28a745' : '#ccc' }} />
                    <span>{claimed ? 'Claimed' : 'Unclaimed'}</span>
                </div>
            </div>

            {!claimed && (
                <button className="primary-btn" onClick={handleClaim}>
                    Claim this Profile
                </button>
            )}
            {claimed && (
                <button className="secondary-btn" onClick={handleClaim}>
                    Unclaim this Profile
                </button>
            )}

            <div className="card">
                <h3>Company Overview</h3>
                <p><strong>Industry:</strong> {company.industry}</p>
                <p>{company.commentary || "No commentary provided yet."}</p>
            </div>

            <div className="card">
                <h3>Recommended Initiatives</h3>
                {Object.entries(company.recommendedPlan).map(([category, items]) => (
                    <div key={category} className="initiative-block">
                        <h4>{category}</h4>
                        {items.length > 0 ? (
                            <ul>
                                {items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="muted">No recommendations yet.</p>
                        )}
                    </div>
                ))}
                <button className="secondary-btn" onClick={() => setLoginOpen(true)}>
                    Explore ways to save
                </button>
            </div>

            <div className="card">
                <h3>Ask Una is your AI-powered advisor for taking profitable and sustainable actions quickly <br />
                    Hi, how can I help?
                </h3>
                <button className="secondary-btn" onClick={() => setChatOpen(true)}>
                    Try our copilot
                </button>
            </div>

            {loginOpen && (
                <LoginPopup
                    companyName={company.name}
                    onClose={() => setLoginOpen(false)}
                    onSubmit={(data) => {
                        console.log("Claim form submitted:", data);
                        setLoginOpen(false);
                        setClaimed(true);
                    }}
                />
            )}

            {chatOpen && (
                <AskUnaPopup
                    agentMessages={agentMessages}
                    userInput={userInput}
                    setUserInput={setUserInput}
                    onClose={() => setChatOpen(false)}
                    handleAgentResponse={handleAgentResponse}
                />
            )}
        </div>
    );
}

export default CompanyProfile;
