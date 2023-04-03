if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
            console.log('Service worker registered: ', registration);
        }, function (err) {
            console.log('ServiceWorker registration failed: ', err);
        })
    })
}