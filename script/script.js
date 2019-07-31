window.addEventListener('load', function () {

    let progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach(el => {
        let width = el.getAttribute('aria-valuenow');
        el.style.width = width + "%";
    });

});