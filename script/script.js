const progressBars = document.querySelectorAll('.progress-bar');
console.log(progressBars);
for (let progressBar in progressBars) {
    progressBar.addEventListener('load', function () {
        console.log(progressBar);
    });
}