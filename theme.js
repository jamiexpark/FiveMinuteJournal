// Apply pastel, gentle, and relaxing colors to the webpage
function applyPastelTheme() {
    // Set the background color
    document.body.style.backgroundColor = "#F8F7FF";
  
    // Set the text color
    document.body.style.color = "#333333";
  
    // Modify the input field styles
    const inputs = document.querySelectorAll("input, textarea");
    for (let input of inputs) {
      input.style.backgroundColor = "#F0F0F0";
      input.style.color = "#333333";
      input.style.border = "1px solid #D0D0D0";
    }
  
    // Modify the button styles
    const buttons = document.querySelectorAll("button");
    for (let button of buttons) {
      button.style.backgroundColor = "#E6E6E6";
      button.style.color = "#333333";
      button.style.border = "1px solid #CCCCCC";
      button.style.padding = "10px 20px";
      button.style.cursor = "pointer";
    }
  
    // Modify the section styles
    const sections = document.querySelectorAll(".section");
    for (let section of sections) {
      section.style.backgroundColor = "#FFFFFF";
      section.style.border = "1px solid #D0D0D0";
      section.style.padding = "20px";
      section.style.marginBottom = "20px";
    }
  }
  
  // Call the function to apply the pastel theme when the page is loaded
  window.addEventListener("load", applyPastelTheme);
  