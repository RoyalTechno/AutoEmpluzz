import React from 'react';

export default function Popup() {
  function handleClick() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0].id) { 
        chrome.tabs.sendMessage(tabs[0].id, { action: 'AUTOFILL' }, (response) => {
          if (chrome.runtime.lastError) {
            console.error("🚨 Error sending message:", chrome.runtime.lastError.message);
          } else {
            console.log('✅ Autofill response:', response);
          }
        });
      } else {
        console.error("🚨 No active tab found.");
      }
    });
  }
  return (
    <div style={{ padding: 16, width: 270, fontFamily: 'Arial, sans-serif' }}>
      <img src="/Autoply Logo (48x48).png" alt="Autoply logo" style={{ width: 48, height: 48 }} />
      <h2 style={{ marginTop: 12 }}>Autoply</h2>
      <p style={{ fontSize: 14, color: '#555' }}>
        Automate your job applications with AI-powered autofill, resume matching, and referral outreach.
      </p>
      <button
        onClick={handleClick}
        style={{
          marginTop: 16,
          padding: '8px 12px',
          backgroundColor: '#0057ff',
          color: 'white',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          width: '100%'
        }}
      >
        Start Smart Apply
      </button>
    </div>
  );
}