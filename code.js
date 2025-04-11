document.addEventListener("DOMContentLoaded", () => {
    const iframe = document.getElementById("code-frame");

    // Dynamically determine the host and set the iframe URL
    const cockpitHost = window.location.hostname;
    const cockpitProtocol = window.location.protocol;
    const vscodePath = `${cockpitProtocol}//${cockpitHost}:9091/`;
    iframe.src = vscodePath;

    // Resize the iframe to match the window size
    const resizeIframe = () => {
        iframe.style.height = `${window.innerHeight}px`;
        iframe.style.width = `${window.innerWidth}px`;
    };
    window.addEventListener("resize", resizeIframe);
    resizeIframe();
});