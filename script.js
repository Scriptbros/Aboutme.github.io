document.addEventListener('DOMContentLoaded', function() {
    // Simulate a 3-second loading process
    setTimeout(function() {
        var loading = document.getElementById('loading');
        var content = document.getElementById('content');

        loading.style.display = 'none';
        content.style.display = 'block';
    }, 3000);

    // Function to toggle project details visibility
    function toggleProjectDetails(projectId) {
        var details = document.getElementById(`projectDetails${projectId}`);
        details.style.display = details.style.display === 'none' ? 'block' : 'none';
    }

    // Assign event listeners to project list items
    var projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var projectId = this.dataset.projectId;
            toggleProjectDetails(projectId);
        });
    });
});
