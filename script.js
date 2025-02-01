// Fetch word from dictionary API to test if internet connection is valid, do not cache
async function checkOnlineStatus() {
    let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/hello';
    const timeout = 3000;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    try {
        const response = await fetch(url, {
            signal: controller.signal,
            cache: "no-store"
        });
        return response.ok;
    }
    catch (error) {
        console.error(error);
        return false;
    }
    finally {
        clearTimeout(id);
    }
}

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

    let button = document.querySelector("#online-check-button");
    button.addEventListener("click", () => {
        button.textContent = "Checking..."
        checkOnlineStatus().then(response => {
            button.textContent = `Check Online: ${response}`;
        });
    });

}

// Add listener to call init function when the DOM has loaded
document.addEventListener('DOMContentLoaded', init);