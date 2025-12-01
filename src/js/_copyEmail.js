export function copyEmail() {
  const copyButtons = document.querySelectorAll('.email-copy');
  
  copyButtons.forEach(button => {
    let isProcessing = false;
    
    button.addEventListener('click', async () => {
      if (isProcessing) return;
      isProcessing = true;
      
      const email = button.querySelector('.email-copy__text').textContent.trim();
      
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
