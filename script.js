
var online = null;
// Function to be called by event listener and set the online variable
function setOnlineStatus(event) {
    online = event.type === 'online';
}
window.addEventListener('online', setOnlineStatus);
window.addEventListener('offline', setOnlineStatus);

// Initialisation function to be called when the DOM has loaded
function init() {

    // Register the service worker if it's supported and not currently active
    if ('serviceWorker' in navigator) {
        if (!navigator.serviceWorker.controller) {
            window.addEventListener('load', () => {
                navigator.serviceWorker
                    .register('/pwa-test/service-worker.js')
                    .then((registration) => {
                        console.log('Service Worker registered with scope: ', registration.scope);
                    })
                    .catch((error) => {
                        console.log('Service Worker registration failed: ', error);
                    });
            });
        } else {
            console.log('Service Worker is already controlling the page');
        }
    }

    setInterval(function () {
        const time = new Date().toLocaleTimeString();
        document.querySelector("#online-check").textContent = `Online check: ${online} at ${time}`
    }, 2000);

}

// Add listener to call init function when the DOM has loaded
document.addEventListener('DOMContentLoaded', init);