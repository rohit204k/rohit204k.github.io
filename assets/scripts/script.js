// Function to load the content into the section
function loadContent(page) {
    const contentSection = document.getElementById('content-section');
    contentSection.innerHTML = '<p>Loading...</p>'; // Add a loading message


    // Fetch and load the respective HTML file
    fetch('assets/pages/' + page + '.html')
        .then(response => response.text())
        .then(data => {
            contentSection.innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading content:", error);
            contentSection.innerHTML = "<p>Sorry, the content could not be loaded.</p>";
        });
}

// Default to load the 'experience' content on page load
loadContent('experience');