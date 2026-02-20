self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("ashen-log-v1").then(cache => {
            return cache.addAll([
                "./",
                "./index.html",
                "./manifest.json"
            ]);
        })
    );
});
