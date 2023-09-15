document.addEventListener('DOMContentLoaded', function() {
    // Simulate a 10-second loading process
    setTimeout(function() {
        var loading = document.getElementById('loading');
        var content = document.getElementById('content');

        loading.style.display = 'none';
        content.style.display = 'block';
    }, 10000);
});

