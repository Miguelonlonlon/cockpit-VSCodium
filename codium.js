document.addEventListener("DOMContentLoaded", () => {
    const iframe = document.getElementById("codium-frame");

    // Dynamically determine the host and set the iframe URL
    const cockpitHost = window.location.hostname;
    const cockpitProtocol = window.location.protocol;
    const vscodiumPath = `${cockpitProtocol}//${cockpitHost}:9091/`;
    iframe.src = vscodiumPath;

    // Resize the iframe to match the window size
    const resizeIframe = () => {
        iframe.style.height = `${window.innerHeight}px`;
        iframe.style.width = `${window.innerWidth}px`;
    };
    window.addEventListener("resize", resizeIframe);
    resizeIframe();
});