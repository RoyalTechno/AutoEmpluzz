export default function autofill() {
    console.log('🚀 Autoply: Running smart autofill...');
  
    const profileData = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
      location: 'Toronto, ON',
      gender: 'Male',
      veteran: 'No',
      disability: 'No',
      resume: 'https://yourdomain.com/resume.pdf'
    };
  
    const trySetValue = (selector, value) => {
      const input = document.querySelector(selector);
      if (input) input.value = value;
    };
  
    trySetValue('input[name*="name"], input[aria-label*="name"]', profileData.name);
    trySetValue('input[type="email"], input[name*="email"]', profileData.email);
    trySetValue('input[type="tel"], input[name*="phone"]', profileData.phone);
    trySetValue('input[name*="location"], input[aria-label*="location"]', profileData.location);
  
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
      if (textarea.placeholder?.toLowerCase().includes('why')) {
        textarea.value = `I'm passionate about applying my skills to your company’s mission.`;
      }
    });

    const selectFields = document.querySelectorAll('select');
    selectFields.forEach(select => {
      const label = select.previousElementSibling?.innerText?.toLowerCase();
      if (label?.includes('gender')) select.value = profileData.gender;
      if (label?.includes('veteran')) select.value = profileData.veteran;
      if (label?.includes('disability')) select.value = profileData.disability;
    });
  
    console.log('✅ Smart autofill complete.');
  }  