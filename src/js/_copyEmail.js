export function copyEmail() {
  const copyButtons = document.querySelectorAll('[data-copy-email]');
  
  copyButtons.forEach(button => {
    let isProcessing = false;
    
    button.addEventListener('click', async () => {
      if (isProcessing) return;
      isProcessing = true;
      
      const email = button.dataset.copyEmail;
      
      const showSuccess = () => {
        button.classList.add('--copied');
        
        setTimeout(() => {
          button.classList.remove('--copied');
          isProcessing = false;
        }, 1500);
      };
      
      await navigator.clipboard.writeText(email);
      showSuccess();
    });
  });
}
