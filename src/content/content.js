import autofill from './autofill.js';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'AUTOFILL') {
    console.log('✅ Autoply: Autofill requested');
    autofill();
    sendResponse({ status: 'success' });
  }
});