import autofill from './autofill.js';

console.log('🚀 Content script loaded');

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'AUTOFILL') {
    console.log('✅ Autoply: Autofill requested');
    autofill();
    sendResponse({ status: 'success' });
  }
});