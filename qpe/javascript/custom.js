// JavaScript scroll functions


function scrollLeftTheme() {
   
    const scrollContainer = document.querySelector('.click-qpe');
    if (scrollContainer) {
        console.log("Container found", scrollContainer)
      scrollContainer.scrollBy({
        left: -300, // Adjust this value as needed
        behavior: 'smooth'
      });
    }
  }
  function scrollRight() {
    
    const scrollContainer = document.querySelector('.click-qpe');
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: 300, // Adjust this value as needed
        behavior: 'smooth'
      });
    }
  }