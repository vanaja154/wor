
// Add or update the favicon
var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';  // Ensure correct MIME type
    document.head.appendChild(link);
}
link.href = '/assets/ourimages/favicon.png'; 


document.title = "Women Rider"


function loadHeader() {
    fetch('/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
      });
  }

  
function loadFooter() {
    fetch('./footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      });
  }



  

  // Call the function to load the header
    loadHeader();
    loadFooter() 



  