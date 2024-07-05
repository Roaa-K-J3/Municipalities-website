document.addEventListener("DOMContentLoaded", function() {
    const logoutLink = document.getElementById("logoutLink");
    
    logoutLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        
        window.location.href = "index.html";
    });
});

