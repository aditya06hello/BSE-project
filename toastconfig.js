document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('simulationVideo');
    const progressBar = document.getElementById('progressBar');
    const toast = document.getElementById('toast');


    // Update the progress bar based on video time
    video.addEventListener('timeupdate', function () {
        const percentage = (video.currentTime / video.duration) * 100;
        progressBar.style.width = percentage + '%';
    });

    // Show toast and redirect to the next page when the video ends
    video.addEventListener('ended', function () {
        toast.style.display = 'block'; // Show toast
        setTimeout(() => {
            toast.style.display = 'none'; // Hide toast after 3 seconds
            window.location.href = 'loginsuccessful.html'; // Change this to your next page URL
        }, 3000);
    });

    // Flyout functionality
    const flyout = document.getElementById('flyout');
    const openFlyoutButton = document.getElementById('openFlyout');
    const closeFlyoutButton = document.getElementById('closeFlyout');

    openFlyoutButton.addEventListener('click', () => {
        flyout.style.display = 'block';
    });

    closeFlyoutButton.addEventListener('click', () => {
        flyout.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const menu = document.getElementById('navbar-default');

    menuButton.addEventListener('click', function () {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('hidden');
    });
});