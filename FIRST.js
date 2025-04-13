document.querySelectorAll('.block').forEach(block => {
    block.addEventListener('click', () => {
        const targetPage = block.getAttribute('data-target');
        const loadingOverlay = document.getElementById('loadingOverlay');

        // Show loading overlay
        loadingOverlay.classList.add('active');

        // Redirect after 5 seconds
        setTimeout(() => {
            window.location.href = targetPage;
        }, 5000);
    });
});