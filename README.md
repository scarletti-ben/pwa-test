# General
- This is a simple 'flat' repository for a `Progressive Web App` (`PWA`) in pure `HTML` / `CSS` / `JavaScript`, it features two new files that are essential for this to work
    - `manifest.json`, a configuration file that defines application info and and display mode for installation as a `PWA`
    - `service-worker.js`, a script that runs in the background to enable offline caching, push notifications, and background sync
- This repository is set up to work on `GitHub Pages` so file references are setup assuming the root for `https://scarletti-ben.github.io/pwa-test` is `https://scarletti-ben.github.io`
    - When working locally via `localhost`, setting up the server in the directory above `pwa-test` fixes some issues

### Google Chrome DevTools
Service Worker
![screenshot](screenshots/01.png)

Storage
![screenshot](screenshots/02.png)

Cache Storage
![screenshot](screenshots/03.png)

App Manifest
![screenshot](screenshots/04.png)

# Issues
- **MANY** attempts have been made to force the app to fill the space in the notch / cutout on `Pixel`, but none has worked
    - It seems to be a `Chrome` issue as the behaviour is different in `Firefox`, but `Firefox` opens two instances when you have an app version so that is another issue to fix!

# TODO
- Fullscreen / Immersive fullscreen (`display-override` in manifest, mentioned in `Chrome DevTools`)
- Learn versioning in manifest for file updates
- Follow `iOS` web app styling and apply to `Android` [link](https://www.youtube.com/watch?v=KzvK809rl3Q)
- Learn service workers and their control of the site / this site not registering new service worker if old exists

# Learnings
- The capacity of `localstorage` is roughly `5MB` *per site*