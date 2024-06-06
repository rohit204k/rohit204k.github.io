document.addEventListener("DOMContentLoaded", function() {
    const githubUsername = "rohit204k"; // Replace with your GitHub username
    const apiURL = `https://api.github.com/users/${githubUsername}/repos`;
  
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        const projectsContainer = document.getElementById('github-projects');
        data.forEach(repo => {
          const projectElement = document.createElement('div');
          projectElement.classList.add('project');
  
          const projectName = document.createElement('h2');
          projectName.textContent = repo.name;
  
          const projectDescription = document.createElement('p');
          projectDescription.textContent = repo.description || 'No description available';
  
          const projectLink = document.createElement('a');
          projectLink.href = repo.html_url;
          projectLink.textContent = 'View on GitHub';
          projectLink.target = '_blank';
  
          projectElement.appendChild(projectName);
          projectElement.appendChild(projectDescription);
          projectElement.appendChild(projectLink);
  
          projectsContainer.appendChild(projectElement);
        });
      })
      .catch(error => {
        console.error('Error fetching GitHub repositories:', error);
      });
  });
  