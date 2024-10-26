document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
  
    toggleButtons.forEach((button) => {
      button.addEventListener('click', function () {
        const detailsDiv = this.nextElementSibling;
  
        if (detailsDiv.style.maxHeight) {
          detailsDiv.style.maxHeight = null; // Close the div
          detailsDiv.style.opacity = '0';
        } else {
          detailsDiv.style.maxHeight = detailsDiv.scrollHeight + 'px'; // Open the div
          detailsDiv.style.opacity = '1';
        }
      });
    });
  });
  