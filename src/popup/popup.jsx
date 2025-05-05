import React from 'react';

export default function Popup() {
  return (
    <div style={{ padding: 16, width: 270, fontFamily: 'Arial, sans-serif' }}>
      <img src="/Autoply Logo (48x48).png" alt="Autoply logo" style={{ width: 48, height: 48 }} />
      <h2 style={{ marginTop: 12 }}>Autoply</h2>
      <p style={{ fontSize: 14, color: '#555' }}>
        Automate your job applications with AI-powered autofill, resume matching, and referral outreach.
      </p>
      <button style={{
        marginTop: 16,
        padding: '8px 12px',
        backgroundColor: '#0057ff',
        color: 'white',
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer',
        width: '100%'
      }}>
        Start Smart Apply
      </button>
    </div>
  );
}